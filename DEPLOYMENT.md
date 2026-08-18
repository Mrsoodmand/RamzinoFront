# RamzinoFront — Complete Deployment Guide

Build the Next.js app on your PC → test locally → upload to cPanel server → run with PM2 or cPanel Application Manager on port 3001.

---

## Part 0 — Pre-Flight Checklist

Before starting, verify everything below. Do not proceed until all items are checked.

### On Your PC

- [ ] Node.js 18+ installed — check with `node -v`
- [ ] npm installed — check with `npm -v`
- [ ] `.env.local` exists with correct values:
  ```bash
  NEXT_PUBLIC_API_BASE_URL=https://panel.ramzino.me/api/front-api-v1/
  API_URL=https://panel.ramzino.me/api/front-api-v1/
  PORT=3001
  HOSTNAME=0.0.0.0
  ```
- [ ] `next.config.js` has `output: 'standalone'` — check with `grep standalone next.config.js`
- [ ] `ecosystem.config.js` exists in project root
- [ ] `start.js` exists in project root

### On the Server (cPanel → Terminal)

- [ ] cPanel Terminal access works — open cPanel → Advanced → Terminal
- [ ] Node.js 18+ installed — check with `node -v`
  - If not installed: see Part C, Step 12
- [ ] npm installed — check with `npm -v`
- [ ] Domain/subdomain resolves to server — check with `ping yourdomain.com` from your PC

---

## Part A — Build on Your PC

### Step 1: Set environment variables

Make sure `.env.local` has the correct production values:

```bash
# .env.local
NEXT_PUBLIC_API_BASE_URL=https://panel.ramzino.me/api/front-api-v1/
API_URL=https://panel.ramzino.me/api/front-api-v1/
PORT=3001
HOSTNAME=0.0.0.0
```

| Variable | Description | Used |
|---|---|---|
| `NEXT_PUBLIC_API_BASE_URL` | Backend API URL (baked at build time) | Client + Server |
| `API_URL` | Backend API URL (read at runtime via start.js) | Server fallback |
| `PORT` | Server port (default: 3001) | Server |
| `HOSTNAME` | Server bind address (default: 0.0.0.0) | Server |

> **CRITICAL:** `NEXT_PUBLIC_*` variables are embedded into the JavaScript bundle at **build time**. Changing the API URL after building requires a full rebuild. Editing `.env` on the server will NOT change it.

### Step 2: Install dependencies

```bash
npm install
```

Verify no errors in output.

### Step 3: Build the project

```bash
npm run build
```

Wait for the build to finish. You should see:
```
✓ Compiled successfully
✓ Generating static pages
✓ Finalizing page optimization
```

If the build fails, fix the errors before continuing. Do not upload a broken build.

### Step 4: Verify the standalone output exists

```bash
ls .next/standalone/
```

You should see: `server.js`, `node_modules/`, `.next/`, `package.json`, `components/`, `icons/`, `pages/`, `reduxStates/`, `styles/`

If `.next/standalone/` doesn't exist, verify `next.config.js` has `output: 'standalone'`.

### Step 5: Copy static files into standalone

Next.js standalone does NOT include static assets. Copy them manually:

```bash
# Copy static chunks (JS, CSS)
cp -r .next/static .next/standalone/.next/static

# Copy public assets (images, fonts, icons, favicon, etc.)
cp -r public .next/standalone/public
```

### Step 6: Verify static files were copied

```bash
ls .next/standalone/.next/static/
ls .next/standalone/public/
```

If `.next/static/` is empty or missing, your CSS/JS won't load on the server. Go back to Step 5.

### Step 7: Copy ecosystem config and start script

These files tell PM2 which port to use and load `.env` before starting the server:

```bash
cp ecosystem.config.js .next/standalone/ecosystem.config.js
cp start.js .next/standalone/start.js
```

### Step 8: Create `.env` file for the server

Create a `.env` file inside `.next/standalone/`:

```bash
cat > .next/standalone/.env << 'EOF'
NEXT_PUBLIC_API_BASE_URL=https://panel.ramzino.me/api/front-api-v1/
API_URL=https://panel.ramzino.me/api/front-api-v1/
PORT=3001
HOSTNAME=0.0.0.0
EOF
```

> `HOSTNAME=0.0.0.0` is critical — without it, the app may only listen on localhost and Apache's reverse proxy won't reach it (causing 503 errors).

### Step 9: Zip the standalone folder

```bash
cd .next/standalone
zip -r ../ramzino-deploy.zip .
cd ../..
```

This produces `.next/ramzino-deploy.zip`.

### Step 10: Verify the zip contents

```bash
unzip -l .next/ramzino-deploy.zip | head -30
```

Make sure you see: `server.js`, `start.js`, `ecosystem.config.js`, `.env`, `node_modules/`, `.next/static/`, and `public/`.

If any are missing, go back to the relevant step above.

---

## Part B — Test Build Locally

Before uploading, test that the standalone build actually works on your PC.

### Step 11: Start the app locally

```bash
cd .next/standalone
node start.js
```

You should see:
```
[start.js] Loaded .env — PORT=3001, HOSTNAME=0.0.0.0
> Ready on http://0.0.0.0:3001
```

### Step 12: Open in browser

Open [http://localhost:3001](http://localhost:3001) in your browser.

Verify:
- [ ] Page loads (not a blank page)
- [ ] CSS is applied (page is styled, not raw HTML)
- [ ] Images load
- [ ] No console errors (press F12 → Console)
- [ ] API calls work (check Network tab — requests to `panel.ramzino.me` should return data)

### Step 13: Check for sharp errors

You may see this in the terminal:
```
⨯ Error: 'sharp' is required to be installed in standalone mode
```

This is **expected on macOS** — the standalone build bundles Linux sharp binaries. This will be fixed on the server (Part E, Step 18). Images may not load locally but will work on the server after installing sharp.

### Step 14: Stop the local server

Press `Ctrl+C` in the terminal to stop.

### Step 15: If errors — fix and rebuild

If the page doesn't load, CSS is missing, or API calls fail:
1. Fix the issue in your code or `.env.local`
2. Go back to Step 3 (`npm run build`)
3. Re-copy static files (Step 5)
4. Re-test locally

Do not upload until the local test passes.

---

## Part B — Prepare the Server

### Step 12: Install Node.js on the server

1. Log in to **cPanel**
2. Go to **Software → Setup Node.js App**
3. Click **Create Application**
   - **Node.js version:** 18.x or 20.x
   - **Application mode:** Production
   - **Application root:** `ramzino`
   - **Application URL:** your domain/subdomain
4. Click **Create**

> If "Setup Node.js App" is not available, open **cPanel → Terminal** and check:
> ```bash
> node -v
> ```
> If Node.js is not installed, use **nvm**:
> ```bash
> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
> source ~/.bashrc
> nvm install 20
> node -v  # verify installation
> ```

### Step 13: Verify Node.js and npm work

In cPanel Terminal:

```bash
node -v
npm -v
```

Both should return version numbers. If not, Node.js is not properly installed.

---

## Part C — Upload Files to Server

### Step 14: Upload the zip file

1. In cPanel, open **Files → File Manager**
2. Navigate to where you want the app (e.g. `public_html/ramzino` or a folder outside public_html like `ramzino`)
3. Click **Upload** and select `ramzino-deploy.zip`
4. Wait for upload to complete

> **Tip:** If the zip is large, upload via FTP instead of File Manager for better reliability.

### Step 15: Extract the zip

1. In File Manager, right-click `ramzino-deploy.zip`
2. Click **Extract**
3. Choose the destination folder
4. Click **Extract Files**

### Step 16: Verify all files are present

In cPanel Terminal:

```bash
cd ~/public_html/ramzino   # or wherever you extracted
ls -la
```

You MUST see all of these:
- `server.js` — the Next.js standalone server
- `start.js` — loads `.env` file before starting server
- `ecosystem.config.js` — PM2 config
- `.env` — environment variables
- `node_modules/` — minimal runtime dependencies
- `.next/` — build output
- `.next/static/` — CSS/JS chunks (if missing, pages won't load)
- `public/` — images, fonts, icons (if missing, static assets won't load)

Check specifically:
```bash
ls .next/static/
ls public/
```

If `.next/static/` is empty, you forgot Step 6. Re-zip on your PC with the static files and re-upload.

### Step 17: Delete the zip file

```bash
rm ramzino-deploy.zip
```

---

## Part D — Install sharp (Image Optimization)

### Step 18: Install sharp on the server

The standalone build includes `sharp` with **macOS native binaries**. Your Linux server needs Linux binaries. Install them:

```bash
cd ~/public_html/ramzino
npm install sharp
```

### Step 19: Verify sharp works

```bash
node -e "require('sharp'); console.log('sharp OK')"
```

You should see `sharp OK`. If you get an error, try:

```bash
npm install sharp --build-from-source
```

> If sharp still doesn't work, you can disable image optimization as a fallback. Edit `next.config.js` on your PC, add `images: { unoptimized: true }`, rebuild, and re-upload. Images will still load but without optimization.

---

## Part E — Install PM2 and Start the App

### Step 20: Install PM2

```bash
npm install -g pm2
```

If you get permission errors:

```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
npm install -g pm2
```

### Step 21: Verify PM2 is installed

```bash
pm2 --version
```

If `pm2: command not found`, run:

```bash
export PATH=~/.npm-global/bin:$PATH
source ~/.bashrc
```

### Step 22: Start the app with PM2

```bash
cd ~/public_html/ramzino
pm2 start ecosystem.config.js
```

This reads `ecosystem.config.js` which starts `start.js`. The `start.js` script loads `.env` (setting `PORT=3001` and `HOSTNAME=0.0.0.0`) before starting `server.js`.

> **Do NOT use `pm2 start server.js` directly** — it won't load the `.env` file. Always use `pm2 start ecosystem.config.js`.
>
> The `ecosystem.config.js` also sets `PORT=3001` as a fallback, so even if `.env` is missing, the app will still use port 3001.

### Step 23: Verify the app is running

```bash
pm2 status
```

You should see `ramzino` with status **online** and a green checkmark.

### Step 24: Check the logs for errors

```bash
pm2 logs ramzino --lines 30
```

Look for a line like:
```
> Ready on http://0.0.0.0:3001
```

If you see errors, read them carefully. Common issues:
- `EADDRINUSE` — port 3001 is already in use (see Troubleshooting)
- `Cannot find module` — files are missing from the upload
- `sharp is required` — go back to Step 18

### Step 25: Test the app locally on the server

```bash
curl http://127.0.0.1:3001
```

You should get HTML output (your Next.js page). If you see HTML, the app is working.

If `curl` returns nothing or errors:
- Check `pm2 logs ramzino` for errors
- Try `curl http://localhost:3001`
- Make sure port 3001 is actually listening: `ss -tlnp | grep 3001`

**If curl works but your domain doesn't load, the issue is the Apache reverse proxy (continue to Part F).**

**If curl doesn't work, the app itself has a problem (check logs in Step 24).**

### Step 26: Save PM2 process list (survive reboots)

```bash
pm2 save
```

Then set up startup script:

```bash
pm2 startup
```

PM2 will print a command like `sudo env PATH=... pm2 startup ...`. Copy and run that command.

Then save again:

```bash
pm2 save
```

---

## Part F — Set Up Apache Reverse Proxy

Your app runs on port 3001, but visitors access your domain on port 80/443. You need Apache to proxy requests to port 3001.

### Step 27: Check if Apache proxy modules are enabled

```bash
httpd -M 2>/dev/null | grep proxy || apache2ctl -M 2>/dev/null | grep proxy
```

You need to see:
- `proxy_module`
- `proxy_http_module`

If these modules are NOT loaded, `.htaccess` proxy won't work. Contact your hosting provider to enable them, or use cPanel's Application Manager instead.

### Step 28: Create or edit `.htaccess`

Find your `.htaccess` file. It's usually in `public_html/` (the document root of your domain).

```bash
nano ~/public_html/.htaccess
```

Add this at the top:

```apache
<IfModule mod_proxy.c>
    ProxyPreserveHost On
    ProxyPass / http://127.0.0.1:3001/
    ProxyPassReverse / http://127.0.0.1:3001/
</IfModule>
```

Save and exit (Ctrl+O, Enter, Ctrl+X in nano).

> If you're using a subdomain (e.g. `app.ramzino.me`), the `.htaccess` should be in the subdomain's document root, not the main `public_html/`.

### Step 29: Test your domain

Open your browser and visit your domain. You should see your Next.js app.

If you still get 503:

1. Verify the app is running: `pm2 status`
2. Verify curl works: `curl http://127.0.0.1:3001`
3. Check Apache error logs: `tail -50 /var/log/apache2/error.log` or via cPanel → Metrics → Errors
4. Try an alternative `.htaccess` config:

```apache
<IfModule mod_proxy.c>
    RewriteEngine On
    RewriteRule ^(.*)$ http://127.0.0.1:3001/$1 [P,L]
</IfModule>
```

### Step 30: Alternative — Use cPanel Application Manager

If `.htaccess` proxy doesn't work (modules not enabled), use cPanel's Application Manager:

1. Go to **cPanel → Software → Setup Node.js App**
2. Edit your existing application (or create new)
3. Set:
   - **Application root:** path to your `ramzino` folder
   - **Application startup file:** `server.js`
   - **Application mode:** Production
4. Under **Environment variables**, add:
   - `PORT` = `3001`
   - `HOSTNAME` = `0.0.0.0`
   - `NEXT_PUBLIC_API_BASE_URL` = `https://panel.ramzino.me/api/front-api-v1/`
   - `API_URL` = `https://panel.ramzino.me/api/front-api-v1/`
5. Click **Run App** or **Restart**

> If using cPanel Application Manager, do NOT also run PM2 — they will conflict. Choose one or the other.

---

## Part G — Operational Commands

All commands run from **cPanel Terminal**.

### View app status

```bash
pm2 status
```

### View logs

```bash
pm2 logs ramzino
```

Last 100 lines only:

```bash
pm2 logs ramzino --lines 100
```

### Stop the app

```bash
pm2 stop ramzino
```

### Restart the app

```bash
pm2 restart ramzino
```

### Update code (new build)

**On your PC:**

1. Make code changes
2. Update `.env.local` if API URL changed
3. Rebuild:
```bash
npm run build
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
cp ecosystem.config.js .next/standalone/ecosystem.config.js
cp start.js .next/standalone/start.js
cd .next/standalone
zip -r ../ramzino-deploy.zip .
```

**On the server:**

1. Upload `ramzino-deploy.zip` via File Manager
2. Extract (overwrite existing files)
3. Reinstall sharp (new zip has macOS binaries again):
```bash
cd ~/public_html/ramzino
npm install sharp
```
4. Restart PM2:
```bash
pm2 restart ramzino
```
5. Verify:
```bash
curl http://127.0.0.1:3001
```

### Delete the app from PM2

```bash
pm2 delete ramzino
pm2 save
```

---

## Part H — Troubleshooting

### 503 Service Unavailable

This means Apache can't reach your app. Check in order:

1. **Is PM2 running?**
   ```bash
   pm2 status
   ```

2. **Is the app listening on port 3001?**
   ```bash
   curl http://127.0.0.1:3001
   ```
   If this returns HTML, the app works — the problem is Apache proxy.
   If this fails, the app isn't running properly — check `pm2 logs ramzino`.

3. **Is the app on the wrong port?**
   ```bash
   ss -tlnp | grep node
   ```
   If you see port 3000 instead of 3001, PM2 didn't load the env vars. Fix:
   ```bash
   pm2 delete ramzino
   cd ~/public_html/ramzino
   pm2 start ecosystem.config.js
   pm2 save
   ```

4. **Are Apache proxy modules enabled?**
   ```bash
   httpd -M 2>/dev/null | grep proxy || apache2ctl -M 2>/dev/null | grep proxy
   ```
   If no output, contact hosting to enable `mod_proxy` and `mod_proxy_http`.

5. **Is `.htaccess` in the right place?**
   ```bash
   cat ~/public_html/.htaccess
   ```
   It must be in the document root of your domain.

### `sharp` is required in standalone mode

```bash
cd ~/public_html/ramzino
npm install sharp
pm2 restart ramzino
```

Verify: `node -e "require('sharp'); console.log('sharp OK')"`

If sharp still fails, disable image optimization:
- On your PC, edit `next.config.js`:
  ```js
  images: {
    unoptimized: true,
  }
  ```
- Rebuild and re-upload.

### `pm2: command not found`

```bash
export PATH=~/.npm-global/bin:$PATH
source ~/.bashrc
```

### Static files (CSS/JS/images) return 404

You forgot to copy static files. On your PC:
```bash
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
```
Re-zip, re-upload, extract, and restart.

### `NEXT_PUBLIC_API_BASE_URL` is undefined or wrong

`NEXT_PUBLIC_*` variables are baked in at **build time**. You must:
1. Update `.env.local` on your PC
2. Rebuild: `npm run build`
3. Re-copy static files and re-zip
4. Re-upload and restart

Editing `.env` on the server will NOT change `NEXT_PUBLIC_*` values.

### Node.js version mismatch

Check your local Node version:
```bash
node -v
```

Ensure the server has the same or newer version:
```bash
node -v  # on server
```

If the server has an older version, update it via "Setup Node.js App" in cPanel or via nvm.

### Port 3001 already in use

```bash
pm2 delete ramzino
ss -tlnp | grep 3001    # find what's using it
kill -9 <PID>           # kill that process
pm2 start ecosystem.config.js
```

Or use a different port by editing `ecosystem.config.js`:
```js
env: {
  PORT: 3002,
}
```
Then restart and update your `.htaccess` proxy to point to the new port.

### App crashes immediately after starting

Check logs:
```bash
pm2 logs ramzino --lines 50
```

Common causes:
- Missing files in the upload (re-verify Step 16)
- Node.js version too old
- `sharp` not installed (Step 18)
- `.env` file missing or malformed

### Blank page (HTML loads but no content)

- Check browser console (F12) for errors
- Likely `.next/static/` is missing — CSS/JS chunks aren't loading
- Verify: `ls .next/static/` on the server
- If empty, re-upload with static files

---

## Quick Reference

| Action | Command |
|---|---|
| Start | `pm2 start ecosystem.config.js` |
| Start (no PM2) | `node start.js` |
| Stop | `pm2 stop ramzino` |
| Restart | `pm2 restart ramzino` |
| Status | `pm2 status` |
| Logs | `pm2 logs ramzino` |
| Delete | `pm2 delete ramzino` |
| Save PM2 list | `pm2 save` |
| Startup script | `pm2 startup` |
| Test locally | `curl http://127.0.0.1:3001` |
| Check port | `ss -tlnp \| grep 3001` |

---

## File Checklist

Before uploading, verify your `.next/standalone/` contains:

- [ ] `server.js`
- [ ] `start.js` (loads .env before starting server)
- [ ] `ecosystem.config.js`
- [ ] `.env` (with NEXT_PUBLIC_API_BASE_URL, API_URL, PORT=3001, HOSTNAME=0.0.0.0)
- [ ] `node_modules/` (auto-included by standalone)
- [ ] `.next/static/` (manually copied)
- [ ] `.next/server/` (auto-included by standalone)
- [ ] `public/` (manually copied — images, fonts, icons, favicon)
- [ ] `components/` (auto-included by standalone)
- [ ] `icons/` (auto-included by standalone)
- [ ] `pages/` (auto-included by standalone)
- [ ] `reduxStates/` (auto-included by standalone)
- [ ] `styles/` (auto-included by standalone)
- [ ] `package.json` (auto-included by standalone)

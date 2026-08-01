export function setCookie(cname, cvalue, exdays = 1000000000) {
  if (typeof window != "undefined") {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    window.document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
}

export function getCookie(cname) {
  if (typeof window != "undefined") {
    let name = cname + "=";
    let ca = window.document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}

export function checkCookie(name) {
  if (typeof window != "undefined") {
    let user = getCookie(name);
    if (user === "") {
      return false;
    }
    return true;
  }
}

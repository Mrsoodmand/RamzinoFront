module.exports = {
  apps: [
    {
      name: 'ramzino',
      script: 'start.js',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
        HOSTNAME: '0.0.0.0',
        NEXT_PUBLIC_API_BASE_URL: 'https://panel.ramzino.me/api/front-api-v1/',
        API_URL: 'https://panel.ramzino.me/api/front-api-v1/',
      },
    },
  ],
};

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Configuration
const PORT = 8001;
const HOST = 'localhost';
const API_SERVICE_URL = 'https://itunes.apple.com/search';

// Info GET endpoint
app.get('/info', (req, res, next) => {
  res.send(
    'This is a proxy service which should connect to Apple Music service.'
  );
});

// Proxy endpoints
app.use(
  '/search',
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      '^/json_placeholder': ''
    }
  })
);

// Start the Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});

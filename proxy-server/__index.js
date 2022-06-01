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

const testReq = (proxyReq, req, res) => {
  console.log(proxyReq);
};

const testRes = (proxyRes, req, res) => {
  proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  proxyRes.headers['Access-Control-Allow-Methods'] =
    'GET, PUT, PATCH, POST, DELETE';
  proxyRes.headers['Access-Control-Allow-Headers'] = req.header(
    'access-control-request-headers'
  );
};

const testError = (err, req, res) => {
  console.log(err);
};

// Proxy endpoints
app.get(
  '/search',
  createProxyMiddleware({
    target: API_SERVICE_URL,
    on: {
      proxyReq: testReq,
      proxyRes: testRes,
      error: testError
    }
  })
);

// Start the Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});

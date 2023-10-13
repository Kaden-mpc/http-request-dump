const express = require('express');
const app = express();

app.all('*', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const response = {
    ip: ip,
    url: req.url,
    method: req.method,
    headers: req.headers,
    body: req.body,
  };
  res.status(200).json(response);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on 0.0.0.0:${port}`);
});

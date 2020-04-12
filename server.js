const path = require('path');
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'public')));

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
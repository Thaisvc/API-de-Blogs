const express = require('express');

// ...

const app = express();

app.use(express.json());

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

// -----------------------------------------------
const routers = require('./routers/routers');

app.use(routers);

module.exports = app;

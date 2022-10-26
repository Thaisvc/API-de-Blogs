const express = require('express');

// ...

const app = express();

app.use(express.json());

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

// -----------------------------------------------
require('express-async-errors');

const errorMiddleware = require('./middlewares/error');

const routers = require('./routers/routers');

app.use(routers);

app.use(errorMiddleware);

module.exports = app;

const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const app = express();

app.use(helmet());
app.use(compression());

app.use(express.static('dist'));

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('App listening on port ', port);
});

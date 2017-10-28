'use strict';
const bull = require('./lib/bull');

module.exports = app => {
  if (app.config.bull) {
    bull(app);
  }
};


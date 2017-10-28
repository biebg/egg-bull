'use strict';

const bull = require('./lib/bull');

module.exports = agent => {
  if (agent.config.bull.agent) {
    bull(agent);
  }
};

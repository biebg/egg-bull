'use strict';
const assert = require('assert');
const Queue = require('bull');

module.exports = app => {
  app.addSingleton('bull', createBull);
};

function createBull(config, app) {
  assert(config.redis && config.redis.host && config.redis.port && config.topic, `[egg-bull] redis:${JSON.stringify(config.redis)} queue:${config.queue} topic:${config.topic} are required on config`);

  app.coreLogger.info('[egg-bull] connecting to %s:%s', config.redis.host, config.redis.port);
  console.log('config', config);
  return new Queue(config.topic, { redis: config.redis });
}

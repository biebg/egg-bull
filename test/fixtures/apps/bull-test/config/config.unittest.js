'use strict';

exports.keys = '123456';

exports.bull = {
  default: {
    redis: {
      host: '127.0.0.1',
      port: 6379,
    },
  },
  clients: {
    TestQueue: { topic: 'test' },
  },
  app: true,
  agent: true,
};

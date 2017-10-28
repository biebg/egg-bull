'use strict';

const assert = require('assert');
const request = require('supertest');
const mm = require('egg-mock');

describe('test/bull.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/bull-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should query index', () => {
    return request(app.callback())
      .get('/')
      .expect(200);
  });

  it('test bull process', function(done) {
    app.bull.get('TestQueue').add({ message: 'hi bull' });
    app.bull.get('TestQueue').process(function(job) {
      assert(job.data.message === 'hi bull');
      done();
    });
  });
});

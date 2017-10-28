# egg-bull

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-bull.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-bull
[travis-image]: https://img.shields.io/travis/eggjs/egg-bull.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-bull
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-bull.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-bull?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-bull.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-bull
[snyk-image]: https://snyk.io/test/npm/egg-bull/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-bull
[download-image]: https://img.shields.io/npm/dm/egg-bull.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-bull

[bull](https://github.com/OptimalBits/bull) plugin for egg framework

## Install

```bash
$ npm i egg-bull --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.bull = {
  enable: true,
  package: 'egg-bull',
};
```

## Configuration

```js
// {app_root}/config/config.unittest.js
exports.bull = {
   default: {
      redis: {
        host: '127.0.0.1',
        port: 6379,
      }
    },
    clients: {
      TestQueue: {topic: 'test'},
    },
    app: true,
    agent: false
};
```

see [config/config.unittest.js](config/config.unittest.js) for more detail.

## Example

```javascript
   app.bull.get('TestQueue').add({ message: 'hi bull' });
   app.bull.get('TestQueue').process(function(job) {
      assert(job.data.message === 'hi bull');
      done();
    });

```

see [bull home page](https://github.com/OptimalBits/bull) for more details

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)

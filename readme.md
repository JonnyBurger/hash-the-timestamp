# hash-the-timestamp [![Build Status](https://travis-ci.org/JonnyBurger/hash-the-timestamp.svg?branch=master)](https://travis-ci.org/JonnyBurger/hash-the-timestamp) [![Coverage Status](https://coveralls.io/repos/github/JonnyBurger/hash-the-timestamp/badge.svg?branch=master)](https://coveralls.io/github/JonnyBurger/hash-the-timestamp?branch=master)

> Tiny utility to hash the timestamp

A lightweight library to efficiently hash the timestamp.

* Simple API
* Uses secure SHA512 hashes
* Useful for blockchain
* Works in the browser and on the server
* Fully tested, 100% test coverage

## Install

```
$ npm install --save hash-the-timestamp
```


## Usage

```js
const hashTheTimestamp = require('hash-the-timestamp');

hashTheTimestamp(new Date('2018-06-20 10:00:00 UTC+1'));
//=> '3a8828cb5f8dbd44f3165f3e733aac831ed164c9665e8c6e2e1b728f61db97bb7d920e3510b3c48d1a03f323d1d13c982ac9de4f3ff277f6a6fb55e34cc62c97'
```


## API

### hashTheTimestamp(timestamp)

Return value: The hash of the timestamp

#### timestamp

Type: `number`

The timestamp you want to hash.


## Contributing

Pull requests welcome! Please include tests and follow the style conventions.
Run `npm test` to verify

## License

MIT © [Jonny Burger](https://jonny.io)

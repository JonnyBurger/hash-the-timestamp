'use strict';

const crypto = require('isomorphic-crypto');
const isTimestamp = require('is-timestamp');

function sha512(string) {
	const hash = crypto.createHash('sha512');
	hash.write(string);
	return hash.digest('hex');
}

module.exports = timestamp => {
	if (timestamp instanceof Date) {
		timestamp = timestamp.getTime();
	}
	if (!isTimestamp(timestamp)) {
		throw new TypeError(`Expected a timestamp, got ${typeof timestamp}`);
	}

	return sha512(String(timestamp));
};

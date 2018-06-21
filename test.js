import test from 'ava';
import fn from '.';

test('Should not hash no timestamp', t => {
	const err = t.throws(() => fn('not a timestampt'), TypeError);
	t.regex(err.message, /Expected a timestamp/);
});

test('Should hash the timestamp', t => {
	const hash = fn(new Date('2018-06-21 10:00:00 UTC+1').getTime());
	t.is(hash, '3a8828cb5f8dbd44f3165f3e733aac831ed164c9665e8c6e2e1b728f61db97bb7d920e3510b3c48d1a03f323d1d13c982ac9de4f3ff277f6a6fb55e34cc62c97');
});

test('Should also hash a Date object', t => {
	const hash = fn(new Date('2018-06-21 10:00:00 UTC+1'));
	t.is(hash, '3a8828cb5f8dbd44f3165f3e733aac831ed164c9665e8c6e2e1b728f61db97bb7d920e3510b3c48d1a03f323d1d13c982ac9de4f3ff277f6a6fb55e34cc62c97');
});

'use strict';
const reviews = require('./reviews.json');

module.exports = (opts) => {
	opts = opts || {};
	let r = reviews;

	if (opts.good) {
		r = reviews.filter(review => review.rating > 5);
	}

	if (opts.bad) {
		r = reviews.filter(review => review.rating < 5);
	}

	return r[Math.floor(Math.random() * r.length)];
};

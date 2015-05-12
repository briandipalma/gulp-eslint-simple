'use strict';

var cli = require('eslint').cli;
var through = require('through2');

module.exports = function() {
	return through.obj(function(file, enc, cb) {
		cli.execute(['', '', '--quiet', file.relative]);

		cb();
	});
};

'use strict';

var gulpESLint = require('./');

function getFixtureFile (name) {
	return new gutil.File({
		cwd: __dirname,
		base: __dirname + '/fixture' + name.substring(0, name.lastIndexOf('/')),
		path: __dirname + '/fixture/' + name,
		contents: new Buffer(fixtures[name])
	});
}

var fixtures = {
	'erroring.js': 'function _underscore() {}'
};

it('should lint provided file', function(cb) {
	//Given.
	var stream = gulpESLint();

	stream.on('data', lintResults);

	//When.
	stream.write(getFixtureFile('erroring.js'));

	//Then.
	function lintResults() {
		console.log(arguments);
//		assert(/Foo/.test(file.contents.toString()));
		cb();
	}
});

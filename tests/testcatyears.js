
var catyears = require('../lib/catyears.js');
var mocha = require('mocha');
var expect = require('chai').expect;

describe('Test CatYears module', function() {
	it('Test result of a cat that 10 in actual years', function() {
		var result = catyears(10);
		expect(57).to.equal(result);
	});
});
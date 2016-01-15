'use strict';

var catyears = require('../lib/catyears.js');
var expect = require('chai').expect;

describe('Test CatYears module', function () {
    it('Test result of a cat that 10 in actual years', function () {
        var result = catyears(10);
        expect(57).to.equal(result);
    });

    it('Test result of a cat that is only 1 in actual years', function () {
        var result = catyears(1);
        expect(15).to.equal(result);
    });

    it('Test result of a cat that is 1.5 years old in actual years', function () {
        var result = catyears(1.5);
        expect(20).to.equal(result);
    });

    it('Test result of a cat that is 2 years old in actual years', function () {
        var result = catyears(2);
        expect(25).to.equal(result);
    });

    it('Test result of a cat that is 3 years old in actual years', function () {
        var result = catyears(3);
        expect(29).to.equal(result);
    });
});

'use strict';

var expect = require('chai').expect;


describe('to-length', function () {

  var toLength = require('../../');

  it('common test', function () {

    expect(toLength()).to.be.equal(0);
    expect(toLength(null)).to.be.equal(0);
    expect(toLength(false)).to.be.equal(0);
    expect(toLength(true)).to.be.equal(1);

    expect(toLength(Number.MIN_VALUE)).to.be.equal(0);
    expect(toLength(Number.MAX_VALUE)).to.be.equal(4294967295);
    expect(toLength(Infinity)).to.be.equal(4294967295);

    expect(toLength(1)).to.be.equal(1);
    expect(toLength(-1)).to.be.equal(0);
    expect(toLength('3')).to.be.equal(3);
    expect(toLength('a')).to.be.equal(0);
    expect(toLength('1a')).to.be.equal(1);

  });
});

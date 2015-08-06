var chai = require('chai');
var expect = chai.expect;

var pu = require('../lib/primeUtil.js');
var tu = require('../lib/tableUtil.js');

describe("primeUtil.js Functions \n", function() {

  describe("Test clearNonPrimes", function() {

    it('Expect clearNonPrimes to set every 3rd element to false', function () {
      var numbers = [0,0,0,0,0,0,0,0];
      pu.clearNonPrimes(3, numbers);
      expect(numbers).to.deep.equal([0,0,0,false,0,0,false,0]);
    });

  });

  describe("Test primeCount", function() {

    it('Expect primeCount to return a specific value', function () {
      expect(Math.round(pu.primeCount(100))).to.equal(22); // 100 / ln(100) = 21.7147240952
    });

  });

  describe("Test nFromNumberOfPrimes", function() {
    it('Expect nFromNumberOfPrimes to return a number', function () {
      expect(typeof pu.nFromNumberOfPrimes(12)).to.equal('number');
    });

  });

  describe("Test eratSieve", function() {

    it('Expect eratSieve to return an empty array for an input of zero or one', function () {
      expect(pu.eratSieve(0)).to.deep.equal([]);
      expect(pu.eratSieve(1)).to.deep.equal([]);
    });

    it('Expect eratSieve to return an array with elements', function () {
      expect(pu.eratSieve(10)).to.deep.equal([2,3,5,7]);
    });

  });

  describe("Test getPrimes", function() {

    it('Expect getPrimes to return empty array for an input of zero or one', function () {
      expect(pu.getPrimes(0)).to.deep.equal([]);
      expect(pu.getPrimes(1)).to.deep.equal([]);
    });

    it('Expect getPrimes to return an array with elements', function () {
      expect(pu.getPrimes(10)).to.deep.equal([2,3,5,7]);
    });

  });


});


describe("tableUtil.js Functions \n", function() {


  describe("tableUtil.js Functions \n", function() {

    it('Expect maximum cell size to equal specific number', function () {
      expect(tu.cellSize(0)).to.equal(2);
      expect(tu.cellSize(360)).to.equal(6);
      expect(tu.cellSize(1000)).to.equal(8);
    });

    it('Expect padElement to return a string', function () {
      expect(typeof tu.padElement(440,8)).to.equal('string');
    });

    it('Expect padElement to return a padded string', function () {
      expect(tu.padElement(440,8)).to.equal('     440');
    });

  });

});
console.log('running main.js...');
var pu = require('./lib/primeUtil.js');
var tu = require('./lib/tableUtil.js');

var numberOfPrimes = 10;
var n = pu.nFromNumberOfPrimes(numberOfPrimes);

// multiply by factor so always have more primes than needed
// to prevent having to re-run getPrimes multiple times
var primes = pu.getPrimes(n*1.3);
var primes = primes.slice(0, numberOfPrimes);
var largestPrime = primes[primes.length-1];
// use largest prime number to calculate cellWidth
var cellWidth = tu.cellSize(largestPrime);

// Create/Render the Prime Multiplication Table

tu.printHorizontalLine(numberOfPrimes,cellWidth);
tu.printRow('', primes, cellWidth);
var rowCalc = Array(numberOfPrimes + 1).join('0').split('');

for (var row=0; row<primes.length; row++) {
  // generate row calculation array to be used in formatting the row cells
  for (var col=0; col<primes.length; col++) {
    rowCalc[col] = primes[row] * primes[col];
  }
  tu.printHorizontalLine(numberOfPrimes,cellWidth);
  tu.printRow(primes[row], rowCalc, cellWidth); // format and print row
}

tu.printHorizontalLine(numberOfPrimes,cellWidth);

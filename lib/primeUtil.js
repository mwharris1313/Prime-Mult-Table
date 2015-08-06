/*
TODO:
  could implement a "Segmented sieve" to solve the
  memory issue of holding all the prime numbers in memory
  https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes#Segmented_sieve
  But seems like overkill for this use-case (prime mult-table)
*/

module.exports = {

  getPrimes: function(n) {
    // use sieve of eratosthenes for primes less than sqrt(n)
    var primes = this.eratSieve(n);
    return primes;
  },

  eratSieve: function (n) {
    // implementation of sieve of eratosthenes
    var numbers = [];
    var primes = [];

    for (var i=0; i<n; i++) {
      numbers.push(undefined); // tuple: [number, isPrime]
    }

    for (var i=2; i<n; i++) {
      // isPrime status not set? Then it's prime, set it
      if (numbers[i] === undefined) {
        numbers[i] = true; 
        primes.push(i);
        this.clearNonPrimes(i, numbers);
      }
    }
    return primes;
  },

  clearNonPrimes: function (primeStep, array) {
    for (var i=primeStep; i<array.length; i+=primeStep) {
      array[i] = false;
    }
  },

  // The Prime-count function, approx. number of primes from n numbers
  primeCount: function(n){
    return n / Math.log(n); // pcf(x) = x / ln(x)
  },

  // Prime-count in reverse, get n numbers from number of Primes
  nFromNumberOfPrimes: function(numberOfPrimes){
    var maxInt = 9007199254740991;
    var n = maxInt / 2;
    var delta = maxInt / 4;

    // Plug-and-chug solving the primeCount function.
    // Similar to binary search, start in the middle
    // check if higher or lower, add or subtract a delta
    // then halve the delta, and repeat until a match is found 

    // when the primeCount function matches the requested numberOfPrimes
    // then we've solved the equation and know what n is.
    while (Math.round(this.primeCount(n)) !== numberOfPrimes) {
      // console.log(this.primeCount(n), numberOfPrimes);
      if (this.primeCount(n) > numberOfPrimes) {
        n -= delta;
      } else {
        n += delta;
      }
      delta = delta / 2;
    }

    return n;
  }

};

//a prime number is a whole number great than 1 with exactly two divisors: 1 and itself
//for example, 2 is a prime number because it is only divisible by 1 and 2
//in contrast, 4 is not prime since it is divisible by 1, 2, and 4
//rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num
function sumPrimes(num) {
    // Check all numbers for primality
    let primes = [];
    for (let i = 2; i <= num; i++) {
      if (primes.every((prime) => i % prime !== 0))
        primes.push(i);
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
  }
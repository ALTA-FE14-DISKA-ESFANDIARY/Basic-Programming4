function primeX(number) {
  if (number < 1);
  
  let primes = [2], currentNum = 3;
  
  while (primes.length < number) {
    let isPrime = true;
    
    for (let i = 0; i < primes.length; i++) {
      if (currentNum % primes[i] === 0) {
        isPrime = false;
        break;
      }
    }
    
    if (isPrime) primes.push(currentNum);
    
    currentNum += 2;
  }
  
  return primes[number-1];
}

console.log(primeX(1));  
console.log(primeX(5));  
console.log(primeX(10)); 
console.log(primeX(15));  
console.log(primeX(20)); 
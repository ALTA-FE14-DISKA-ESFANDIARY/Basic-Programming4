function fibonacci(number) {
    if (number === 0) {
      return 0;
    } else if (number === 1) {
      return 1;
    } else {
      return fibonacci(number - 1) + fibonacci(number - 2);
    }
  }
  
  console.log(fibonacci(0)); 
  console.log(fibonacci(2)); 
  console.log(fibonacci(9)); 
  console.log(fibonacci(10)); 
  console.log(fibonacci(12)); 
function primaSegiEmpat(wide, high, start) {
    function isPrime(num) {
      for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
      return num !== 1;
    }
  
    var rectangle = [];
    var primes = [];
    var num = start;
    
    for (var i = 0; i < high; i++) {
      var row = [];
      for (var j = 0; j < wide; j++) {
        while (!isPrime(num)) {
          num++;
        }
        row.push(num);
        primes.push(num);
        num++;
      }
      rectangle.push(row);
    }
  
    var sum = primes.reduce((a, b) => a + b, 0);
    rectangle.push([sum]);
    
    for (var i = 0; i < rectangle.length; i++) {
      console.log(rectangle[i].join(' '));
    }
  }
  
  primaSegiEmpat(2, 3, 13);
  primaSegiEmpat(5, 2, 1);
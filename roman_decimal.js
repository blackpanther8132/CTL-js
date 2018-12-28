function roman(num) {  
    var result = '';
    var decimal = [1000, 500, 100, 50, 10, 5, 1];
    var romanvalues = ["M", "D", "C", "L", "X", "V", "I"];
    for (var i = 0;i<=decimal.length;i++) {
 
      while (num%decimal[i] < num) {   
     
        result += romanvalues[i];
   
        num -= decimal[i];

      }
    }
    console.log(result);
  }
  
  roman(10);  
function positiveSum(arr) { 
    let result = 0;
   for (let i of arr) {
     if (i > 0) {
       result += i
       }
   }
     return result;
    }
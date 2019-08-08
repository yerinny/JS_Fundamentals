function coinChange(cents) {
    var B = 0;
    var Q = 0;
    var D = 0;
    var N = 0;
    var P = 0;
  
    while(cents !== 0) {
      if(cents % 100 === 0) {
      B++;
      cents = cents - 100;
      }
      else if(cents % 25 === 0) {
      Q++;
      cents = cents - 25;
      }
      else if(cents % 10 === 0) {
        D++;
        cents = cents - 10;
      }
      else if(cents % 5 === 0) {
        N++;
        cents = cents - 5;
      }
      else {
        P++;
        cents = cents - 1; 
      }
    }
    console.log("Dollar = " +B);
    console.log("Quarter = " +Q);
    console.log("Dime = " +D);
    console.log("Nickel = " +N);
    console.log("Penny = " +P);
  
  }
  coinChange(504);
  
function bubbleSort(arr) {
    for (var i = arr.length-1; i>=0; i--) {
      for(var j = 1; j<=i; j++) {
        if(arr[j-1]>arr[j]) {
          var temp = arr[j-1];
          arr[j-1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  console.log(bubbleSort([1,2,5,9,3,0]))


  
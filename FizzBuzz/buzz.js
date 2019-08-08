function fizzBuzz(n){
    
    console.log('begin')
    for(var i=0; i<n; i++){
        console.log(i)
        console.log('divide***'+ i%3)
        console.log('divide***'+i%5)
        if( i%3==0 && i%5==0)
        {
            console.log('FizzBuzz')
    
        }
        if( i%3==0 && i%5 !=0)
        {
            console.log('Fizz')
        }
        if( i%3 !=0 && i%5==0){
            console.log('Buzz')
        }
    }
}

fizzBuzz(16);
console.log('ends')


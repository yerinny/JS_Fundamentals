function bracesValid(str){
    var braces = {'}':'{', ']':'[', ')':'('};
    var closing = [];
    for(var i = 0; i < str.length; i++){
      if(str[i] == '{' || str[i] == '[' || str[i] == '('){
        closing.push( str[i] );
        continue;//skips one look interation
      }
  
      if(closing[closing.length - 1] === braces[str[i]]){
        //   console.log(i)
        //   console.log(closing.length + '***')
        console.log(i +'***')
        console.log(closing)
        console.log('closing length: '+ closing.length)
        closing.pop();
      }
    }
    if(closing.length == 0){
      return(true);
    }
    return (false);
  }
  
  console.log(bracesValid("{{()}}[]"))

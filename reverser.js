const reverse = (a)=>{
    
    if (Array.isArray(a)){
        var k = []

        for(let i = a.length-1;i>=0;i--){

            k.push(a[i])

        }


    }else{
          var k = ''

        for(let i = a.length-1;i>=0;i--){

            k+=(a[i])

        }


    }


  return k
}
console.log(reverse('55555412'));

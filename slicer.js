const slice = (str,start ,end)=>{
    if (end == undefined){

        end = str.length-1
    }

    if (Array.isArray(str)){

        var k=[] 
        if (start<0){
            start = str.length +start
        }
 if (end<0){
            end = str.length +end
        }
        for(let i=start;i<end;i++){

           k.push(str[i])


        }


    }else{
   var k =''
      if (start<0){
            start = str.length +start
        }
 if (end<0){
            end = str.length +end
        }
        
        for(let i=start;i<end;i++){

            k+=str[i]


        }


    }
 return k


}

console.log([15,2,6].slice(-1,-2));

console.log(slice([15,2,6],-1,-2));


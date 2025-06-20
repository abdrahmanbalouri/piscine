const slice = (str,start ,end)=>{
    if (end == undefined){

        end = str.length
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
console.log(slice('abcdef',2));



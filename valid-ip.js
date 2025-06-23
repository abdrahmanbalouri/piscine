const findIP = (str)=>{
 let regex  = /\d+[.]\d+[.]\d+[.]\d+(:\d+)?/g

 let a = str.match(regex)
  
 let k =[]

 for(let i =0;i<a.length;i++){
    let b = a[i].split('.')
  for (let j =0;j<b.length;j++){

    if(j==3){
      k.push(a[i])
      break
    }

      if (Number(b[j])<=255){

        


             
         if(b[j][0]=='0'&&b[j].length>1){
           



             break
          


            }else if (b[j][0]=='0'&& b[j].length==1){
          

             continue
         }

        
      }else{

        break
      }
  }    
        

 }
 

 let final = []

 for(let i= 0;i<k.length;i++){

        let n = k[i].split('.')
        if(n[n.length-1]=='000'){
          continue
        }

    if(k[i].split(':').length==1){

         final.push(k[i])


    }else if (k[i].split(':').length==2){


         for(let c =0;c<k[i].length;c++){
          if((k[i][c]==':')){
            if(Number(k[i].slice(c+1,))<65535){
              final.push(k[i])



            }else{
              break
            }
          }

          
         }             
      
    }
    
 }
  return final

}


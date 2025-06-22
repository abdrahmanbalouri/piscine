const groupPrice =(str)=>{
    const regex  = /[USD|$]\d+[.]\d+/g

    let a = str.match(regex)
    
    let k=[]

    for(let i=0;i<a.length;i++){

        let b = a[i].split('.')
        console.log(b);
        
        let v = []

        v.push(a[i])
              if(b[0].slice(0,3)=='USD'){
                            v.push(b[0].slice(3))

              }else{
                 v.push(b[0].slice(1))
              }  
             
                
                          

              
            v.push(b[1])
            k.push([...v])
        




         
       

    }
    

    
    
    return k  
   

}
console.log(groupPrice('product one its $9.98 and the second one its $10.20'));

const split = (a,target)=>{
    if (a==''){
        return ['']
    }
    if (target ==''){

           let l =[]
        for(let i = 0;i<a.length;i++){
            l.push(a[i])

        }
        return l
    }
    let k =[]
    let v=''
    for (let i=0;i<a.length;i++){
        if (a.slice(i,i+target.length)===target ){

            
            k.push(v)
            v=''
            i = i+target.length-1

        }else{
            v+=a[i]
        }
    }
  
    k.push(v)
  
 return k
}
   

console.log(split('Riad', ''));

const join =(a,target)=>{

    let k =''

    for(let i=0;i<a.length;i++){

        k+= a[i]
        if (i!==a.length-1){
            k+= target

        }


    }
    
  return k


}
console.log(join(['a', 'b', 'c'], ' '));

 
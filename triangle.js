const triangle =(str,num)=>{
    let k =[]

    for (let i =0;i<num;i++){

  const  kk = str.repeat(i+1) 

    k.push(kk)

    }

  return k.join('\n')
}

console.log(triangle('*',5));

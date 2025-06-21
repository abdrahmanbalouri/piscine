const  pyramid=(str,num)=>{
    let k =[]

    for (let i =0;i<num;i++){
        const bb = ' '.repeat(num-1-i)

  const  kk = str.repeat(i*2+1) 

    k.push(bb+kk)

    }

  return k.join('\n')
}


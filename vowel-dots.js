const vowelDots =(str)=>{



    const regex = /[aeio]/gi

    kk = str.replace(regex,(value)=>value+'.')
    return kk






}

console.log(vowelDots('Aeio'));

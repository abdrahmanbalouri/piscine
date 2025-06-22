const vowelDots =(str)=>{



    const regex = /[aeio]/gi

    str = str.replace(regex,(value)=>value+'.')
    return str






}

console.log(vowelDots('Aeio'));

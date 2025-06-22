const vowelDots =(str)=>{



    const vowels = /[aeio]/gi

    str1 = str.replace(vowels,(value)=>value+'.')
    return str1






}

console.log(vowelDots('Aeio'));

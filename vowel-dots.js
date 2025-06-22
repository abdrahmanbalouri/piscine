const vowelDots =(str)=>{



    const vowels = /[aeio]/gi
  let str1=''
    str1 = str.replace(vowels,(value)=>value+'.')
    return str1






}

console.log(vowelDots('Aeio'));

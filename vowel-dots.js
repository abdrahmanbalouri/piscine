    const vowels = /[aeiou]/gi


const vowelDots =(str)=>{



  let str1=''
    str1 = str.replace(vowels,(value)=>value+'.')
    return str1






}

console.log(vowelDots('a'));

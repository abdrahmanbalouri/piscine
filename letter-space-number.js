const letterSpaceNumber = (a)=>{

    const  regex =  /[a-zA-Z][ ]\d(?!\w)/g

    return a.match(regex) || []










}
console.log(letterSpaceNumber('example 1, example 20'));


const  sameAmount = (string,regex1,regex2)=>{
    const r = new RegExp(regex1, 'g'); 
    const re = new RegExp(regex2, 'g'); // constructor with string pattern as first argument


    const arr = string.match(r) || []

    const arr1 = string.match(re)|| []
    console.log(arr);
    

    return  arr.length ==arr1.length


}
 

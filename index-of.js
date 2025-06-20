const indexOf =(a,b,c)=>{
    if (c==undefined){
        c = 0
    }

    for(let i=c;i<a.length;i++){

        if (a[i]===b){
            return i


        }
    }
    return -1


}
const lastIndexOf = (arr ,target,c)=>{
    if (c==undefined){
        c= arr.length-1
    }
    for(let i =c;i>=0;i--){

        if (arr[i]===target){
            return i
        }
    }
    return -1


}


const  includes = (arr,target)=>{

    for(let i=0;i<arr.length;i++){
        if (arr[i]===target){
            return true
        }
    }

    return false
}

console.log( lastIndexOf(['t', 0, 0, 't'], 't', 2) );




 

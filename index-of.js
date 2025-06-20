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
const lastIndexOfd = (arr ,target)=>{
    for(let i =arr.length-1;i>=0;i++){

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



 

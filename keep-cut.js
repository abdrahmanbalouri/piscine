const cutFirst  = (str)=>{
    return str.slice(2,)


}
const cutLast =(str)=>{

    let k = str.length -2
    return str.slice(0,k)


}
const cutFirstLast =(str)=>{
    let k = str.length -2

    return str.slice(2,k)

}
const keepFirst = (str)=>{
    return str.slice(0,2)


}
const keepLast = (str)=>{
    let k = str.length -2

    return str.slice(k,)

}
const keepFirstLast = (str)=>{
     if (str.length==2){
        return str
    }
        let k = str.length -2
        if (k<2){
            k+=1
        }
        return  str.slice(0,2)+str.slice(k,)


}
console.log(keepFirstLast('1bd44'));

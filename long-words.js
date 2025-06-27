const longWords =(arr)=>{
  return  arr.every(value => value.length>=5)
}

const oneLongWord =(arr)=>{
  
 
return arr.some(value => value.length>=10)
}

const noLongWords =(arr)=>{

 
let k = arr.every(value =>value.length<7)

return k

}
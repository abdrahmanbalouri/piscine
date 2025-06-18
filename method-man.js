const words = (a) => {


 return   a.split(" ")
}

const sentence = (a)=>{

    return a.join(" ")



}

const yell = (a)=>{

    return a.toUpperCase()


}
const whisper =(a)=>{
    
    let k= ['*',a.toLowerCase(),'*']

  return  k.join("")
}
const capitalize =(a)=>{

    return a[0].toUpperCase()+a.slice(1,).toLowerCase()



}

console.log(whisper('HHHHHHHH'));





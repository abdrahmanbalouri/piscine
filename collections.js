const arrToSet =(a)=>{
    return new Set(a)

}
const arrToStr =(a)=>{
    return a.join("")

}
const setToArr =(a)=>{
     return [...a]

}
const setToStr =(a)=>{
    let k = [...a]


    return k.join("")

}
const strToArr =(a)=>{
    return a.split("")


}
const strToSet = (a)=>{
      return new Set(a.split(""))




}
const mapToObj = (a)=>{

    return Object.fromEntries(a)



}
const objToArr = (a)=>{
    let k =[]
    for (value in a){
        k.push(a[value])

    }
  return k

}

const objToMap =(a)=>{
    return new Map(Object.entries(a))


}


const arrToObj =(a)=>{
    let k ={}

    for(let i=0;i<a.length;i++){

        k[i]= a[i]


    }
    return k


}
const strToObj =(a)=>{

  let k ={}

    for(let i=0;i<a.length;i++){

        k[i]= a[i]


    }
    return k
}


const superTypeOf =(a)=>{
    if (typeof a =='string')return 'String'
    if (typeof a =='number')return 'Number'
    if (a ===null)return 'null'
    if (typeof a ==='undefined')return 'undefined'
    if (a instanceof Map)return 'Map'
    if (a instanceof Set) return 'Set'
    if (Array.isArray(a))return  'Array'
    if (typeof a == 'function') return  'Function'
    if (typeof a =='object') return 'Object'






}

let n = new Set([1,2,3,2])

console.log(setToStr(n));



const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}
const get = (a)=>{

    return sourceObject[a]





}

const set = (a,b)=>{
    sourceObject[a] =5
    return sourceObject[a]



}
console.log(set('num',42));

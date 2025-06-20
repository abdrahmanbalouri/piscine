
const hashCode = str =>
  (
    [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
  ).toString(36)


const data ={
     a: 1 
} 
const prev ={
            index: 0,
             hash: '0'
        }

const blockChain =(data, prev)=>{
    const s ={}
       
    
   s['data']=data
   s['prev']=prev
   s['hash']= hashCode(data)

   
   return s


}
const kk  =blockChain(data ,prev)

console.log(kk);




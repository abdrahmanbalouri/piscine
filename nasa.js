const nasa =(n)=>{
   let k =''
 for (let i=1;i<=n;i++){

if (i%5 == 0 && i%3==0){
    k+='NASA'
}else if (i%5 == 0 ){
    k+='SA'
    

}else if (i%3 == 0 ){
    k+='NA'
}else{
    
    k+= String(i)
} 
if (i!==n){
     k+=' '
}
   
 }
 
  
 return k
}

console.log(nasa(2));

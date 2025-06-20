const chunk =(arr,num)=>{
    if (num ==0){
        return []
    }
    let k =[]
    for (let i=0;i<arr.length; i+=num){

        k.push(arr.slice(i,i+num))


    }

  return k
}
console.log(chunk([0, 1, 2, 3, 4, 5, 6, 7],2));

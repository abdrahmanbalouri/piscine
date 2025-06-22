const getURL =(str)=>{
    const  regex=  /(http|https):\/\/[^\s]+/g 
    return str.match(regex) || []


}
 const greedyQuery =(str)=>{
        const  regex=  /(http|https):\/\/[^\s]+/g 

        let a= str.match(regex)
        let k = []

        for (let i =0;i<a.length;i++){
            var count =0

            for(let j =0;j<a[i].length;j++){

                if(a[i][j]=='='){
                    count ++
                }
                if (count == 3){
                    k.push(a[i])
                    count=0
                }
    

            }
        }

  return k


 }
 const notSoGreedy =(str)=>{
        const  regex=  /(http|https):\/\/[^\s]+/g 

        let a= str.match(regex)
        let k = []
 let count =0
        for (let i =0;i<a.length;i++){
            if (count==3 || count ==2){
                
                 
                k.push(a[i-1])
                count =0
            }
             count =0

            for(let j =0;j<a[i].length;j++){

                if(a[i][j]=='='){
                    count ++
                }
                
    

            }
        }

  return k


 }
  
  





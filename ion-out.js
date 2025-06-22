const ionOut =(str)=>{
    const reg = /\w+t(ion)/g
      let b = str.match(reg)
      if (b===null){

        return []
      }
       let n = b
       let o =[]

       for(let i =0;i<n.length;i++){
        for(let j =0;j<n[i].length;j++){
             if (n[i][j]==='t'&& n[i][j+1]==='i'){
                console.log(n[i]);
                
            o.push(n[i].slice(0,j+1))
            break

        }
        }

       
       }
                

     return o


}

console.log((ionOut((' 1st position is the vision of the 2nd position'))));

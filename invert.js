const invert =(objet)=>{

    let i = {}

    for(const kk in objet){

       i[objet[kk]]=kk        

    }



  return i
}

console.log(invert({'k':5,'g':6}));


export const getArchitects = () => {
  const people = document.querySelectorAll('a, span');
  const architects = [];
  const nonArchitects = [];

  people.forEach(el => {
    if (el.tagName.toLowerCase() === 'a') {
      architects.push(el);
    } else {
      nonArchitects.push(el);
    }
  });

  return [architects, nonArchitects];
};

export const getClassical = () => {
   const [kk]= getArchitects()
   let arr1 =[]
   let arr2=[]
   kk.forEach(el=>{


    if (el.classList.contains('classical')){

      arr1.push(el)
    }else{

       arr2.push(el)

    }
   })

 return [arr1,arr2]
};

export const getActive = () => {
    const [kk]= getClassical()
   let arr1 =[]
   let arr2=[]
   kk.forEach(el=>{


    if (el.classList.contains('active')){

      arr1.push(el)
    }else{

       arr2.push(el)

    }
   })

 return [arr1,arr2]
};

export const getBonannoPisano = () => {
    const target = document.getElementById('BonannoPisano') 

    const [kk] = getActive()

    const final =kk.filter(el =>el.id !=='BonannoPisano')

    return [target,final]
};

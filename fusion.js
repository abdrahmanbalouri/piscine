const fusion = (...objects) => {
  let k = new Map();

  for (let i = 0; i < objects.length; i++) {
    for (const v in objects[i]) {
      if (k.has(v)) {
         if(Array.isArray(objects[i][v])){
                    k.get(v).push(...objects[i][v]);

         }else{
         let b =k.get(v);
                     k.set(v,b+objects[i][v])


         }
      } else {
        if(Array.isArray(objects[i][v])){
               k.set(v, [...objects[i][v]]);
        }else{

            k.set(v,objects[i][v])
        }
     
      }


    console.log(objects[i][v]);
    
    }
  }

  return Object.fromEntries(k);
};

console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }));

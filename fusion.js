const fusion = (...objects) => {
  let k = new Map();

  for (let i = 0; i < objects.length; i++) {
    for (const v in objects[i]) {
      if (k.has(v)) {

        if(typeof k.get(v) ==='object'&& (typeof objects[i][v] == 'string' ||typeof objects[i][v] == 'number' )){
           k.set(v,objects[i][v])
           continue

        }
        if (Array.isArray(objects[i][v])) {
          k.get(v).push(...objects[i][v]);
        } else if (typeof objects[i][v] === 'string') {
          let b = k.get(v);
          k.set(v, b + ' ' + objects[i][v]);
        } else if (typeof objects[i][v] === 'object') {
          const mergedObject = fusion(k.get(v), objects[i][v]);
          //console.log(fusion(k.get(v), objects[i][v]));
          
          k.set(v, mergedObject);
        }else{
             let b = k.get(v);
          k.set(v, b+ objects[i][v]);


        }
      } else {
        if (Array.isArray(objects[i][v])) {
          k.set(v, [...objects[i][v]]);
        } else if (typeof objects[i][v] === 'object') {
          k.set(v, fusion({},objects[i][v]));
          
        } else {
          k.set(v, objects[i][v]);
        }
      }
    }
  }

  return Object.fromEntries(k);
};
console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }));

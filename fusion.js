const fusion = (...objects) => {
  let k = new Map();

  for (let i = 0; i < objects.length; i++) {
    for (const v in objects[i]) {
      if (k.has(v)) {
        
        k.get(v).push(...objects[i][v]);
      } else {
        k.set(v, [...objects[i][v]]);
      }
    }
  }

  return Object.fromEntries(k);
};

console.log(fusion({ arr: [], arr1: [5] },{ arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }));

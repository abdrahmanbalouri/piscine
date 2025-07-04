function replica(target, ...sources) {
  for (const source of sources) {
   // if (!source || typeof source !== 'object') continue;

    for (const key in source) {
      const srcVal = source[key];

    
       
        target[key] = srcVal;
      
    }
  }
  return target;
}


// console.log(  replica(
//       {},
//       { a: { b1: 1, c1: 2 } },
//       { a: { b1: { d2: 1, e2: 2 } } },
//       { a: { b1: { d2: { f3: 1, h3: 1 }, e2: { g3: 2 } } } },
//       { a: { b1: { d2: { f3: { i4: 1 }, h3: 1 }, e2: { g3: 2 } } } }
//     ),
//     { a: { b1: { d2: { f3: { i4: 1 }, h3: 1 }, e2: { g3: 2 } }, c1: 2 } })

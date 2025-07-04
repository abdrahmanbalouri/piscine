function replica(...objs) {

      
    let k = {}

    let b = Object.assign(k,...objs)

    


  return b
}


console.log( replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } }), { a: { b: 1, c: 23 } });

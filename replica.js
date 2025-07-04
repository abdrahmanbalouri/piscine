function replica(...objs) {

      
    let k = {}

    let b = Object.assign(k,...objs)

  return b
}

console.log(replica({ a: 2 }, { a: [4] }).a);

const get = (src, path) => {
   let key = path.split('.')
   let res = src
   for (let i = 0; i < key.length; i++) {
      if (res == undefined) return undefined
      res = res[key[i]]
   }
   return res
}







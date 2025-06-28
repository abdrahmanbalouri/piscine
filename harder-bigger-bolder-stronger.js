export  function  generateLetters(){

    let zize = 11
  //  const body = document.querySelector('body')
     let b = 'AZERTYUIOPMLKJHGFDSQWXCVBN'    

    for(let i =0;i<120;i++){

 
     if (i<120 /3){
        const kalma = document.createElement('div')
      kalma.textContent=  b[Math.floor(Math.random()*b.length) ]
      kalma.style.fontSize = `${zize}px`
      kalma.style.fontWeight = '300'
      console.log(kalma);
      
      zize++
           
        document.body.append(kalma)
     }else if (i< (120/3)*2){

        const kalma = document.createElement('div')
      kalma.textContent=  b[Math.floor(Math.random()*b.length) ]
      kalma.style.fontSize = `${zize}px`
      kalma.style.fontWeight = '400'
      zize++
      console.log(kalma);
      
           
        document.body.append(kalma)
     }else{
          const kalma = document.createElement('div')
      kalma.textContent=  b[Math.floor(Math.random()*b.length) ]
      kalma.style.fontSize = `${zize}px`
      kalma.style.fontWeight = '600'
      zize++
      console.log(kalma);
      
      console.log(zize);
      
           
        document.body.append(kalma)

     }
    
    }
      
}

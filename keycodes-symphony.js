export  function compose(){

document.addEventListener('keydown',(event)=>{

    let key = event.key

    if(key >='a'&&key<='z'){
      let div = document.createElement('div')

      div.className = 'note'
      div.textContent = key
const code = key.charCodeAt(0);
div.style.background = `rgb(${(code * 37)%256}, ${(code * 50)%256}, ${(code * 61)%256})`;
      document.body.appendChild(div)



    }else if (key =='Backspace'){

      let kk = document.querySelectorAll('.note')
      if (key.length>1){

      kk[kk.length-1].remove()

      }



    }else if (key == ' '){

      let kk = document.querySelectorAll('.note')

      kk.forEach(el =>{


        el.remove()
      })



    }
})   
} 
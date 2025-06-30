
export function setBox(){
 const box = document.createElement('div')
 box.className ='box'

 document.body.append(box)



}
export function createCircle(){

    document.addEventListener('click',(event)=>{

 const circle = document.createElement('div')
    circle.style.background = 'white'
    circle.className ='circle'
    circle.style.top = `${event.clientY -25}px`
    circle.style.left = `${event.clientX -25}px`

    document.body.append(circle)
        
    })
   
}
export function moveCircle(){
    
    document.addEventListener('mousemove',(event)=>{
        let circles = document.querySelectorAll('.circle')
        
        if(circles.length == 0) return;
        let last = circles[circles.length-1]        
        last.style.top=`${event.clientY -25}px`
        last.style.left = `${event.clientX -25}px`

        let box = document.querySelector('.box')
        let boxp = box.getBoundingClientRect()

               
      if (!last.parentNode.classList.contains("box")){

        if(boxp.left <= event.clientX -25 -1 && boxp.right >= event.clientX +25+1 && boxp.top<=event.clientY -25-1 && boxp.bottom>=event.clientY +25+1){



            box.append(last)
            last.style.background = 'var(--purple)'
        }

       }else{
        

          let boxleft = boxp.left
          let boxtop = boxp.top
          let boxbotom = boxp.bottom -50
          let boxrgit = boxp.right -50
          

        let x = event.clientX -25
        let y = event.clientY -25
        
        if(x<boxleft){
    
            x=boxleft 
        }
        if (x>boxrgit){


            x =boxrgit
        }
     if( y<boxtop){
            y = boxtop

     }
        if(y>boxbotom){
            y =boxbotom
        }    
        last.style.left = x +'px'
        last.style.top = y + 'px'
             
       }
    })



}
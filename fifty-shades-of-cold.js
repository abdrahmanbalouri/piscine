import { colors } from "./fifty-shades-of-cold.data.js";


export function generateClasses() {
  const style = document.createElement('style');
const css = colors.map(color => `.${color} { background: ${color}; }`).join('\n');
 
  style.textContent = css;
  document.head.appendChild(style);
}
export function generateColdShades(){

    const coldcolor = ['aqua','blue','turquoise','green','cyan','navy','purple']


    for (const clor of colors){


        for (const colld of coldcolor){

            if(clor.includes(colld)){
              const div = document.createElement('div')
              div.className = clor
              div.textContent = clor
              document.body.appendChild(div)
              break
            }
        }
    }
}
export function choseShade(shade){

    const  divs = document.querySelectorAll('div')


    for(const div of divs){

        div.className = shade
    }

}
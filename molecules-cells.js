const RNA =(str)=>{
let end =''
 let k =new Map([["G","C"],
  ["C","G"],
  ["T","A"],
  ["A", "U"]
])

for(let i =0;i<str.length;i++){
    if (k.has(str[i])){
   
          end += k.get(str[i])
    }else{

        end+=str[i]
    }




}
return end
}
const DNA =(str)=>{
    let end =''
 let k =new Map([["C","G"],
  ["G","C"],
  ["A","T"],
  ["U", "A"]
])

for(let i =0;i<str.length;i++){
    if (k.has(str[i])){
   
          end += k.get(str[i])
    }else{

        end+=str[i]
    }




}
return end


}
console.log(RNA(DNA('AUCG')));

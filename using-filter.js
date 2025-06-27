const filterShortStateName =(arr)=>{

    const f = arr.filter(Value=> Value.length<7)

    return f


}


const filterStartVowel =(arr)=>{
    const f = arr.filter(Value=>  Value.charAt(0)=='a' ||Value.charAt(0)=='e'||Value.charAt(0)=='u'||Value.charAt(0)=='o'||Value.charAt(0)=='i'||Value.charAt(0)=='A'||Value.charAt(0)=='E'||Value.charAt(0)=='U'||Value.charAt(0)=='O'||Value.charAt(0)=='I')

 return f

}
const   filter5Vowels =(arr)=>{

    const f = arr.filter(value =>{
        let count =0

        for (let i = 0;i<value.length;i++){


            if (value[i]=='a'||value[i]=='e'||value[i]=='i'||value[i]=='u'||value[i]=='o'||value[i]=='A'||value[i]=='E'||value[i]=='I'||value[i]=='U'||value[i]=='O'){
                count ++
            }
        }

        if (count >=5){            
            return value
            
        }


    })

  return f

}


const filter1DistinctVowel =(arr)=>{
  const f = arr.filter(value =>{
        let count =0

      let b = ''

      for(let i =0;i<value.length;i++){

        if ('aioueAIOUEA'.includes(value[i])){

            b+=value[i]
            break
        }
      }
      console.log(b);
      

      for(let i=0;i<value.length;i++){
    if ('aioueAIOUEA'.includes(value[i])){
if (b.toLowerCase()!==value[i].toLowerCase()){
                count ++ 
             }

    }
             

      }
         if(count ==0){
            return value
         }

    })

  return f


}


const multiFilter=(arrobjet )=>{
  const f = arrobjet.filter(value =>{
   

  if (value.capital.length>=8&& !'aeiouAEIOU'.includes(value.name.charAt(0))&& (value.tag.includes('a')||value.tag.includes('i')||value.tag.includes('e')||value.tag.includes('u')||value.tag.includes('o')||value.tag.includes('A')||value.tag.includes('O')||value.tag.includes('U')||value.tag.includes('I')||value.tag.includes('E')) && value.region !=="South"){
    console.log(8888);
    
    return value
  }
                 
      


  })
  return f

}
console.log(multiFilter( [
   {
    capital: 'Sacramento',
     name: 'California',
     region: 'West',
     tag: 'CA'
  },
   {
     capital: 'Honolulu',
     name: 'Hawaii',
     region: 'West',
     tag: 'HI'
   },
   {
     capital: 'Jefferson City',
     name: 'Missouri',
     region: 'Midwest',
     tag: 'MO'
   },
   {
     capital: 'Harrisburg',
     name: 'Pennsylvania',
     region: 'Northeast',
     tag: 'PA'
   },
   {
     capital: 'Providence',
     name: 'Rhode Island',
     region: 'Northeast',
     tag: 'RI'
   }
 ]
));

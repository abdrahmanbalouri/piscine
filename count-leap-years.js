const countLeapYears =(date)=>{
 let dd = new  Date('0001-01-01')

 let kk = date.getFullYear() 
 let cc = dd.getFullYear()+1
 let nn=0

 console.log(kk);
 console.log(cc);
 
 

 for(let i=cc;i<kk;i++){
 if((i % 4==0 && i%100!==0)||i%400==0){
        nn++

 }
 }

 return nn
}



console.log( countLeapYears(new Date('1664-08-09')));

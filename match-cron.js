const matchCron =(str,date)=>{

    let bb = str.split(' ')

  let ff = true
    for(let i =0;i<bb.length;i++){


        if (bb[i]=='*'){
            continue
        }
        if(i==0){
            ff = bb[i] == date.getMinutes()



        }else if(i ==1){
             ff = bb[i] == date.getHours()

        }else if (i==2){
            
               ff = bb[i] == date.getDate()



        }else if(i==3){

             ff = bb[i] == date.getMonth()


        }else if(i==4){

        ff = bb[i] == date.getDay()


        }else {
            ff =false
        }
    }

 return ff



}
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00')));

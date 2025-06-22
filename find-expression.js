
const findExpression = (n) => {

    let k = ['1']
  
    let val = 1

    while (val < n) {

        if (val + 4 == n) {
            
            k.push(add4)
            console.log(k.length);
            return k.join(' ')


        }

        let b = n / val

        if (b % 2 !== 0) {


            if (val + 4 < n) {
                val = val + 4

                k.push(add4)
            } else if (val + 4 == n) {

                k.push(add4)
                return k.join(' ')
            }else{
                return 'undefined'
            }

        }else{



 if (val * 2 < n) {
            val = val * 2

            k.push(mul2)

        } else if (val * 2 == n) {
  console.log(k.length);

            k.push(mul2)
            return k.join(' ')
        } else  {


            return 'undefined'
        }
        }
       

    }

  console.log(k.length);


    return k.join(' ')



}
console.log(findExpression(144));

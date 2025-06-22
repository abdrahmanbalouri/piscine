
// const add4 = '+4'
// const mul2 = '*2'
const findExpression = (n) => {

    let k = ['1']

    let val = 1

    while (val < n) {

        if (val + 4 == n) {
            k.push(add4)
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
            }

        }
        if (val * 2 < n) {
            val = val * 2

            k.push(mul2)

        } else if (val * 2 == n) {

            k.push(mul2)
            return k.join(' ')
        } else {


            return 'undefined'
        }

    }



    return k.join(' ')



}
console.log(findExpression(8));

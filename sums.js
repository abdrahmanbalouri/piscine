const sums = (num) => {

    if (num ==0){
        return []
    }

    let k = []

    const sol = (target, arr, start) => {

        
        if (target == 0) {

            k.push([...arr])


        }

        for (let i = start; i <= target; i++) {
            arr.push(i)
            


            sol(target - i, arr, i)


            arr.pop()




        }






    }


    sol(num, [], 1)


    return k


}

console.log(sums(7));


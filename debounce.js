const debounce = (func, time = 0) => {
    let id
    return function (...gg) {

        clearTimeout(id)
        id = setTimeout(() => {

            func(...gg)

        }, time)





    }




}

const opDebounce = (func, time = 0, option = { leading: false }) => {
    let cal 
    let id

    return function (...arg) {

        if (option.leading) {
            if (!cal) {
                func(...arg)
                cal = true
            }

            clearTimeout(id)
            id = setTimeout(() => {
                cal = false
            }, time)


        } else {
            clearTimeout(id)
            id = setTimeout(() => {
                func(...arg)

            }, time)

        }

    }
}
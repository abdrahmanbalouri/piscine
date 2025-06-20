


const hayadlfasila = (k) => {
    let c = false
    if (k >= 68719476735) {
        k -= 68719476735
        c = true
    }
    if (k > 0) {
        let b = 0
        for (let i = 0; i <= k; i++) {
            b++
        }
        if (c) {
            return b - 1 + 68719476735
        }
        return b - 1
    } else if (k < 0) {

        let b = 0
        for (let i = 0; i <= -k; i++) {
            b--
        }
        if (c) {
            return b + 1 + 68719476735
        }
        return b + 1
    }
}


const round = (a) => {

    let b = hayadlfasila(a)
    if (a === 0) {
        return 0
    }
    if (a > 0 && a !== b) {
        a = a + 0.5
        return hayadlfasila(a)

    } else if (a < 0 && b) {
        a = a - 0.5
        return hayadlfasila(a)
    }

    return a


}

const ceil = (a) => {
    let b = hayadlfasila(a)
    if (a === 0) {
        return 0
    }
    if (a > 0 && a !== b) {
        a = a + 0.9

        return hayadlfasila(a)
    } else if (a < 0 && b) {

        a = a
        return hayadlfasila(a)
    }

    return a
}

const floor = (a) => {

    let b = hayadlfasila(a)
    if (a === 0) {
        return 0
    }
    if (a > 0 && a !== b) {
        return hayadlfasila(a)
    } else if (a < 0 && b) {
        return hayadlfasila(a) - 1
    }

    return a
}


const trunc = (a) => {
    if (a===0){
        return 0
    }
    return hayadlfasila(a)


}




console.log(trunc(68719476735.654564655));


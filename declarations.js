const escapeStr = '`\\/"\''
const arr = [4,'2']
const obj = {

    str : 'hhh',
    num : 5,
    bool :true,
    undef : undefined

}
const nested ={
    arr: [4,undefined,'2'],
    obj : {
        str : 'hhh',
        num :4,
        bool: true
    }
}

Object.freeze(arr)
Object.freeze(nested)
Object.freeze(obj)
Object.freeze(nested.obj)
Object.freeze(nested.arr)
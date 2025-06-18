
 function num(a){

    if (typeof a =='number') {
        return true
    }
    return false

}
function str(a){
    if(typeof a =='string'){
        return true
    }
    false
}
 function nan(a){
    if (isNaN(a)){
        return true
    }
    return false
 }
 function bool(a){

  if (typeof a =='boolean')    {
    return true
  }
 return false
}
function undef(a){

   if (typeof a =='undefined'){
    return true
   }
   return false
}
function def(a){
  if (typeof a !=='undefined')   {
    return true
  }

  return false


}

function arr(a){
    if (Array.isArray(a)){
        return true
    }

  return false
}

function obj(a){

    if (a instanceof Map)return false
        if (a instanceof Set)return false
    if (arr(a)) return false
    if (typeof a == 'object'&& a!==null ){
        return true
    }

    return false


}


function fun(a){

    if (typeof a =='function'){
        return true
    }
   return false
}
function truthy(a){
    if (a!==false && a!==0&& a!==-0&& a!==0n&&a!==""&&a!==null&&a!==undefined&&a!==NaN){
        return true
    }

   return false

}

function falsy(a){
    


if (a==false || a==0|| a==-0|| a==0n||a==""||a==null||a==undefined||a==NaN){
        return true
    }
    return false


}

is.num = num
is.nan=nan
is.str =str
is.bool=bool
is.undef =undef
is.def =def
is.arr=arr
is.obj=obj
is.fun=fun
is.truthy=truthy
is.falsy=falsy



console.log(is);

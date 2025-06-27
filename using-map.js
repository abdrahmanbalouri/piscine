const citiesOnly = (arrojet) => {
  const d = arrojet.map(objet => objet.city)
  return d
}
const upperCasingStates = (arrstring) => {

  const c = arrstring.map(value => {

    let  d = value.split(' ')

    for(let i =0;i<d.length;i++){


        d[i]=d[i].charAt(0).toUpperCase() + d[i].slice(1).toLowerCase()
    }

    return d.join(' ')


  })




  


  return c
}
console.log(upperCasingStates(['alabama', 'new jersey']));

const fahrenheitToCelsius = (arrstring) => {
  const b = arrstring.map(value => {

    for (let i = 0; i < value.length; i++) {

      if (value[i] == '°') {
        value = value.slice(0, i)
      }
    }

    return Math.floor(Number((value - 32) / (9 / 5)))+'°C'

  })
  return b
}



const trimTemp = (arrobjet) => {
  const d = arrobjet.map(objet => ({
    ...objet,
    temperature: objet.temperature.replace(/\s+/g,"")
  }))


  return d

}
const tempForecasts=(arrobjet)=>{


  const bb = arrobjet.map(objet =>{
     for (let i = 0; i < objet.temperature.length; i++) {
      

      if (objet.temperature[i] == '°') {
        objet.temperature = objet.temperature.slice(0, i)
        console.log(objet.temperature);
        
      }
    }

    objet.temperature= Math.floor((Number(objet.temperature) - 32) / (9 / 5))

    let  d = objet.state.split(' ')

    for(let i =0;i<d.length;i++){


        d[i]=d[i].charAt(0).toUpperCase() + d[i].slice(1).toLowerCase()
    }



 return  objet.temperature+'°Celsius in '+objet.city+', '+d.join(' ')

  })

  return bb


}
console.log(tempForecasts([
  {
    city: 'Pasadena',
    temperature: ' 101 °F',
    state: 'california',
    region: 'West',
  },
]));

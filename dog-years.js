const period = {

    'earth':1,
    'mercury': 0.2408467,
    'venus':0.61519726,
     'mars':1.8808158,
     'jupiter':11.862615,
     'saturn':29.447498,
     'uranus':84.016846,

     'neptune':164.79132


}

const dogYears =(planet ,age)=>{
    const agedog = age /31557600

    const planetage = agedog/period[planet]

    const final = planetage*7

    const kk = final.toFixed(2)

    return kk



}

console.log(dogYears('earth',1000000000));

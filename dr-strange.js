const addWeek = (date)=>{


    let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','secondMonday','secondTuesday','secondWednesday','secondThursday','secondFriday','secondSaturday','secondSunday',]
    const k = new Date('0001-01-01')

    const defrence = date.getTime() - k.getTime() 

    const inyears = (defrence / (86400000))





  return days[inyears%14]    
}


const timeTravel = ({ date, hour, minute, second }) => {

        date.setHours(hour)
        date.setMinutes(minute)
        date.setSeconds(second)

        

    return date

}


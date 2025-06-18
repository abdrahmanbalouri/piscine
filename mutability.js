const person = {
  name: 'Rick',
  age: 77,
  country: 'US',
}

 clone1 = person 
 clone2 =person
 samePerson =person
 person.age+=1
 person.country ='FR'
 console.log(clone1,clone2,samePerson);
 
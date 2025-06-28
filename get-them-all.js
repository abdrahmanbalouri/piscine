import { people } from "./get-them-all.data.js"

export function getArchitects(people) {
  const architects = [];
  const nonArchitects = [];

  people.forEach(person => {
    
    if (person.tag === 'a') {
      architects.push(element);
    } else {
      nonArchitects.push(element);
    }
  });

  return [architects, nonArchitects];
}

console.log(getArchitects(people));

// Time: O(N + K)
// Space: O(K)

function maxPopulation(people) {
  let minBirthYear = Infinity
  let maxBirthYear = -Infinity

  people.forEach((person) => {
    minBirthYear = Math.min(person.born, minBirthYear);
    maxBirthYear = Math.max(person.born, maxBirthYear);
  })

  let yearRange = new Array(maxBirthYear - minBirthYear + 1).fill(0);

  people.forEach((person) => {
    yearRange[person.born - minBirthYear] += 1;
    if(!(person.died - minBirthYear > yearRange.length)) {
      yearRange[person.died - minBirthYear] -= 1;
    }
  })

  let currentPopulation = 0;
  let maxPopulation = 0;

  yearRange.forEach((peopleAliveThatYear) => {
    currentPopulation += peopleAliveThatYear;
    maxPopulation = Math.max(maxPopulation, currentPopulation);
  })

  return maxPopulation;
}


// Time: O(N Log(N))
// Space: O(N)
function maxPopulationAlternate(people) {
  let births = [];
  let deaths = [];

  people.forEach(person => {
    births.push({year: person.born, action: "born"});
    deaths.push({year: person.died, action: "died"});
  })

  births.sort((a, b) =>{
    return a.year- b.year;
  })
  deaths.sort((a, b) =>{
    return a.year- b.year;
  })

  let i = 0;
  let j = 0;

  let currentPopulation = 0;
  let maxPopulation = 0;

  while(i < births.length && j < births.length) {
    if(births[i].year <= deaths[j].year) {
      currentPopulation += 1;
      maxPopulation = Math.max(maxPopulation, currentPopulation);
      i++;
    } else {
      currentPopulation -= 1;
      j++;
    }
  }
  return maxPopulation
}



let people = [
  {
  name: "John",
  born: 1900,
  died: 1950
  },
  {
  name: "John",
  born: 1940,
  died: 2000
  },
  {
  name: "John",
  born: 1920,
  died: 1990
  },
  {
  name: "John",
  born: 1960,
  died: 2010
  },
  {
  name: "John",
  born: 1910,
  died: 1930
  }
]

maxPopulation(people);
maxPopulationAlternate(people);

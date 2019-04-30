/*
Given a list of parties in line
Write a function that takes in a list of people to be seated
And a new table that's available

timeWaited (int representing seconds waited)
name (string)
size (int party size)

Part 1)

Should seat the people that have largest group that fits
But if there is a tie, seat the group that has waited longest

If all groups are too large for the table, say no one can be seated
Mutate the state of list of tables (remove the party that was seated)

Return the name of the party that was seated


Part 2)

What if the restaurant is small?
They will only seat people if the table size matches exactly the party

(ie, skip over parties that have waited longer, but don't have an exact match)

example:
table of 4 becomes available
group of 3 waited for 400 seconds
group of 4 waited for 300 seconds

Group of 4 will be seated

(if the table is too larget or too small, no one gets seated)

However, if a group has waited for 30 minutes or more, seat them

(this is passed in as an extra argument, is large or small)


Extra Credit

What if some tables are listed as communal, and can seat several parties?
Suppose everyone is comfortable at a communal table if it's available

instead of just an int, table is now represented as an object, for example:

{
  size: 7,
  communal: true
}

*/

let parties = [
  {timeWaited: 300, name: "Hello World", size: 7},
  {timeWaited: 100, name: "Foo", size: 2},
  {timeWaited: 200, name: "Bar", size: 1},
  {timeWaited: 400, name: "Baz", size: 5}
]


function sortParties(parties){

  parties.sort((a, b) => {
    return b.timeWaited - a.timeWaited;
  })

  parties.sort((a, b) => {
    return b.size - a.size;
  })

  return parties
}

function seePartiesToSeats(parties, tableSize) {
  for(let i = 0; i < parties.length; i++) {
    let party = parties[i]
    if(party.size <= tableSize) {
      parties = parties.splice(i, 1);
      return party.name
    }
  }

  return "Cannot seat anyone";
}

sortParties(parties)
seePartiesToSeats(parties, 0)
console.log(parties)


function seePartiesToSeats2(parties, tableSize, isLarge) {
  for(let i = 0; i < parties.length; i++) {
    let party = parties[i]

    if((isLarge && party.size <= tableSize) ||
       (!isLarge && party.size === tableSize) ||
       (!isLarge && party.size <= tableSize && party.timeWaited >= 1800) ) {
      parties = parties.splice(i, 1);
      return party.name;
    }
  }

  return "Cannot seat anyone";
}

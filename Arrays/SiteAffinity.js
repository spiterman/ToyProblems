/*
A web server logs page views in a log file. The log file consists of one line per page view. A page view consists of page id and a user id, separated by a comma. The affinity of a pair of pages is the number of distinct users who viewed both pages. For example in the log file below, the affinity of yahoo and google is 2 (because ap42 viewed both and aa314 viewed both). Create an algorithm which will return the pair of pages with highest affinity.

Example Input
["yahoo,ap42",
"google,ap42",
"tweeter,thl76",
"google,aa314",
"google,aa314",
"google, thl76",
"tweeter,aa314",
"tweeter,ap42",
"yahoo,aa314"]
*/

function SiteAffinity(arr) {
  let result = [];

  let sitesUsersVisited = {};

  // First, find all the sites each user visited
  arr.forEach((item) => {
    let pair = item.split(",");
    if(sitesUsersVisited[pair[1]] === undefined) {
      sitesUsersVisited[pair[1]] = [];
    }
    sitesUsersVisited[pair[1]].push(pair[0]);
  });


  // Then, find the affinities between every pair of companies
  let affinities = {};

  for(let user in sitesUsersVisited) {
    for(let i = 0; i < sitesUsersVisited[user].length; i++) {
      for(let j = i + 1; j < sitesUsersVisited[user].length; j++) {
        let pair = [sitesUsersVisited[user][i], sitesUsersVisited[user][j]];
        // Disregard a website's affinity to itself
        if(pair[0] !== pair[1]) {
          let companyPair = pair.sort().join(",");
          if(affinities[companyPair]) {
            affinities[companyPair] += 1;
          } else {
            affinities[companyPair] = 1;
          }
        }
      }
    }
  }

  let maxAffinityCount = 0;
  let maxAffinityPair;

  for(var companyPair in affinities) {
    if(affinities[companyPair] > maxAffinityCount){
      maxAffinityCount = affinities[companyPair];
      maxAffinityPair = companyPair;
    }
  }

  return maxAffinityPair;
}

// Test
let testInput = ["yahoo,ap42",
"google,ap42",
"tweeter,thl76",
"google,aa314",
"google,aa314",
"google, thl76",
"tweeter,aa314",
"tweeter,ap42",
"yahoo,aa314"];

console.log(SiteAffinity(testInput));

module.exports = SiteAffinity;

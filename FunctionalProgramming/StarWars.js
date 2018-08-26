const request = require('request');

let firstPage = "https://swapi.co/api/starships/"

function getSingleURL(currentPage) {
  return new Promise((resolve, reject) => {
    request(currentPage, (error, response, body) => {
      if(error) {
        reject({error, response});
      }
      let nextPage = JSON.parse(body).next;
      resolve({currentPage, nextPage});
    })
  })
}

// getSingleURL(firstPage).then(console.log)

function getAllURLs(firstPage, result) {
  return getSingleURL(firstPage).then(urls => {
    result.push(urls.currentPage);
    if(urls.nextPage === null) {
      return result;
    }
    return getAllURLs(urls.nextPage, result);
  })
}

// getAllURLs(firstPage).then(console.log)

function getShips(passengers, url){
    return new Promise(function(resolve, reject){
      request(url, function(error, repsonse, body){
        if(error){
          reject(error)
        }
        let starWarsData = JSON.parse(body);
        let results = starWarsData.results.filter(currentShip => {
          return currentShip.passengers > passengers && currentShip.pilots.length > 0;
        });
        resolve(results)
      })
    })
}

// getShips(10, firstPage).then(console.log)

getAllURLs(firstPage, []).then(urls => {
  return urls.map((url) => {
    return getShips(10, url);
  })
}).then(promiseArray => {
  return Promise.all(promiseArray);
})
.then(console.log)

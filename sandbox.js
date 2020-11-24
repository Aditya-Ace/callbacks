/** @format */

// /** @format */

// const getGameCenterData = (resource, callback) => {
//   const request = new XMLHttpRequest();
//   request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4 && request.status === 200) {
//       const data = JSON.parse(request.responseText);
//       callback(undefined, data);
//     } else if (request.readyState === 4) {
//       callback('could not fetch the data', undefined);
//     }
//   });
//   // request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
//   request.open('GET', resource);
//   request.send();
// };

// //Call Back Hell Situation or Triangle of Doom
// getGameCenterData('gameCenter/ace.json', (err, data) => {
//   if (err) console.log(err);
//   if (data) console.log(data);
//   getTodos('gameCenter/aditya.json', (err, data) => {
//     if (err) console.log(err);
//     if (data) console.log(data);
//     getTodos('gameCenter/ancientApple.json', (err, data) => {
//       if (err) console.log(err);
//       if (data) console.log(data);
//     });
//   });
// });

// //Better way with promises
// const getSomeData = () => {
//   return new Promise((resolve, reject) => {
//     //fetch some data and give data downwards accordingly
//     // resolve('some data');
//     reject('damn you error');
//   });
// };

// //clean code
// getSomeData()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//Implementation with Promises
const getGameCenterData = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('Error! We could not fetch the data');
      }
    });
    request.open('GET', resource);
    request.send();
  });
};

getGameCenterData('gameCenter/ace.json')
  .then((data) => {
    console.log(data);
    return getGameCenterData('gameCenter/aditya.json');
  })
  .then((data) => {
    console.log(data);
    return getGameCenterData('gameCenter/ancientApple.json');
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

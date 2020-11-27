/** @format */

//fetch Api

// fetch('/gameCenter/aditya.json')
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });

//async await

const gameCenterData = async () => {
  const response = await fetch('/gameCenter/ace.json');
  if (response.status !== 200) {
    throw new Error('cannot fetch the data');
  }
  const data = await response.json();
  return data;
};
console.log(1);
console.log(2);
gameCenterData()
  .then((data) => console.log('resolved:', data))
  .catch((err) => console.log('rejected:', err.message));
console.log(3);
console.log(4);

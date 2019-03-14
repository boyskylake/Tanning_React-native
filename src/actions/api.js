
let people;


  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((responseJson) => {
      people = responseJson;
    })
    .catch((error) => {
      console.error(error);
    });


// const people = [
//   {name:'skylake' , position:'test'},
//   {name:'skylake' , position:'test'},
//   {name:'skylake' , position:'test'}

// ]

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(people)
    }, 1000)
  });

}
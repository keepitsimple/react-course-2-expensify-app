/*
    Object destruction
 */




// const person = {
//   name: 'Roman',
//   age: 42,
//   location: {
//     city: 'Krasnodar',
//     temp: 5
//   }
// };
//
// // const name = person.name;
// // const age = person.age;
//
// const { name: firstName = 'Anonymous', age } = person;
//
// console.log(`${firstName} is ${age}`);
//
// const { city, temp: temperature } = person.location;
//
// if (city && temperature) {
//   console.log(`It's ${temperature}C in ${city}`);
// }

//
// const book = {
//   title: "Ego in the Enemy",
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
//
// const { name: publisherName = 'Self-published'} = book.publisher;
//
// console.log(publisherName);


/*
   Array destruction
 */


// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [title, , price] = item;
console.log(`A medium ${title} costs ${price}`);
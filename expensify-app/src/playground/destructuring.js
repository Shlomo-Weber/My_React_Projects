// console.log('destructuring')

// const person = {
//     name: 'Shlomo',
//     age: 24,
//     location: {
//         city: 'Karnei Shomron',
//         temp: 85
//     }
// };

// // let name = person.name
// // let age = person.age
// const {name, age} = person

// console.log(`${name} is ${age}`)

// const {city, temp} = person.location
// if (person.location.city && person.location.temp){
//     console.log(`It's ${temp} degrees in ${city}`)
// }


// const book = {
//     title: 'The Mad Ship',
//     author: 'Robin Hobb',
//     publisher: {
//         name: 'Random House'
//     }
// }

// const {name: publisherName = 'Self Published'} = book.publisher
// console.log(publisherName)


// Array Destructuring


const address = ['6 Ayden Court', 'Monsey', 'New York', '10901']

const [, city, state] = address

console.log(`You are in ${city}, ${state}`)

const item = ['Coffee', '$2.00', '$2.50', '$3.50']

const [thing,sm,md,lg] = item

console.log(`A medium ${thing } costs ${md}`)
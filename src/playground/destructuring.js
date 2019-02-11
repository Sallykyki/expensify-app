//object destructuring

const person = {
  name: "Andrew",
  age: 26,
  location: {
    city: "Philadelphia",
    temp: 92
  }
};

const { name: firstName = "Anonymous", age } = person; //set default value
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.`);

const { city, temp: tempperture } = person.location;

if (city && tempperture) {
  console.log(`It's ${tempperture} in ${city}.`);
}

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holoiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "self-publisher" } = book.publisher;

console.log(publisherName);

const data = {
  a: 1,
  b: 2
};

const { a, b } = data;

const add = ({ data }) => {
  return data.a + data.b;
};
//array destructuring

const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Pennsylvania",
  "19147"
];

const [street, town, state = "New York", zip] = address; //set the default
// const [, , state] = address;

console.log(`You are in ${town} ${state}.`);

const item = ["coffe hot", "$2.00", "$2.50", "$2.75"];

const [coffee, small, medium, large] = item;

console.log(`A medium ${coffee} costs ${medium}.`);

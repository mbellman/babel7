const uppercase = str => str.toUpperCase();
const stringToWords = str => str.split(' ');

const greeting = 'Hello, I am a person.';

const uppercaseWords = greeting
  |> uppercase
  |> stringToWords;
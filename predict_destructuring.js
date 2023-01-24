//* Core Assignment
//? Predict the output -> whether it will throw an error, state the error

//* 1
// an array
const cars = ["Tesla", "Mercedes", "Honda"];
const [randomCar] = cars;
const [, otherRandomCar] = cars;

//? predict the output
console.log(randomCar); // output => 'Telsa' -> the first car of the array
console.log(otherRandomCar); // output => 'Mercedes' -> since used the , to skip the first car then will print the 2nd car

//* 2
// an object
const employee = {
    name: "Elon",
    age: 47,
    company: "Tesla",
};

const { name: otherName } = employee;

//? predict the output
//console.log(name); // will not run as name has not defined
console.log(otherName); // output nothing as name is not defined so it will not run the code
// stops at interpretation
// comment out line 29 => output is 'Elon' -> since a copy of current name as a new variable

//* 3
// an object
const person = {
    name: "Phil Smith",
    age: 47,
    height: "6 feet",
};

const password = "12345";
const { password: hashedPassword } = person;

//? predict the output
console.log(password); // output => '12345'
console.log(hashedPassword); // output => undefined -> this not listed in the object so there is no info for it

//*4
// an array
const numbers = [8, 2, 3, 5, 6, , 1, 67, 12, 2];
const [, first] = numbers; // 2
const [, , , second] = numbers; // 5 -> would be cruel to whoever maintains the code after me
const [, , , , , , , , third] = numbers; // 2 -> would be cruel to whoever maintains the code after me
// -> never do line 53/54

//? Predict the output
console.log(first == second); // outout => false -> as 2 != 5
console.log(first == third); // output => false -> even though the number may be same they != b/c they're memory location if different
// -> thus they are not equal

//* 5
// an object

const lastTest = {
    key: "value",
    secondKey: [1, 5, 1, 8, 3, 3],
};

const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;

//? predict the output
console.log(key); // output => 'value'
console.log(secondKey); // output => [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // output => 1 -> value at zeroth index of the array
console.log(willThisWork); // output => 5 -> this works b/c since const is an array and it shows looking in the array for the value
// -> the first indexed value is skip then it moves to the next on which is value 5

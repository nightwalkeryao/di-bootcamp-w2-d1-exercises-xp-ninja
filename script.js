// Exercise 1 : Evaluation
5 >= 1 // true

0 === 1 // false

4 <= 1 // false

1 != 1 // false

"A" > "B" // false

"B" < "C" // true

"a" > "A" // true

"b" < "A" // false

true === false // false

true != true // false


// Exercise 2 : Ask For Numbers

// 1
let numbers = prompt("Type in a list of numbers separated by commas: ")

// 2
let operation = numbers.replaceAll(',', '+')
let sum = eval(operation)
console.log(operation + ' = ' + sum)


// Exercise 3 : Find Nemo

// 1
let sentence = prompt("Enter a sentence containing the word 'Nemo':")

// 2
let index = sentence.split(' ').indexOf("Nemo")

// 3
console.log("I found Nemo at " + index)

// 4
if(index == -1)
    console.log("I can't find Nemo.")


// Exercise 4 : Boom

let number = prompt("Enter a number: ")
number = Number(number)
let msg = ""
if(number < 2)
    msg += "boom"
if(number > 2)
    msg += "b" + "0".repeat(number) + "m"
if((number % 5) === 0)
    msg = msg.toUpperCase()
if((number % 2) === 0)
    msg += "!"

alert(msg)
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

const arr = [
    "Yiğit",
    "ŞEKER",
    20,
    {country: "Türkiye", city: "Bayburt"}
]

console.log(arr)

let js = "Javascript"

const charsInJavascript = js.split("")

console.log(charsInJavascript)

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',') // split parantezinin içindeki neye göre ayıracağımızı belirler.

let firstFruit = fruits[0] // we are accessing the first item using its inde

let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]

console.log(lastFruit)  // lemon

countries[2] = "Türkiye" // changing the third value of the countries array

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]

const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]

console.log(numbers.indexOf(100)) // taking the index of the element 5

let index = fruits.indexOf('banana')  // 0

if(index === -1){ // We are checking that the fruit is exists or not
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}

const numbers1 = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.lastIndexOf(2)) //<--(7) It gives the last item that you wrote in braces. İf it does not exists then it returns -1

console.log(numbers1.includes(5)) // We are checking that the number we wrote is in the numbers1 array or not. It returns true or false

console.log(Array.isArray(numbers1)) // we are checking that numbers1 is a array or not

console.log(numbers1.toString()) // converting to the string

const numbers2 = [1,2,3,4,5,6]

console.log(numbers2.slice()) // -> it copies all  item
console.log(numbers2.slice(0)) // -> it copies all  item
console.log(numbers2.slice(0, numbers.length)) // it copies all  item
console.log(numbers2.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

numbers2.splice(0,1) // It deletes the first element

//splice takes 3 parametres.Starting position, number of times to be removed and number of items to be added.

const arr1  = ['item1', 'item2','item3']
arr.push('new item') // adding a new item to the end of the arr

numbers2.pop() // -> remove one item from the end
console.log(numbers2)

numbers1.shift() // -> remove one item from the beginning
console.log(numbers1)

numbers1.unshift(0) // -> add one item from the beginning
console.log(numbers1)

numbers2.reverse() // -> reverse array order
console.log(numbers2)

numbers2.sort()// we are sorting numbers2 elements
console.log(numbers2) // If there is a string then it sorts depending on the alphabet

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length)  // 2
console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]
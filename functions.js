//declaring a function without a parameter
function functionName() {
    // code goes here
}
functionName() // calling function by its name and with parentheses

// function without parameter,  a function which make a number square
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
}
  
square() // 4
  
// function without parameter
function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
  
    console.log(sum)
}
 
addTwoNumbers() // a function has to be called by its name to be executed 

function printFullName (){
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName())

// function with one parameter
function functionName(parm1) {
    //code goes her
}
  functionName(parm1) // during calling or invoking one argument needed
  
  function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}

console.log(areaOfCircle(10))


function sumOfTwoNumbers(number1,number2){
    sum = number1 + number2
    console.log(sum)
}

sumOfTwoNumbers(44,33)

function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5]
      //calling a function
  console.log(sumArrayValues(numbers))

function sumAllNums() {
    console.log(arguments)// arguments default array olarak fonksiyonlarla beraber gelir. Limitsiz parametre alacaksak veya kaç parametre alacağımızı bilmiyorsak kullanabiliriz.
    let sum = 0
    for(let i =0;i < arguments.length;i++){
        sum+=arguments[i]
    }
    return sum
   }
   
sumAllNums(1, 2, 3, 4)

// ARROW FUNCTİONS WİTH UNLİMİTED PARAMETRES

const sumAllNums = (...args) => {
    let sum = 0
    for (const element of args) {
      sum += element
    }
    return sum
}
  
console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

//ANONYMUS FUNCTİON

const anonymousFun = function() {
    console.log(
      'I am an anonymous function and my value is stored in anonymousFun'
    )
}  

//EXPRESSİON FUNCTİOM

// Function expression
const square = function(n) {
    return n * n
  }
  
console.log(square(2)) // -> 4

//SELF INVOKİNG FUNCTİON
(function(n) {
    console.log(n * n)
})(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below
  
let squaredNum = (function(n) {
    return n * n
})(10)
  
console.log(squaredNum)

//ARROW FUNCTİON

const printName = (firstName,lastName) =>{
    return `${firstName} ${lastName}`
}
console.log(printName(Yiğit,Şeker))

function greetings(name = 'Boş insan evladı') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
}
  
console.log(greetings())
console.log(greetings('Yiğit'))

//Aşağıdaki fonksiyonda default bir gravity değeri atanmış.Eğer gelecek parametreden emin değilsek deafult değer atayabiliriz.

function weightOfObject(mass, gravity = 9.81) {
    let weight = mass * gravity + ' N' // the value has to be changed to string first
    return weight
}
  
console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon

//Burada da ARROW FUNCTİON'a default atama yapıyoruz

const greetings = (name = 'Peter') => {
    let message = name + ', welcome to 30 Days Of JavaScript!'
    return message
}
  
console.log(greetings())
console.log(greetings('Asabeneh'))

const generateFullName =(isim = "Yiğit",soyisim = "Şeker")=>{
    return`${isim} ${soyisim}`
}

console.log(generateFullName())
console.log(generateFullName("Kerem", "Şeker"))
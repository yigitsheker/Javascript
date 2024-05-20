const callback = (n) => {
    return n ** 2
}
  
// bir başka fonksiyonu callback olarak alan fonksiyon
function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callback, 3))

const highOrder = a =>{
    const doSomething = b =>{
        const doWhatever = c =>{
            return a* 2 + b + c
        }
        return doWhatever()
    }
    return doSomething()
}

console.log(highOrder(8)(2)(10))

const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))

//SETTİNG TIME

//setInterval

function sayHello() {
    console.log('Hello')
}
setInterval(sayHello, 1000) // saniyede 1 Hello yazdırır, 1000ms = 1s

//setTimeout Belirlediğin süre sonunda sana istediğini yapar

function sayHello() {
    console.log('Hello')
}
setTimeout(sayHello, 2000) //2 saniye bekledikten sonra "Hello" yazdıracak

// FOREACH
//Bir dizi elemanlarını sırasıyla gezer. "element", "index" ve dizinin kendisi ile callback fonksiyonunu parametre olarak alabilir. "index" ve dizinin kendisi isteğe bağlı olarak parametre olarak verilmeyebilir.

const numbers2 = [44,77,24,8,7,27,11]

numbers2.forEach(num => console.log(num))

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))

// MAP ****
//Bir dizi elemanını yinelemek ve dizi öğelerini değiştirmek. callback fonksiyonla birlikte "elements", "index" yeni bir diziyi parametre olarak alabilir

const names = ['Yİğit', 'Kıvanç', 'Yağız', 'Maxwell']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)

//FILTER
// Dizi içerisinden istediğimiz koşullara uyan elemanları filtreleyerek geri döndürür

//Ülkeler "land" ifadesi içersin
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)

const scores = [
    { name: 'Yiğit', score: 95 },
     { name: 'Kıvanç', score: 98 },
    { name: 'Benjamin', score: 80 },
    { name: 'Maxwell', score: 50 },
    { name: 'Yağız', score: 85 },
    { name: 'Ayşegül', score: 100 },
]
  
const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)

//REDUCE ***
//Reduce fonksiyonu bir callback fonksiyonu gerektirir. Dizinin her değeri için bir işlev yürütür ve sonunda diziyi tek bir değere düşürür. Metodun dönüş değeri ilk parametresi olan accumulator parametresinde saklanır.

const numbers3 = [1, 2, 3, 4, 5]
const sum = numbers3.reduce((acc, cur) => acc + cur, 0)

console.log(sum)

//EVERY
//Tüm elemanların tek bir açıdan benzer olup olmadığını kontrol edin. Booelan türünde geri dönüş yapar

const names2 = ['Ayşegül', 'Mustafa', 'Ukbe', 'Anthony']
const areAllStr = names.every((name) => typeof name === 'string') // hepsi string türünde mi?

console.log(areAllStr)

//SOME
//Bazı elemanların tek bir açıdan benzer olup olmadığını kontrol eder. Boolean türünde geri dönüş yapar.

console.log(
    scores.some(score => score.score==100) // Elemanlardan en az birinin doğruluğunu ölçmeye yarar
)

//FIND
//İstenilen koşulu sağlayan ilk elemanı geri döndürür.

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)

//FINDINDEX
//Koşulu sağlayan ilk elemanın indexini döndürür.

const age2 = ages.findIndex((age1)=> age1 > 30 )

console.log(age1)

//SORT
//Bir dizinin değerlerini sıralamak için kullanılır.

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']

//Sayıları Sıralamak

const sayilar = [44,77,24,8,11]

sayilar.sort(function(a,b){
    return a - b                //Eğer a-b şeklinde döndürülürüse değer küçükten büyüğe sıralar. b-a olarak döndürülürse büyükten küçüğe sıralar.
})

//İsimleri sıralarken bize tersten sıralama imkanı da sunan localCompare() methodu:

const isimler = ["Yiğit", "Kerem","Ayşegül"]

isimler.sort(function(a,b)  { return a.localeCompare(b)}) // Böyle yazarsak isimleri A'dan Z'ye a ve b'nin yerlerini değiştirip yazarsak tersi şeklinde sıralanır.

console.log(isimler)
let numOne = 3
let numTwo = 3

console.log(numOne==numTwo)

let js = "Javascript"
let py = "Python" 

console.log(js==py)

let lightOn = true
let lightOff = false

console.log(lightOn==lightOff)

let nums = [1, "Yiğit",null , true, []]

const PI = 3.14

console.log(Math.floor) //tabana yuvarlar
console.log(Math.ceil) // tavana yuvarlar
console.log(Math.round) // yuvarlar
console.log(Math.random()* 11) // 0 ile 10 arasında random sayı üretir

console.log(Math.floor(Math.random()*8))

Math.abs(-10) // mutlak değer

let name = "Yiğit"

let surname = "ŞEKER"

//let fullName = name + surname 

let fullName = `${name}
araya istediğini yazabilirsin ve bu stringlere templete string denir.
${surname}` // Değişkenleri stringin içinde kullanmamızı sağlar.

console.log(fullName)

let paragraph = "   Either listen mind and win\
or listen your heart and lost    " // eğer paragraf yazıyorsan \ ile başka satırlara da yazabilirsin

// String Methods

console.log(surname.length)

console.log(surname.toUpperCase) // toLowerCase

let country = "Türkiye"
console.log(country.substring(2,4))// 2. indexli elemandan başlayıp diğer parametre kadar elemanı alır ama en sondakini almaz.

console.log(country.substr(2,4)) // yukarıdakinden farklı olarak son elemanı da alır

console.log(paragraph.trim) //baştaki ve sondaki gereksiz boşlukları siler.

console.log(paragraph.includes("heart")) // Bir string içinde ifadenin olup olmadığını sorgular.(CASE SENSİTİVE)

console.log(country.replace("Türkiye", "England")) // değiştirme. Eğer birden fazla aynı kelimeden varsa ve hepsini değiştireceksen replaceAll kullanmalısın

console.log(country.charAt(2)) // köşeli parantezlerle yaptığımız indekslerle aynı. charCodeAt yazarak ASCII sayısını da bulabilirsin

console.log(surname.indexOf("E")) // Eğer bu karakter içinde varsa o karakterin olduğu ya da başladığı indexi yoksa da -1 i döndürür. lastIndexOf ise yaılan kelimenin son indexsini döndürür.

let string = "30"

console.log(string.concat("Days","Of","Javascript")) // substringleri birleştirmek için concat kullanılır

console.log(string.startsWith("3")) // hangi karakterle başladığını kontrol eder parametre olarak bir substring alır.

console.log(paragraph.search("mind")) // kelimenin başladığı indexi döndürür.

let patternOne = /love/ //regular expression. with out any flag

let patternTwo = /love/gi // g- means to search in the whole text, i- means case insensitive

console.log(string.match("0")) // 0 ı arıyor kaçtane olduğunu ve nasıl yazıldığını ekrena verir

console.log(string.repeat(10)) // tekrar eder

//TYPE CONVERSİON

let num = "8"

let num2 = "5.5"

let numInt = parseInt(num)  // STR --> INT

console.log(numInt)

console.log(Number(num)) //  STR --> INT 

console.log(parseFloat(num2)) // STR --> FLOAT
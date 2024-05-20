5 =="5" // True

5 ==="5" // False

5 !="5" // True

5 !=="5" // False

"yiğit".length == "şeker".length // True

const check = 4 > 3 && 8 > 7     //AND
const check2 = 56 > 43 || 65 < 89   // OR

let check3 = !(7 < 9) //False

let count = 0
console.log(count++)
console.log(++count)

let isRaining = true
isRaining // Koşol Durumları
    ? console.log("You need a rain coat")
    : console.log("No need for a rain coat")

isRaining = false
    ? console.log("You need a rain coat")
    : console.log("No need for a rain coat")

alert("NE BAKIYON KARŞM") // İçine yazılan ifadeyi uyarı pencerisi olarak ekrana verir.

prompt("Bir Sayı Girin:","sayı yalnızca pozitif olmalı") // Kullanıcıdan input alabileceğimiz bir satrılı uyarı verir. 2. parmetreyle de input satırını doldurup uyarı verebiliriz.

confirm("Emin Misin?") // Onay butonu olarak uyarı sekmesi açar
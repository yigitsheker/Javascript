//Set ve Map'i sırasıyla array ve objelere benzetebiliriz. Ancak farklılık olarak set elemanları eşsiz olmalıdır.
//Objelerdeki key değerlerini sadece string olarak atayabilirken map de istediğimiz şekilde atayabiliriz

const companies = new Set() // Boş bir set(küme)
console.log(companies)

const names = new Set("Yiğit", "Kerem","Ayşegül");

[...names].map =(name=>console.log(name)) // Set'i bir array'e çevirip kullandık çünkü bazı methodlar set ile kullanılmıyor. 

names.add("Sertaç") // eleman eklemek
names.add("Nukta")
names.add("Serap")
names.add("Betül")


names.delete("Yiğit") // eleman silmek

names.size // Set'in uzunluğunu verir.


console.log(names.has("Kerem")) // Names'in içinde Keremn var mı kontrol eder boolean döndürür

names.clear // Bütün elemanları siler


// KÜme Birleşimi 

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let C = new Set(c)

console.log(C)

// Küme Kesişimi

let d = [1, 2, 3, 4, 5]
let e = [3, 4, 5, 6]

let D = new Set(a)
let E = new Set(b)

let f = d.filter((num) => E.has(num)) //!E.has(num) şeklinde yazarsak da farklarını buluruz.
let F = new Set(f)

console.log(C)

//MAP 
// Set'in sahip olduğu yukarıdaki metodlara kendi de sahiptir.

const map = new Map()

map.set("name","Yiğit") // Map'e key ve value değerleri eklemek
map.set(20, "age")
map.set(true,"bool")

console.log(map.get(20)) // elemanlara ulaşabilmek

//Objeyi Map'e atmak

let yigit = {name: "Yiğit"}

let visitCounter = new Map()

visitCounter.set(yigit,104)

alert(visitCounter.get(yigit))

console.log(map.keys)
console.log(map.values)
console.log(map.entries) // Hem key hem value değerlerini döndürür.

let kerem ={name:"Kerem", surname: "Şeker"}

const mapK = new Map(Object.entries(kerem)) // Kerem objesini bir map'in içine atmak

console.log(
    Object.fromEntries(mapK.entries()) // map'i objeye döndürmek
)
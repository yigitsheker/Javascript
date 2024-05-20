const person = {
    firstName: 'Yiğit',
    lastName: 'Şeker',
    age: 20,
    country: 'Türkiye',
    city: 'Bayburt',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Python',
      'Basetball',
      'Formula 1',
      'Football',
      'Tenis'
    ],
    isMarried: false,
    getFullName : function() {
        return `${this.firstName} ${this.lastName}`
    },
    phone:"+905511645370"
}

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)

console.log(person["country"])
console.log(person["city"])
console.log(person["skills"])

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person) //Nesneyi orijinal nesneyi değiştirmeden kopyalamak için kullanılır.
console.log(copyPerson)

const keys = Object.keys(copyPerson)//Bir nesnenin anahtarlarını veya özelliklerini dizi olarak almak için kullanılır
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']

const values = Object.values(copyPerson) //Nesnenin key'lerine karşılık gelen değerleri dizi içerisinde almak için kullanılır
console.log(values)

const entries = Object.entries(copyPerson) //Bir dizideki key ve value değerlerini almak için kullanılır.
console.log(entries)

console.log(copyPerson.hasOwnProperty('name')) //Bir nesnede belirli bir anahtar veya özelliğin bulunup bulunmadığını kontrol etmek için kullanılır
console.log(copyPerson.hasOwnProperty('score'))
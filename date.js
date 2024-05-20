const date = new Date()

let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    hour = date.getHours(),
    minutes = date.getMinutes(),
    second = date.getSeconds(),
    dayName = date.getDay()

let months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
]

let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
]



let humanReadableDate = `${day} ${months[month]} ${year} ${days[dayNumber]} ${hour}:${minute}:${second}`

console.log(humanReadableDate)
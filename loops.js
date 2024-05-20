// FOR LOOP

for(let i = 0; i <= 5; i++){
    console.log(i)
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'] // ADDİNG COUNTRİES TO THE NEW ARRAY
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]

}

console.log(sum)  // 15

// WHİLE LOOP

let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

let j = 0
do {
  console.log(i)
  j++
} while (i <= 5)

//FOR OF LOOP

const numbers1 = [1, 2, 3, 4, 5]

for (const num of numbers1) {
  console.log(num)
}

let sum1 = 0
for (const num of numbers) {
  sum = sum + num
}

const teams = ["Fenerbahçe", "Real Madrid", "Milan", "Bayer Leverkusen", "Paris Saint-Germain"]

const newTeams = []

for(const team of teams){
    newTeams.push(team.toUpperCase)
}

console.log(newTeams)

//BREAK

for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i)
}

//CONTİNUE

for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)
}
  
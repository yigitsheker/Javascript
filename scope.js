a = "Javasctipt"

b = 10// bir değişkeni let veya const anahtar kelimeleri olamadan tanımlamak o değişkeni global hale getirir ve geçerli dosya içerisinde her yerden erişilebilir.

function learnScope(){
    console.log(a, b)
}

learnScope()

function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)
  
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  // yukarıdaki çıktı konsol ekranında alacağımız hatanın çıktısıdır. 
  
if (true){
    var gravity = 9.81
    console.log(gravity) // 9.81
}
console.log(gravity)  // 9.81
  
for(var i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
}
console.log(i) // 3

for(let i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
}
  // console.log(i), Uncaught ReferenceError: i is not defined
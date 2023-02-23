// -- ++

// + - / * %

// < > == === != !== >= <=

// (condition) ? true : false

// let incrementNumber = 4
// console.log(incrementNumber)

// incrementNumber++
// console.log(incrementNumber)
// ++incrementNumber
// console.log(incrementNumber)

// let decrementNumber = 6
// console.log(decrementNumber)
// decrementNumber--
// console.log(decrementNumber)
// --decrementNumber

// let note1=10
// let note2=10
// let note3=9
// let note4=8
// let note5=9
// let avg = (note1+note2+note3+note4+note4)/5
// console.log(Number(Math.floor(avg)))

let numberRelation1=20
let numberRelation2=40

let relation = numberRelation1!=numberRelation2 //diferente no valor
console.log(relation)
relation = numberRelation1!==numberRelation2 // diferente no valor ou direfente no tipo
console.log(relation)
relation = numberRelation1==numberRelation2 // igual no valor
console.log(relation)
relation = numberRelation1===numberRelation2 // igual no valor e no tipo
console.log(relation)

//olhar no w3 schools no link https://www.w3schools.com/js/js_operators.asp

let newNumber = 20
newNumber +=40
newNumber *=3
newNumber -=60
newNumber /=6
newNumber %=5
console.log(newNumber)

let value1 = 24
let value2 = 32

const newCondition = value1 >= value2 ? "isso é verdade"
                   : value1 <= value2 ? "isso é verdade, segunda resposta true":
                   "resposta falsa para tudo"
console.log(newCondition)

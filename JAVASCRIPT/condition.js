// let num = 10
// let num2 = 20
// let isAdmin=true

// if (!isAdmin){
//     console.log('ele nao é admin');
// }else {
//     console.log('ele é admin, tem permissao ');
// }

// if (num<10) {
//     console.log('sou maior');
// } else if (num<10 && num2==20) {
//     console.log('segunda resposta verdade');
// }else{
//   console.log('resposta falsa');
// }

// let myExpression = 'a'
// switch (myExpression) {
//  case 'a':
//  console.log('apertou A');
//  break;

//  default:
//  break;
// }

// function calculadora(num1,operador,num2) {
//     let result
//     switch (operador) {
//         case '+':
// result = num1+num2
// break;

// case '-':
// result = num1-num2
// break;

// case '*':
// result = num1*num2
// break;

// case '/':
// result = num1/num2
// break;
    
// default:
// console.log('nao entendi');
// break;

// }
// return result
// }
// console.log(calculadora(12,"+",13));

function myAge(myage) {
    if (!myage) {
        throw 'voce precisa colocar a idade!'
    }
    console.log('eu executei depois do erro')
}
try {
    myAge(30)
    console.log('ja tratei e deu certo')
} catch (error) {
    console.log(error)
}
console.log('programa continua')

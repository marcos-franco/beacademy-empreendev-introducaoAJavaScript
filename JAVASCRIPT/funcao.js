//Exemplo 

          //Method
// function myFirstFunction(){
// entra o meu codigo
// console.log("Hello World");
// }

//Execute
// myFirstFunction();

// Funcao com parametros e argumentos

// number = 32 e number2 = 24
//function sum(number1, number2){
//console.log(number1 + number2)
// }
// sum(32, 24);

// Funcao com retorno
// function FirstFunctionWithReturn(num1,num2){
//     let total = num1+num2;
//     return total;     
// }

// Restaurante
// console.log(FirstFunctionWithReturn(10,15));

// function meuPratoDeComida(comida1,comida2,comida3,comida4){
// return `meu prato de comida eh: ${comida1},${comida2},${comida2},${comida3},${comida4}`
// }
// const prato = meuPratoDeComida('arroz','feijao','bife','batata frita');
// console.log(prato);

// arrow function
// const myFirstArrowFunction = (number1,number2) => {
// let total = number1 + number2
// return total;
// }

// const result = myFirstArrowFunction(10,15);
// console.log(result);




// Funcao anonima/sem nome
// (function(){
//     console.log('Empreendev');
// })()//autoexecucao

// Funcao dia a dia anonima
// setTimeout(function(){
// console.log('Empreendev em 3 segundos para ser executado')
// },3000 )//3 segundos


// let assunto

// function criarAssunto(assunto) {
//     return assunto
// }
// console.log(criarAssunto());


//parte 2
// let assunto = 'Estudar' // var = valor
// function criarAssunto(assunto) {
//     return assunto
// }

// console.log(assunto);
// console.log(criarAssunto(assunto));

// parte 3 
// let assunto = 'Estudar' // var = valor
// function criarAssunto(assunto) {
//     assunto = "escutar musica" // mudanca de valor
//     return assunto
// }

// console.log(assunto);
// console.log(criarAssunto(assunto));

//parte 4
// let assunto = 'Estudar' // var = valor
// function criarAssunto() {//sem parametro
//     assunto = "escutar musica" //mudanca de valor
//     return assunto
// }

// console.log(assunto);
// console.log(criarAssunto(assunto));




//hoisting
// digaMinhaIdade()
// function digaMinhaIdade() {
//     return console.log(30);
// }

// aprender sobre functions vai no mdn e digita callback na barra de pesquisa

// callback
// function minhaFuncao(callback) {
//     console.log("inicio da minha funcao")
//     callback(15,15)
//     console.log('final da minha funcao')
// }

// minhaFuncao(
//     (num1,num2) =>{
//         console.log(num1+num2)
//     }
// )

//functions constructs
function Sum(){
    this.num1,
    this.num2,
    this.calc = function(num1,num2){
        return total = num1+num2
    }
}

const math = new Sum()
console.log(math.calc(20,20))

//
const data = new Date().getDate();
console.log(data)

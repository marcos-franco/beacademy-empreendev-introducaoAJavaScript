// 1.  declare uma variavel de nome person
var person;

// 2. que tipo de dado eh a variavel acima?
console.log(typeof person);
// undefined

//3.declare uma variavel e atribua valores para cada um dos dados:

//name:string
//age:number(integer)
//weight:nimber(float)
//isAdmin:boolean
//isAMan:boolean

// var pessoa = {
//     name:'Moacir',
//     age: 30,
//     weight: 69,
//     isAdmin: false,
//     isAman: true,
// }
// console.log(pessoa);

// 4. a variavel human abaixo eh de que tipo de dados?
// object

// 4.1 atribua a ela as mesmas propriedades e valores do exercicio 3

// 4.2 mostre no console a seguinte mensagem:
// o humano <name> tem o peso <weight> kg

// let human = {}
// console.log(human)

// var human = {
//     name: 'cleitin do crau',
//     age: 7,
//     weight: 15.9,
//     isAdmin: true,
//     isAman: true,
// }
// console.log(`o humano ${human.name} tem o peso ${human.weight} kg`);


// 5. declare uma variavel do tipo Array, de nome humans e atribua a ela nenhum visualViewport, ou seja, somente o array vazio

// let humans = []

// 6. reatribua valor para a variavel acima, colocando dentro dela o objeto human da questao 4.(nao copiar e colocar o objeto, mas usar o objeto criado inserir ele no array)

// humans = [human]
// console.log(humans[0])

// 7. coloque no console o valor da posicao zero do array acima
// console.log(humans[0])

// 8. crie um novo objeto human e coloque na posicao 1 do array humans

// let newHuman = {
//     name: 'Luan Monteiro',
//     age: 30,
//     weight: 90,
//     isAdimin: true,
//     isAman: true,
// },

// console.log(newHuman)

//humans = [
//  human, newhuman]
// console.log(Humans)


// 9. sem rodar o codigo responda o resultado da saida abaixo:

// a)
// console.log(a)
// var a=1
//resposta:undefined

// b)
//  let a 
// console.log(a)
// {
//     let a = 2
//     console.log(a)
// }
// console.log(a)
//resposta: undefined e depois dentro do escopo 2 e fora undefined tambem

//c)
// console.log(b)
// {
//     let b=3
//     console.log(b)
// }
// console.log(b)
//resposta: so vai aparecer 3 dentro do escopo, nos outros vai dar undefined ou null porque a variavel eh local.

// d)
// const c = 10
// {
//     console.log(c)
//     const c = 20
//     console.log(c)
// }

// resposta: vai aparecer apenas o numero 10 porque const nao altera o valor

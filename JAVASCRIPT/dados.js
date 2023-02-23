// Type conversion

// console.log(Number('9'+24));
// console.log(typeof String(9)+' convertendo em texto')


// Contar caracteres
// let oneWord = 'Augusto'
// console.log(oneWord.length)


// maiusculas e minusculas
// let phrase = 'testando letras maiusculas'
// console.log(phrase.toUpperCase())
// console.log(phrase.toLowerCase())


// Convertendo para inteiro
// let decimalNumber = 37.8
// console.log(parseInt(decimalNumber))


// Trabalhar com casas decimais
// let niceNumber = 24.46874352165
// console.log(niceNumber.toFixed(2))
// console.log(niceNumber.toFixed(2).replace('.',','))


// let otherNumber = 129/32
// console.log(Number( otherNumber.toPrecision()))

// manipulando string e arrays

/*
separando um texto que contem espacos, em um novo array onde cada texto eh uma posicao do array
*/


// let newPhase = 'testando TESTE teste'
// console.log(newPhase)
// let phraseToArray = newPhase.split(' ')
// console.log(phraseToArray)


// convertendo novamente o texto para string
// .join(' ') -> permite que eu gere separacoes (- _ / '')


// let phraseModify = phraseToArray.join(' ').toLowerCase()
// console.log(typeof phraseModify)


// verificar se contem palavras ou letras
// let stringInclude = 'Veem ne mim Empreendev, atlasiano on'
// console.log(stringInclude.includes('x'))

// Objetos

// let ArrayInclude = [
//     'atlas',
//     'atlasiano',
//     'mim',
//     'empreendev',
//     'teste',
//   {
//    firstName: 'Empreendev',
//    lastName:'atlasiano'
//   }
// ]

// console.log(ArrayInclude.includes('atlasiano'))
// console.log(stringInclude.startsWith('at'))
// console.log(stringInclude.endsWith('no'))


// Transformando um array em caracteres

// let wordToArray = 'quem esta gostando do Empreendev ?'
// console.log(Array.from(wordToArray))


//Manipulano arrays
// const animals = ['🦁','🐶','🐘','🦒','🦈']
// console.log(animals)


// Adicionar item no fim do array
// console.log(animals.push('😺'))
// console.log(animals)


// Adicionar item no comeco do array
// console.log(animals.unshift('🐵'))
// console.log(animals)


// Remover item do fim
// console.log(animals.pop())
// console.log(animals)


// Remover item do comeco
// console.log(animals.shift())
// console.log(animals)


// Pegar somente alguns elementos do array
// Nao modificar o array
// console.log(animals.slice(0,3))
// console.log(animals)


// Remover 1 ou mais itens do array
// animals.splice(1,3)
// console.log(animals)


// Encontrar a posicao do array
// let index = animals.indexOf('🦁')
// console.log(index)
// animals.splice(index,1)
// console.log(animals)
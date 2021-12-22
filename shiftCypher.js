// class ShiftCyper {
//   constructor(shift) {
//     this.shift = shift;
//   }

//   encrypt(str) {

//   }
  
// }

const str = 'hello world';
const array = str.split('')
// console.log(array.join(''))

const alphabet = 'abcdefghijklmopqrstuvwxyz'.split('')

console.log()

 array.forEach(l => {
  console.log(alphabet[alphabet.indexOf(l) + 4].toUpperCase())
  })

console.log(alphabet)

let shift = 4
//  console.log(messing)

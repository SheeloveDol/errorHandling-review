// class ShiftCyper {
//   constructor(shift) {
//     this.shift = shift;
//   }

//   encrypt(str) {

//   }
  
// }

// const str = 'hezzlloworld';
// const array = str.split('')
// // console.log(array.join(''))

// const alphabet = 'abcdefghijklmopqrstuvwxyz'.split('')

// console.log()

//  array.forEach(l => {
//   console.log(alphabet[alphabet.indexOf(l) + 4].toUpperCase())
//   })

// console.log(alphabet)

// let shift = 4
// //  console.log(messing)




//SOLUTION//
// Write class below
class ShiftCipher {
  constructor(shift){
    this.shift = shift;
  }
  encrypt(plainString) {
    let encryptString = '';
    const tempString = plainString.toUpperCase();

    for (let i=0; i < tempString.length; i++) {
      let charNum = tempString.charCodeAt(i);
      
      if (charNum <= 90 && charNum >= 65) {
        charNum += this.shift;
        if (charNum > 90) {
          charNum -= 26;
        }
      }
      encryptString += String.fromCharCode(charNum);
    }
    return encryptString;
  }

  decrypt(encryptString) {
    let decryptString = '';
    const tempString = encryptString.toLowerCase();

    for (let i=0; i < tempString.length; i++) {
      let charNum = tempString.charCodeAt(i);
      
      if (charNum <= 122 && charNum >= 97) {
        charNum -= this.shift;
        if (charNum < 97) {
          charNum += 26;
        }
      }
      decryptString += String.fromCharCode(charNum);
    }
    return decryptString;
  }
}

const word = 'abcdefghijklmnopqrstuvwxyz'

for (let i = 0; i < word.length; i++) {
  console.log(word.charCodeAt(i))
}
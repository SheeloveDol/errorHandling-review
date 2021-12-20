// In Javascript we use 'try...catch' statement to anticipate and handle errors

try {
  throw Error("This is an error")
} catch (e) {
  console.log(e)
}



// another real life example of try...catch

function capAllElements(arr){
	try {arr.forEach((el, index, array) => {
    array[index] = el.toUpperCase();
  });} catch(e) {
    console.log(e)
  }
}

capAllElements('Incorrect argument');
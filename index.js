function ASCIIConverter(expression) {
  let convertedAsciiArray = [];
  let inputExpression;
  // check if arguements is string
  if (typeof arguments[0] === "string") {
    inputExpression = arguments[0];

    for (i in inputExpression) {
      let convertedCharacterAscii = inputExpression[i].charCodeAt();
      convertedAsciiArray.push(convertedCharacterAscii);
    }
    return convertedAsciiArray;
  } else {
    throw `String is expected. Got ${typeof expression} instead`;
  }
}

let checkAscii = ASCIIConverter("Hello World");
console.log(...checkAscii);

console.log(String.fromCharCode(...checkAscii));
// String is expected. Got number instead

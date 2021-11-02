// * Declare types explicitly
type text = string;
type int = number;
type charCodes = number[];

function ASCIIConverter(expression: text) {
  let convertedAsciiArray: charCodes = [];
  let inputExpression: text;

  // check if arguements is string
  if (typeof arguments[0] === "string") {
    inputExpression = arguments[0];

    for (let i: int = 0; i < inputExpression.length; i++) {
      let convertedCharacterAscii: int;
      convertedCharacterAscii = inputExpression[i].charCodeAt(i);
      convertedAsciiArray.push(convertedCharacterAscii);
    }
    return convertedAsciiArray;
  } else {
    throw `String is expected. Got ${typeof expression} instead`;
  }
}

let checkAscii = ASCIIConverter("ello");
console.log(checkAscii);

// console.log(String.fromCharCode(...checkAscii));
// String is expected. Got number instead

// * Declare types explicitly
type text = string;
type int = number;
type charCodes = number[];

function convertToAscii(expression: text) {
  let inputExpression: text;
  let convertedAsciiArray: charCodes = [];

  // check if arguements is string
  if (typeof arguments[0] === "string") {
    inputExpression = arguments[0];

    for (let i: int = 0; i < inputExpression.length; i++) {
      let convertedCharacterAscii: int;

      convertedCharacterAscii = inputExpression[i].charCodeAt(0);

      convertedAsciiArray.push(convertedCharacterAscii);
    }
    return convertedAsciiArray;
  } else {
    throw `String is expected. Got ${typeof expression} instead`;
  }
}

let checkAscii = convertToAscii("HI!");
console.log(...checkAscii);

// console.log(String.fromCharCode(...checkAscii));
// String is expected. Got number instead

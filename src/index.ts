// * Declare types explicitly
type text = string;
type int = number;
type charCodes = number[];

function convertToAscii(expression: text) {
  let convertedAsciiArray: charCodes = [];

  // check if arguements is string
  if (typeof arguments[0] === "string") {
    for (let i: int = 0; i < expression.length; i++) {
      let convertedCharacterAscii: int;

      convertedCharacterAscii = expression[i].charCodeAt(0);

      convertedAsciiArray.push(convertedCharacterAscii);
    }
    // ? return array of converted ascii
    return convertedAsciiArray;
  } else {
    throw `String is expected. Got ${typeof expression} instead`;
  }
}

let checkAscii = convertToAscii("HI!");
console.log(...checkAscii);

console.log(String.fromCharCode(...checkAscii));
// String is expected. Got number instead

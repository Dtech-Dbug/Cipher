function ASCIIConverter(expression) {
  let convertedAscii;
  let inputExpression;
  // check if arguements is string
  if (typeof arguments[0] === "string") {
    inputExpression = arguments[0];

    for (i in inputExpression) {
      console.log(inputExpression[i].charCodeAt());
    }
  } else {
    throw `String is expected. Got ${typeof expression} instead`;
  }
}

ASCIIConverter("Hello World");
// String is expected. Got number instead

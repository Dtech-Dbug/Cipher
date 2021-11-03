"use strict";
function convertToAscii(expression) {
    var convertedAsciiArray = [];
    // check if arguements is string
    if (typeof arguments[0] === "string") {
        for (var i = 0; i < expression.length; i++) {
            var convertedCharacterAscii = void 0;
            convertedCharacterAscii = expression[i].charCodeAt(0);
            convertedAsciiArray.push(convertedCharacterAscii);
        }
        // ? return array of converted ascii
        return convertedAsciiArray;
    }
    else {
        throw "String is expected. Got " + typeof expression + " instead";
    }
}
var checkAscii = convertToAscii("HI!");
// console.log(...checkAscii);
function convertIntoToChar() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var charArray = [];
    args.forEach(function (item) {
        charArray.push(String.fromCharCode(item));
    });
    return charArray.join("");
}
// let checkChar = ;
console.log(convertIntoToChar(72, 73));
//# sourceMappingURL=index.js.map
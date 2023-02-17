// Declare and export the functions here.

// Encryption Functions
/////////////////////////////////////////////

const caesarCipher = (str, amount = 0) => {
  if (amount < 0) {
    return caesarCipher(str, amount + 26);
  }
  let output = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }
    output += char;
  }
  return output;
};

const symbolCipher = (str) => {
  const symbols = {
    ا: "a",
    ع: "a",
    ب: "b",
    پ: "p",
    ت: "t",
    ط: "t",
    ث: "s",
    س: "s",
    ص: "s",
    ج: "j",
    چ: "w",
    ح: "h",
    خ: "o",
    د: "d",
    ذ: "z",
    ز: "z",
    ض: "z",
    ظ: "z",
    ر: "r",
    ژ: "c",
    ش: "x",
    غ: "q",
    ق: "q",
    ف: "f",
    ک: "k",
    گ: "g",
    ل: "l",
    م: "m",
    ن: "n",
    و: "u",
    ه: "e",
    ی: "y",
  };

  let output = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.toLowerCase()[i];

    if (symbols[char]) {
      output += symbols[char];
    } else {
      output += char;
    }
  }
  return output;
};

const reverseCipher = (sentence) => {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join("");
  }
  return words.join(" ");
};

module.exports = { symbolCipher, caesarCipher, reverseCipher };

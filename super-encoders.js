// Import the encryptors functions here.

const {
  symbolCipher,
  caesarCipher,
  reverseCipher,
} = require("./encryptors.js");

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  const symb = symbolCipher(str);
  const symbRev = reverseCipher(symb);
  const encoded = caesarCipher(symbRev, 12);
  return encoded;
};

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  const decae = caesarCipher(str, -12);
  const decaeRev = reverseCipher(decae);
  const decoded = symbolCipher(decaeRev);
  return decoded;
};

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === "encode") {
    output = encodeMessage(str);
  }
  if (process.argv[2] === "decode") {
    output = decodeMessage(str);
  }

  process.stdout.write(output + "\n");
  process.exit();
};

// Run the program.
process.stdout.write("Enter the message you would like to encrypt...\n> ");
process.stdin.on("data", handleInput);

// Caesar Cipher encryption/decryption logic
function caesarCipher(text, shift) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char.match(/[a-z]/i)) {
      const code = text.charCodeAt(i);
      if (char === char.toUpperCase()) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }

    result += char;
  }

  return result;
}

// Handle file encryption
function encryptFile() {
  const fileInput = document.getElementById('fileInput');
  const shiftInput = document.getElementById('shiftInput');
  const file = fileInput.files[0];
  const shift = parseInt(shiftInput.value);

  const reader = new FileReader();

  reader.onload = function(e) {
    const sourceCode = e.target.result;
    const encodedSourceCode = caesarCipher(sourceCode, shift);
    document.getElementById('output').value = encodedSourceCode;
  };

  reader.readAsText(file);
}

// Handle file decryption
function decryptFile() {
  const fileInput = document.getElementById('fileInput');
  const shiftInput = document.getElementById('shiftInput');
  const file = fileInput.files[0];
  const shift = parseInt(shiftInput.value);

  const reader = new FileReader();

  reader.onload = function(e) {
    const encodedSourceCode = e.target.result;
    const decodedSourceCode = caesarCipher(encodedSourceCode, -shift);
    document.getElementById('output').value = decodedSourceCode;
  };

  reader.readAsText(file);
}

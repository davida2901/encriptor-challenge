let encriptTextarea = document.querySelector(".encriptor-textarea");
let decryptorTextarea = document.querySelector(".decryptor-textarea");

let encriptButton = document.querySelector(".encriptor-button");
let decryptButton = document.querySelector(".decryptor-button");
let cleanButton = document.querySelector(".clean-button");
let copyButton = document.querySelector(".copy-button");

let encriptedText = "";
let decryptedText = "";

function encriptText(palabra) {
  palabra = palabra.replace(/[áäà]/gi, "a");
  palabra = palabra.replace(/[éëè]/gi, "e");
  palabra = palabra.replace(/[íïì]/gi, "i");
  palabra = palabra.replace(/[óöò]/gi, "o");
  palabra = palabra.replace(/[úüù]/gi, "u");

  encriptedText = palabra.replace(/e/g, "enter");
  encriptedText = encriptedText.replace(/i/g, "imes");
  encriptedText = encriptedText.replace(/a/g, "ai");
  encriptedText = encriptedText.replace(/o/g, "ober");
  encriptedText = encriptedText.replace(/u/g, "ufat");
  encriptedText = encriptedText.replace(/[!@#$%^&*()?":{}|<>]/g, " ");
  decryptorTextarea.value = encriptedText;
  encriptTextarea.value = "";
}

function decryptText(palabra) {
  palabra = palabra.replace(/[áäà]/gi, "a");
  palabra = palabra.replace(/[éëè]/gi, "e");
  palabra = palabra.replace(/[íïì]/gi, "i");
  palabra = palabra.replace(/[óöò]/gi, "o");
  palabra = palabra.replace(/[úüù]/gi, "u");

  decryptedText = palabra.replace(/enter/g, "e");
  decryptedText = decryptedText.replace(/imes/g, "i");
  decryptedText = decryptedText.replace(/ai/g, "a");
  decryptedText = decryptedText.replace(/ober/g, "o");
  decryptedText = decryptedText.replace(/ufat/g, "u");
  decryptedText = decryptedText.replace(/[!@#$%^&*()?":{}|<>]/g, " ");
  decryptorTextarea.value = decryptedText;
}

function copyDecryptedText() {
  decryptorTextarea.select();
  document.execCommand("copy");
  alert("Text copied in the clipboard");
  decryptorTextarea.value = "";
}

function clearTextAreas() {
  encriptTextarea.value = "";
  decryptorTextarea.value = "";
}


encriptButton.addEventListener("click", () => {
  encriptedText = encriptTextarea.value;
  encriptText(encriptedText.toLowerCase());
});
decryptButton.addEventListener("click", () => {
  decryptedText = encriptTextarea.value;
  decryptText(decryptedText.toLowerCase());
});

copyButton.onclick = copyDecryptedText;

cleanButton.onclick = clearTextAreas;

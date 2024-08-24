function getUserInputValue() {
  const userInput = document.getElementById("user-text");
  return userInput.value;
}

function assignTextToInput(text) {
  let resultInput = document.getElementById("result");
  resultInput.value = text;
  return;
}

function encriptText() {
  const text = getUserInputValue().toLowerCase().split("");
  const encriptedText = text.map((letter) => {
    switch (letter) {
      case "a":
        return "ai";
      case "e":
        return "enter";
      case "i":
        return "imes";
      case "o":
        return "ober";
      case "u":
        return "ufat";
      default:
        return letter;
    }
  });
  assignTextToInput(encriptedText.join(""));
}

function decryptText() {
  const text = getUserInputValue().toLowerCase();
  let decryptedText = text;

  while (
    decryptedText.includes("ai") ||
    decryptedText.includes("enter") ||
    decryptedText.includes("imes") ||
    decryptedText.includes("ober") ||
    decryptedText.includes("ufat")
  ) {
    decryptedText = decryptedText
      .replace("ai", "a")
      .replace("enter", "e")
      .replace("imes", "i")
      .replace("ober", "o")
      .replace("ufat", "u");
  }
  assignTextToInput(decryptedText);
}

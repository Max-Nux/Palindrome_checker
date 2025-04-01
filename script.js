const info = document.getElementById("info");
const input = document.getElementById("input");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function check() {
  const value = input.value;
  const reverse = reverseString(value);

  if (value === "") {
    info.classList.remove("infoHidden", "infoTrue");
    info.classList.add("infoFalse");
    info.innerText = "You need to type something you Idiot";
  } else if (value === reverse) {
    info.classList.remove("infoHidden", "infoFalse");
    info.classList.add("infoTrue");
    info.innerText = "This is a P A L I N D R O M E!";
  } else {
    info.classList.remove("infoHidden", "infoTrue");
    info.classList.add("infoFalse");
    info.innerText = "This is not a Palindrome!";
  }

  input.value = "";
}

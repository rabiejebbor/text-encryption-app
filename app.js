const input = document.getElementById("input");
// const key = document.getElementById("key");
const encryptBtn = document.getElementById("encryptBtn");
const incOutput = document.getElementById("incOutput");

const decrInput = document.getElementById("decrInput");
// const key = document.getElementById("key");
const decryptBtn = document.getElementById("decryptBtn");
const decrOutput = document.getElementById("decrOutput");
const decrKey = document.getElementById("decrKey");

const encryption1 = {
  a: ":",
  b: ";",
  c: "µ",
  d: "%",
  e: "@",
  f: "§",
  g: "?",
  h: ",",
  i: "!",
  j: "-",
  k: "_",
  l: ")",
  m: "(",
  n: "]",
  o: "}",
  p: "[",
  q: "^",
  r: "/",
  s: "&",
  t: "~",
  u: "#",
  v: "+",
  w: "=",
  x: "*",
  y: "£",
  z: "$",
  " ": " ",
  "'": "²",
};
const characters = `abcdefghijklmnopqrstuvwxyz&²~"'#{}[]()|-_^@=+°^$£*%!:/§.;?, µ`.split(
  ""
);
let length = characters.length;

encryptBtn.onclick = () => {
  // random encryption
  let randomEncrypt = {};
  let key = [];

  for (let i = 0; i < length; i++) {
    let index = random(length);

    // making sure the values in the object are unique
    while (Object.values(randomEncrypt).includes(characters[index])) {
      index = random(length);
    }
    randomEncrypt[characters[i]] = characters[index];
    key.push(index);
  }

  key = key.join(" ");

  const text = input.value;
  const encryptedText = text
    .split("")
    .map((e) => randomEncrypt[`${e}`])
    .join("");
  incOutput.innerHTML = `<h3>Encrypted text: </h3><p>${encryptedText}</p> <p>key= ${key}</p>`;
};

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

// decryption

// get back the encryption form key

decryptBtn.onclick = () => {
  let decKey = decrKey.value;
  let restoredEncrypt = {};
  let array = decKey.split(" ");
  let count = 0;
  for (const index of array) {
    restoredEncrypt[characters[count]] = characters[index];
    count++;
  }
  console.log(restoredEncrypt);

  const text = decrInput.value;
  const decryptedText = text
    .split("")
    .map((e) => getKeyByValue(restoredEncrypt, e))
    .join("");
  decrOutput.innerHTML = `<h3>Decrypted text: </h3><p>${decryptedText}</p>`;
};

// let newIncryption = {};
// for (let letter in encryption1) {
//   newIncryption[letter] = encryption1[letter];
// }
// console.log(newIncryption);

// make a function that choses from options randomly and gives a number so that you can track back the encryption

function random(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// use the incryption method to encrypt text

// bugs : you don't het the original text if the random incryption has assigner to differtent letters to the same letter => make sure that the random encrypt does not assign a random letter if it is already an existing value in the object

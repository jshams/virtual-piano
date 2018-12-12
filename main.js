const c0 = new Audio(["Sounds/C0.mp3"]);
const c1 = new Audio(["Sounds/C1.mp3"]);
const c2 = new Audio(["Sounds/C2.mp3"]);
const c3 = new Audio(["Sounds/C3.mp3"]);
const c4 = new Audio(["Sounds/C4.mp3"]);
const c5 = new Audio(["Sounds/C5.mp3"]);
const c6 = new Audio(["Sounds/C6.mp3"]);
const c7 = new Audio(["Sounds/C7.mp3"]);

const f0 = new Audio(["Sounds/F0.mp3"]);
const f1 = new Audio(["Sounds/F1.mp3"]);
const f2 = new Audio(["Sounds/F2.mp3"]);
const f3 = new Audio(["Sounds/F3.mp3"]);
const f4 = new Audio(["Sounds/F4.mp3"]);
const f5 = new Audio(["Sounds/F5.mp3"]);
const f6 = new Audio(["Sounds/F6.mp3"]);
const f7 = new Audio(["Sounds/F7.mp3"]);

const cNotes = [c0, c1, c2, c3, c4, c5, c6, c7];
const fNotes = [f0, f1, f2, f3, f4, f5, f6, f7];
let cOrF = cNotes;

const switchKeyboard = document.getElementById('switch');
const key = document.getElementsByClassName('key');

const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");


console.log("runnin");

switchKeyboard.addEventListener("click", (e) => {
  if (switchKeyboard.innerHTML == "F"){
    switchKeyboard.innerHTML = "C";
    cOrF = cNotes;
  }else{
    switchKeyboard.innerHTML = "F";
    cOrF = fNotes;
  }
});
//
// key.addEventListener("click", (e) => {
//   const keyId = e.id;
//   cOrF[parseInt(keyId)].play()
// });

zero.addEventListener("click", (e) => {
  cOrF[0].currentTime = 0;
  cOrF[0].play()
})
one.addEventListener("click", (e) => {
  cOrF[1].currentTime = 0;
  cOrF[1].play()
})
two.addEventListener("click", (e) => {
  cOrF[2].currentTime = 0;
  cOrF[2].play()
})
three.addEventListener("click", (e) => {
  cOrF[3].currentTime = 0;
  cOrF[3].play()
})
four.addEventListener("click", (e) => {
  cOrF[4].currentTime = 0;
  cOrF[4].play()
})
five.addEventListener("click", (e) => {
  cOrF[5].currentTime = 0;
  cOrF[5].play()
})
six.addEventListener("click", (e) => {
  cOrF[6].currentTime = 0;
  cOrF[6].play()
})
seven.addEventListener("click", (e) => {
  cOrF[7].currentTime = 0;
  cOrF[7].play()
})

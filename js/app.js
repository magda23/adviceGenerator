let randomId = document.querySelector(".randomId");
let randomTxt = document.querySelector(".random_txt");
let button = document.querySelector(".random_btn");

async function randomIdFunction() {
  let response = await fetch("https://api.adviceslip.com/advice");
  let data = await response.json();
  const id = data.slip.id;
  const txt = data.slip.advice;
  randomId.textContent = id;
  randomTxt.textContent = txt;
}

button.addEventListener("click", function () {
  randomIdFunction();
});

const jokeDisplay = document.getElementById('jokeDisplay');
const btn = document.getElementById('generateJoke');
const url = "https://v2.jokeapi.dev/joke/Any?type=single";

let getJoke = () => {
  fetch(url)
  .then(data => data.json())
  .then(item => {
    jokeDisplay.textContent = `${item.joke}`;
   // jokeDisplay.innerHTML = `<div class="smile smile-down">&#128512;</div><div class="joke">${joke}</div><div class="smile smile-up">&#128512;</div>`;
  });
}

btn.addEventListener('click',getJoke);
getJoke();
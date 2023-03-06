let joke = document.getElementById("joke");
let jokebtn = document.getElementById("jokeBtn");
let joke2 = document.getElementById("joke2");

jokebtn.addEventListener("click", getJoke);

async function getJoke() {
  let jokesAPI = await fetch("https://joke.deno.dev/type/programming");
  jokeArr = await jokesAPI.json();

  let random = jokeArr[Math.floor(Math.random() * jokeArr.length)];
  joke.innerHTML = random.setup;
  joke2.innerHTML = random.punchline;
}

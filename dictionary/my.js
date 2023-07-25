let input = document.querySelector("#input");
let searchBtn = document.querySelector("#searchBtn");
let apiKey = "b70bf8b7-9422-4b46-ab1b-db34c94df911";
let notFound = document.querySelector(".not-found");
let ans = document.querySelector("#defination");
let audioBox = document.querySelector(".audio");
let loading = document.querySelector(".loading");

/* steps
1. clear previous data
2. get input data
3. call api to get data*/

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();

  audioBox.innerHTML = ""; // clear data
  notFound.innerText = "";
  ans.innerText = "";

  let word = input.value;

  if (word === "") {
    // if no word is entered , trigger an alert
    alert("Enter a word!");
    return;
  }

  getData(word);
});

async function getData(word) {
  loading.style.display = "block"; // shows loading
  const response = await fetch(
    `https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`
  );

  const data = await response.json();

  //if data is empty

  if (!data.length) {
    loading.style.display = "none"; // if no result is found, dont show loading
    // data is always in array form
    notFound.innerHTML = "No result found";
    return;
  }

  // if result is in suggestions

  if (typeof data[0] === "string") {
    loading.style.display = "none"; // if result is found, dont show loading

    // if the first item of array is a string, it means the word entered does not exist inside english
    let suggestion = document.createElement("h3");
    suggestion.innerHTML = "Did you mean?";
    notFound.appendChild(suggestion);

    data.forEach((element) => {
      //get data from array
      let arr = document.createElement("span");
      arr.classList.add("suggested");
      arr.innerText = element;

      notFound.appendChild(arr);
    });
    return;
  }

  // if result is found
  loading.style.display = "none"; // if result is found, dont show loading
  let defination = data[0].shortdef[0]; // the ans lies in the first object inside the short def array
  ans.innerText = defination;

  // get the audio file
  let audio = data[0].hwi.prs[0].sound.audio;

  if (audio) {
    renderSound(audio);
  }
}

function renderSound(audio) {
  //https://media.merriam-webster.com/audio/prons/[language_code]/[country_code]/[format]/[subdirectory]/[base filename].[format]

  let subForlder = audio.charAt(0);
  let ausioSrc = `https://media.merriam-webster.com/soundc11/${subForlder}/${audio}.wav?key=${apiKey}`;
  let audioPlayer = document.createElement("audio");
  audioPlayer.src = ausioSrc;
  audioPlayer.controls = true;
  audioBox.appendChild(audioPlayer);
}

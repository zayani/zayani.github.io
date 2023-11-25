let memes = await fetch("./memes.json").then((res) => res.json());

console.log(memes);

//get url params
let params = new URLSearchParams(window.location.search);
let id = params.get("id");
let mparms = params.get("parms").split(",");

//set the src of the image #img
let img = document.querySelector("#img");
img.src = "./i/" + id + ".jpg";
img.alt = id;

//create mparms labels
let pLabels = mparms
  .map(
    (lbl, i) =>
      `<div class="label" style="${memes[id][i + 1]}"><div>${lbl}</div></div>`
  )
  .join("\n");

//append pLabels after #img
img.insertAdjacentHTML("afterend", pLabels);

//get div #meme
let meme = document.querySelector("#meme");

//set style of #meme
meme.style = memes[id][0]?.split("|")[0];

//set class of #meme
meme.className = memes[id][0]?.split("|")[1];

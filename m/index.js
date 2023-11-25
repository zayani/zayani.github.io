let memes = await fetch("./memes.json").then((res) => res.json());

console.log(memes);

//get url params
let params = new URLSearchParams(window.location.search);
let id = params.get("id");
let mparms = params.get("parms");

//set body inner html
let body = document.querySelector("body");
body.innerHTML = `
<h1>${id}</h1>
${mparms.split(",").join("<br>")}
`;

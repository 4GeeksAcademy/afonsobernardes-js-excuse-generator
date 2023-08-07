/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let whoArray = ["The dog", "My grandma", "His turtle", "My bird"];
let actionArray = ["ate", "peed", "crushed", "broke"];
let whatArray = ["my homework", "the keys", "the car"];
let whenArray = [
  "before the class.",
  "right on time.",
  "when I finished.",
  "during my lunch.",
  "while I was praying."
];

let imageArray = [
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.ebaumsworld.com%2FmediaFiles%2Fpicture%2F718392%2F85289984.jpg&f=1&nofb=1&ipt=153aa7ea024721141c114e87e5c974385cfd16cfecdbdc7635f75c79ee586e80&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FqBnOZcxhD6lwkMTg8-rmwj7aPv0%3D%2F0x0%3A1600x1200%2F1200x0%2Ffilters%3Afocal(0x0%3A1600x1200)%3Ano_upscale()%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F12473039%2FOriginal.0.jpg&f=1&nofb=1&ipt=6ec56622c97b89e23c08aeb420e7b0e0bf0653a9e1a9a39018d5b741445f25ea&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.greenmatters.com%2Fbrand-img%2F2g0N3w%2F640x480%2FElusormacrurus-ChrisVanWyk_4-1526493748207.jpg&f=1&nofb=1&ipt=d2f05dcea088ddc01b899bf1aeaee9e4b8efb70e655713551981a84a96ee0237&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FLSU2ST0kO3k%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=448c74e46f9d760475c421906b534774e922bf2a9465f0d13b0da23028147aa6&ipo=images"
];

window.onload = function() {
  let randomWhoIndex = Math.floor(Math.random() * whoArray.length);
  let randomWho = whoArray[randomWhoIndex];
  let randomAction =
    actionArray[Math.floor(Math.random() * actionArray.length)];
  let randomWhat = whatArray[Math.floor(Math.random() * whatArray.length)];
  let randomWhen = whenArray[Math.floor(Math.random() * whenArray.length)];
  let randomImage = imageArray[randomWhoIndex];

  document.getElementById("excuse").innerHTML =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;

  document.getElementById("animal").src = randomImage;
};

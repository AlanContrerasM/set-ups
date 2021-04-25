"use strict";
import _ from "lodash"; //optional, must run npm install --save lodash
import { DisplayController, Player } from "./myModule.js";
import "./css/reset.css";
import "./css/style.css";
import Icon from './media/washington.ico';








DisplayController.saySomething("HelloWorld");
const alan = Player("Alan");
console.log(alan.getPlayer());

function component() {
  const element = document.createElement("div");
  element.classList.add("center-items");
  // Lodash, imported
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.getElementsByTagName("main")[0].appendChild(component());




//adding icon
let link = document.querySelector("link[rel~='icon']");
if (!link) {
  link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/ico";
  document.getElementsByTagName("head")[0].appendChild(link);
}
link.href = Icon;
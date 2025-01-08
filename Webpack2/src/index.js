// import _ from "lodash";
import "./style.css";
import Icon from "./photo.png";
import Data from "./data.xml";
import Notes from "./data.csv";
import printMe from "./print.js";
import "./style.less"; // Для LESS
// import "./style.scss"; // Для Sass/SCSS

function component() {
  const element = document.createElement("div");
  const p = document.createElement("p");
  p.innerHTML =
    "WEBPACK project:<br>" +
    "A project with an individual Webpack configuration file has been created, which necessarily includes the following functionalities:<br>" +
    "<ol>" +
    "<li>Hashing filenames to prevent browser caching issues.</li>" +
    "<li>Support for local fonts to ensure correct display of texts.</li>" +
    "<li>Work with images.</li>" +
    "<li>Integration of CSS styles.</li>" +
    "<li>Optimized use of external libraries to reduce overall build size and improve performance.</li>" +
    "</ol>";
  p.classList.add("pink-elem");

  const btn = document.createElement("button");
  btn.classList.add("blue-elem");
  btn.innerHTML = "Click me";
  btn.onclick = printMe;

  const myIcon = new Image();
  myIcon.src = Icon;

  console.log(Data);
  console.log(Notes);

  element.append(p, btn);
  //   element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

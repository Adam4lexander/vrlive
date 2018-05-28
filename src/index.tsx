import "aframe";
import axios from "axios";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./components/all-components";
import "./index.css";
import logger from "./lib/log";

function loadScene(path: string, container: HTMLElement) {
  axios
    .get(path)
    .then(response => {
      logger.info("Attaching editor scene");
      const scene = response.data;
      container.innerHTML = scene;
    })
    .catch(error => {
      logger.error(`Couldn't load scene: ${path}`);
    });
}

const editorDiv = document.getElementById("editor");
if (editorDiv) {
  logger.info("Loading editor scene");
  //loadScene("./scenes/editor.html", editorDiv);
} else {
  logger.error("Couldn't find editor div");
}

ReactDOM.render(<App />, document.getElementById("overlay") as HTMLElement);

import aframe from "aframe";
import "aframe-state-component";
import draw from "aframe-draw-component";
import "aframe-htmltexture-component";
import logger from "../lib/log";

aframe.registerComponent("draw", draw.component);

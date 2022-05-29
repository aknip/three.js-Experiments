import {
  sRGBEncoding,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "./third_party/three.module.js";
import { OrbitControls } from "./third_party/OrbitControls.js";

const renderer = new WebGLRenderer({
  antialias: true,
  preserveDrawingBuffer: true,
  powerPreference: "high-performance",
});

document.body.append(renderer.domElement);
renderer.outputEncoding = sRGBEncoding;
renderer.setPixelRatio(window.devicePixelRatio);

const scene = new Scene();
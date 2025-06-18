import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Ma from "./Ma/Ma.js";
import Laranja from "./Laranja/Laranja.js";
import Cesta from "./Cesta/Cesta.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Ma: new Ma({
    x: -33,
    y: -40,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 65,
    visible: true,
    layerOrder: 1,
  }),
  Laranja: new Laranja({
    x: 216,
    y: -145,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2,
  }),
  Cesta: new Cesta({
    x: 38,
    y: -138,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 110.00000000000001,
    visible: true,
    layerOrder: 3,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;

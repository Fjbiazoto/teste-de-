import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Colhedeira from "./Colhedeira/Colhedeira.js";
import PngtreeWheatVectorPngImage7887226 from "./PngtreeWheatVectorPngImage7887226/PngtreeWheatVectorPngImage7887226.js";
import Milho from "./Milho/Milho.js";
import Milho2 from "./Milho2/Milho2.js";
import Button1 from "./Button1/Button1.js";
import Caminhao from "./Caminhao/Caminhao.js";
import Carro from "./Carro/Carro.js";
import Carro2 from "./Carro2/Carro2.js";
import Carro3 from "./Carro3/Carro3.js";
import Carro4 from "./Carro4/Carro4.js";
import Combustivel from "./Combustivel/Combustivel.js";

const stage = new Stage({ costumeNumber: 4 });

const sprites = {
  Colhedeira: new Colhedeira({
    x: -184,
    y: -67,
    direction: 90.80596010292362,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 5,
  }),
  PngtreeWheatVectorPngImage7887226: new PngtreeWheatVectorPngImage7887226({
    x: -220,
    y: -174,
    direction: -90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 20,
    visible: false,
    layerOrder: 2,
  }),
  Milho: new Milho({
    x: 184,
    y: 174,
    direction: 60,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 20,
    visible: false,
    layerOrder: 4,
  }),
  Milho2: new Milho2({
    x: 40,
    y: -27,
    direction: 60,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 3,
  }),
  Button1: new Button1({
    x: -162,
    y: -112,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 6.024096385542169,
    visible: true,
    layerOrder: 6,
  }),
  Caminhao: new Caminhao({
    x: -138,
    y: -123,
    direction: -0.5085334270693949,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 7,
  }),
  Carro: new Carro({
    x: 51,
    y: -15,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 11,
  }),
  Carro2: new Carro2({
    x: -54,
    y: -15,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 10,
  }),
  Carro3: new Carro3({
    x: -24,
    y: -15,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 9,
  }),
  Carro4: new Carro4({
    x: 237,
    y: -15,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 8,
  }),
  Combustivel: new Combustivel({
    x: -157,
    y: 4,
    direction: 15,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 20,
    visible: false,
    layerOrder: 1,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;

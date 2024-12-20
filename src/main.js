import { resources } from './Resource';
import { Sprite } from './Sprite';
import './style.css'
import { Vector2 } from './Vector2';

const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");
const stepSize = 16;

const skySprite = new Sprite({
  resource: resources.images.sky,
  frameSize: new Vector2(320, 180)
});


const groundSprite = new Sprite({
  resource: resources.images.ground,
  frameSize: new Vector2(320, 180)
});
  
const hero = new Sprite({
  resource: resources.images.hero,
  frameSize: new Vector2(32, 32),
  hFrames: 3,
  vFrames: 8,
  frame: 1
});

const shadow = new Sprite({
  resource: resources.images.shadow,
  frameSize: new Vector2(32, 32)
})

const heroPos = new Vector2(stepSize * 6, stepSize * 6);
const heroOffset = new Vector2(-8, -21);

const draw = () => {

  console.log("DRAW SKY");
  skySprite.drawImage(ctx, 0, 0);
  console.log("SKY COMPLETED");


  console.log("DRAW GROUND");
  groundSprite.drawImage(ctx, 0, 0);
  console.log("GROUND COMPLETED");

  console.log("DRAW PLAYER");
  
  const heroPosX = heroPos.x + heroOffset.x;
  const heroPosY = heroPos.y + heroOffset.y;



  shadow.drawImage(ctx, heroPosX, heroPosY);
  hero.drawImage(ctx, heroPosX, heroPosY);
  //hero.frame++; 
  console.log("PLAYER COMPLETED");
}

setInterval(() => {
  console.log("Draw");
  draw();
}, 300);
console.log("1.0");
//game variables
const gameOverSound = new Audio("../assets/sounds/gameover.mp3");
const music = new Audio("../assets/sounds/music.mp3");
      music.loop = true;
      music.volume = 0.5;
const debugModeIsOn = true;
const startKey = "s";
const restartKey = "r";
const hitboxColor = "#00FF02";
const destructionXPosition = -1000;
const spawnXPosition = canvas.width * 1.2
let gameState = "menu"; // menu, action or gameover


console.log("2.0");
// bird variables
const birdImage = new Image(90, 90);
      birdImage.src = "../assets/images/bird.png";
const birdStartYPosition = 250;
const birdStartYSpeed = 0;
const birdStartYAccelleration = 0;
const birdBeginningYAccelleration = 0.7;
const birdXPosition = 250;
const birdHitboxRadius = 30;
const birdFlapSound = new Audio("../assets/sounds/flap.wav");
let birdFlapForce = -12;
const birdFlapKey = " ";
let birdYSpeed = birdStartYSpeed;
let birdYAccelleration = birdStartYAccelleration;
let birdYPosition = birdStartYPosition;
let birdCanFlap = false;
let isimmune = false;
let timeimmune = 0;

console.log("3.0");
// score variables
const scoreImage = new Image(60, 60);
      scoreImage.src = "../assets/images/coin.png";
const scoreImageXPosition = 70;
const scoreImageYPosition = 70;
const scoreTextXPosition = 100;
const scoreTextYPosition = 90;
const scoreTextSize = 50;
const scoreTextColor = "yellow";
let scoreValue = 0;


console.log("4.0");
// cloud variables
const cloudImage = new Image(200, 200);
      cloudImage.src = "../assets/images/cloud.png";
let cloudSpawnInterval = 10000; // milliseconds
const cloudXSpeed = -.7;
let cloudTimeSinceLastSpawn = 0; // milliseconds
let clouds = [
    {
        xPosition: canvas.width,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width -500,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width-1000,
        yPosition: randomBetween(0, canvas.height/2), 
    },
];

console.log("5.0");
// fireball variables
const fireballImage = new Image(350, 350);
      fireballImage.src = "../assets/images/fireball.png";
const fireballXSpeed = -10;
const fireballHitboxRadius = 100;
const fireballSpawnInterval = 2000;
let fireballTimeSinceLastSpawn = fireballSpawnInterval;
let fireballs = [];

console.log("6.0");
// coin variables
const coinSound = new Audio("../assets/sounds/coin.wav");
const coinImage = scoreImage;
const coinHitboxRadius = 30;
const coinXSpeed = -5;
const coinSpawnInterval = 1000;
const coinValue = 1;
let coinTimeSinceLastSpawn = coinSpawnInterval
let coins = [];

console.log("7.0");
//treasure variables
const treasureSound = coinSound;
const treasureImage = new Image (60, 60);    
      treasureImage.src = "../assets/images/treasure.png";
const treasureHitboxRadius = 30;
const treasureXSpeed = -5;
const treasureSpawnInterval = 5000;
const treasureValue = 10;
let treasureTimeSinceLastSpawn=treasureSpawnInterval
let treasures = [];

console.log("8.0");
// menu text variables
const menuFirstText = "Press " + startKey + " to start";
const menuTextXPosition = 300;
const menuTextYPosition = 400; 
const menuSecondText = "Press space to flap wings";
const menuTextSize = 60;
const menuTextColor = "yellow";
const gameOverText = "NICE SCORE!!! Press " + restartKey + " to restart";

// immune timer variables
const isimmuneTextXPosition = 800;
const isimmuneTextYPosition = 100;
const isimmuneTextSize = 50;
const isimmuneTextColor = "red";
const isimmuneText = "Time Left: "


console.log("9.0");
//powerup variables
const powerupSound = coinSound;
const powerupImage = new Image (60, 60);
      powerupImage.src = "../assets/images/powerup.png";
const powerupHitboxRadius = 30;
const powerupXSpeed = -5;
const powerupSpawnInterval = 5000;
const powerupValue = 10;
let powerupTimeSinceLastSpawn=powerupSpawnInterval
let powerups = [];

//Highscore
highscores=[]
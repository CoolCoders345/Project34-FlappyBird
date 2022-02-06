var bg, bgImg
var fg, fgImg
var bird, birdImg
var pipe1,pipeNImg
var pipe2, pipeSImg
var pipe1Group, pipe2Group
var PLAY = 1
var END = 0
var gameState = PLAY
var restart,r

function preload(){
bgImg = loadImage("FBBG.png")
birdImg = loadImage("bird.png")
fgImg = loadImage("FlappyBirdFg.png")
pipeNImg = loadImage("pipeN.png")
pipeSImg = loadImage("pipeS.png")
r = loadImage("Restart.png")
}

function setup() {
 createCanvas(288,512)
 bg = createSprite(144,256,10,10)
 bg.addImage(bgImg)
 fg = createSprite(144,470,20,20)
 fg.visible = true
    bird = createSprite(25,256,20,20)
    bird.addImage(birdImg)
    bird.scale = 0.1
    pipe1Group = new Group()
    pipe2Group = new Group()

    score = 0
    restart = createSprite(144,256,10,10)
    restart.addImage(r)
    restart.visible = false
    restart.scale = 0.4
}

function draw() {
 background(0,201,157)
if (gameState ===PLAY){
    fg.velocityX = -1 
    if(fg.x<137){
        fg.x = fg.width/2
    }
    if(keyDown("space")){
        bird.y = bird.y-15
    }
    else{
        bird.velocityY = 5
    }
    
    pipe_move()
    
    if(frameCount%75===0){
        score++
    }

    if(bird.isTouching(pipe1Group)||bird.isTouching(pipe2Group)){
        gameState= END
    }

    if(bird.isTouching(fg)){
        gameState = END
    }
}
  

 drawSprites()

 textSize(30)
    text("Score: "+score,170,500)
}

function pipe_move(){
    if(frameCount%75===0){
        pipe1 = createSprite(144,0,10,10)
        pipe1.addImage(pipeNImg)
        pipe1.y = random(0,50)
        pipe1.velocityX = -2
        pipe1Group.add(pipe1)
        pipe1Group.setLifetimeEach(144)
        
        pipe2 = createSprite(144,512,10,10)
        pipe2.addImage(pipeSImg)
        pipe2.scale = 0.6
        pipe2.y = random(462,512)
        pipe2.velocityX = -2
        pipe2Group.add(pipe2)
        pipe2Group.setLifetimeEach(144)
        
    }

}
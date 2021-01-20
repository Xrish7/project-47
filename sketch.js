gameState="home"

function preload(){
    homeScreen = loadImage("Home page/ps bg home screen.jpg");
    screen2=loadImage("planting game bg/starting bg.jpg");
    screen3=loadImage("planting game bg/wet soil bg.jpg");
    waterButton=loadImage("buttons/water button.png");
    stopButton = loadImage("buttons/stop watering button.jpg");
    playButton = loadImage("Home page/play_button.png")
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    screen3Page = createSprite(width/2,height/2,width,height);
    screen3Page.addImage(screen3);
    screen3Page.scale = 4;

    screen2Page = createSprite(width/2,height/2,width,height);
    screen2Page.addImage(screen2);
    screen2Page.scale =4;

    homePage = createSprite(width/2,height/2,width,height);
    homePage.addImage(homeScreen);
    homePage.scale = 4
    //play button on homescreen
    play=createSprite(width/2, height/2);
    play.addImage(playButton);
    //watering the land
    water=createSprite(200,60,40,40);
    water.addImage(waterButton)
    water.scale = 0.5

    stopWater=createSprite(200,180,40,40);
    stopWater.addImage(stopButton)
    stopWater.scale = 0.5
        //crop1=createSprite(50,50,20,20);
        //crop1.visible=false;
    water.visible=false;
    stopWater.visible=false;
}
function draw(){
    background(0);

    if (mousePressedOver(play) && gameState==="home"){
        homePage.visible=false;
        play.visible=false;
        gameState="drySoil";
        stopWater.visible=true;
        water.visible=true;
    }
    

    // if (mousePressedOver(crop) && gameState==="drySoil"){
    //     console.log("crop");
    //     crop1.visible=true;
    // }

    drawSprites();
    
    if (mousePressedOver(water) && gameState==="drySoil"){
        gameState="water";
       
        //return false;
        //gameState="wetfarm";
    }
    if(gameState=="water"){
        for(var i=400; i<1600; i=i+200){
            stroke("#80C9E7");
            strokeWeight(20);
            console.log("line")
            line(i,100,i,600);
           
        }
        for(var i=100; i<650; i=i+100){
            stroke("#80C9E7");
            strokeWeight(20);
            console.log("line")
            line(200,i,1600,i);
           
        }
    }
    if (mousePressedOver(stopWater) && gameState==="water"){
        gameState="stopW";
    }
    if(gameState =="stopW" ){
        screen2Page.visible = false;
        
    }

    textSize(30);
    text(mouseX+","+mouseY,mouseX,mouseY);
}
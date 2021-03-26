var canvas;
var music;
var edges;
var surface1, surface2, surface3, surface4, surface5, rect;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(70,500,150,15);
    surface1.shapeColor = 'red';

    surface2 = createSprite(230,500,150,15);
    surface2.shapeColor = 'blue';

    surface3 = createSprite(390,500,150,15);
    surface3.shapeColor = 'yellow';

    surface4 = createSprite(550,500,150,15);
    surface4.shapeColor = 'orange';

    surface5 = createSprite(710,500,150,15);
    surface5.shapeColor = 'green';

    //create box sprite and give velocity
    rect = createSprite(random(20,750),200,25,25);
    rect.shapeColor = 'white';
    rect.velocityY = 5;
    rect.velocityX = 5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edges = createEdgeSprites();
    rect.bounceOff(edges);
    //rect.bounceOff(surface1);
    //rect.bounceOff(surface2);
    //rect.bounceOff(surface3);
    //rect.bounceOff(surface4);
    //rect.bounceOff(surface5);

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(rect) && rect.bounceOff(surface1)){
        rect.shapeColor = 'red';
    }

    if(surface2.isTouching(rect) && rect.bounceOff(surface2)){
        rect.shapeColor = 'blue';
    }

    if(surface3.isTouching(rect) && rect.bounceOff(surface3)){
        rect.shapeColor = 'yellow';
        rect.setVelocity(0,0);
    }

    if(surface4.isTouching(rect) && rect.bounceOff(surface4)){
        rect.shapeColor = 'orange';
    }

    if(surface5.isTouching(rect) && rect.bounceOff(surface5)){
        rect.shapeColor = 'green';
    }

    drawSprites();
}

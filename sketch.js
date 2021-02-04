var batman,thunderstorm

function preload(){
    bi=loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png")
    th=loadAnimation("images//thunderbolt/1.png","images//thunderbolt/2.png","images//thunderbolt/3.png","images//thunderbolt/4.png")

}

function setup(){
   createCanvas(1500,800);
    batman=createSprite(750,450)
    batman.addAnimation("batman",bi)
    thunder=createSprite(750,100)
    thunder.addAnimation("thunder",th)
}

function draw(){
    background('black')
    
    
    
    
    
    
    drawSprites();
}   


function preload()
{
    HarryPotter = loadSound("music.mp3");
    PeterPan = loadSound("music2.mp3");
}

function setup()
{
    Canvas = createCanvas(550,550);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.hide();
}

function draw()
{
    image(Video,0,0,550,550);
}
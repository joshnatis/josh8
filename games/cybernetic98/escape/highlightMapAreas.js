//CODE WRITTEN BY enhzflep on STACK OVERFLOW, WITH horrendous MODIFICATIONS BY ME (josh)
//https://stackoverflow.com/questions/12661124/how-to-apply-hovering-on-html-area-tag

// stores the device context of the canvas we use to draw the outlines
// initialized in myInit, used in myHover and myLeave
var hdc;

// shorthand func
function byId(e){return document.getElementById(e);}

function randomColor() 
{
    var colors = ["#ff0000", "#ffa500","#ffff00","#008000", "#0000ff", "#4b0082", "#ee82ee"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function displayTooltip(title, coordStr, n)
{
    if(title == "") //don't display tooltip if no title
        return;

    if (typeof coordStr === 'undefined')
        return;

    var mCoords = coordStr.split(',');

    let img = document.getElementById("choices");
    var x,y, w,h;
    x = img.offsetLeft;
    y = img.offsetTop;
    w = img.clientWidth;
    h = img.clientHeight;

    /*
    for the love of god, don't ask me how i got these numbers. this is terrifying lmfao
    it kind of makes sense, but like no. basically w/3 because the image is split into 3 scenes
    n refers to which image is being hovered over (first, second, third)
    and the rest is hardcoded nonsense :D
    */

    hdc.globalAlpha = 1.0; //turn off transparency
    hdc.fillStyle = 'white';
    hdc.fillRect((((n-1) * w)/3)+10, h*(35/40), (title.length*10), 30); //rectangle

    hdc.lineWidth = 4;
    hdc.fillStyle = 'black';
    hdc.strokeRect((((n-1) * w)/3)+10, h*(35/40), (title.length*10), 30); //rectangle outline

    hdc.font = "15px Georgia";
    hdc.fillText(title, ((((n-1) * w)/3)+15), h*(35/40)+20); //text
}

function drawRect(coOrdStr)
{
    if (typeof coOrdStr === 'undefined')
        return;

    hdc.lineWidth = 10;
    hdc.globalAlpha = 0.7;

    var mCoords = coOrdStr.split(',');
    var top, left, bot, right;
    left = mCoords[0];
    top = mCoords[1];
    right = mCoords[2];
    bot = mCoords[3];
    hdc.strokeRect(left,top,right-left,bot-top); 
}

function myHover(element, n)
{
    if (typeof element === 'undefined')
        return;

    var hoveredElement = element;
    var coordStr = element.getAttribute('coords');
    var areaType = element.getAttribute('shape');

    var title = element.getAttribute('title');
    displayTooltip(title, coordStr, n);

    switch (areaType)
    {
        case 'polygon':
        case 'poly':
            break;

        case 'rect':
            drawRect(coordStr);
    }
}

function myLeave()
{
    var canvas = byId('myCanvas');
    hdc.clearRect(0, 0, canvas.width, canvas.height);
}

function myInit()
{
    // get the target image
    var img = byId("choices");

    var x,y, w,h;

    // get it's position and width+height
    x = img.offsetLeft;
    y = img.offsetTop;
    w = img.clientWidth;
    h = img.clientHeight;

    // move the canvas, so it's contained by the same parent as the image
    var imgParent = img.parentNode;
    var can = byId('myCanvas');
    imgParent.appendChild(can);

    can.style.position = "absolute";
    // place the canvas in front of the image
    can.style.zIndex = 1;

    // make same size as the image
    can.setAttribute('width', w+'px');
    can.setAttribute('height', h+'px');

    // position it over the image
    can.style.left = x+'px';
    can.style.marginTop = "1.25%";

    // get it's context
    hdc = can.getContext('2d');

    // set the 'default' values for the colour/width of fill/stroke operations
    hdc.fillStyle = 'blue';
    hdc.strokeStyle = 'black';
    hdc.lineWidth = 10;
}
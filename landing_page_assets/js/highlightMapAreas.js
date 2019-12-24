//CODE WRITTEN BY enhzflep on STACK OVERFLOW, WITH SLIGHT MODIFICATIONS BY ME
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

function displayTooltip(title, coordStr)
{
    if(title == "") //don't display tooltip if no title
        return;

    if (typeof coordStr === 'undefined')
        return;

    var mCoords = coordStr.split(',');

    hdc.globalAlpha = 1.0; //turn off transparency
    hdc.fillStyle = 'white';
    hdc.fillRect(mCoords[0], mCoords[1] - 50, (title.length * 10), 30); //rectangle

    hdc.lineWidth = 4;
    hdc.fillStyle = 'black';
    hdc.strokeRect(mCoords[0], mCoords[1] - 50, (title.length * 10), 30); //rectangle outline

    hdc.font = "15px Georgia";
    hdc.fillText(title, parseInt(mCoords[0]) + 5, mCoords[1] - 30);
}

// takes a string that contains coords eg - "227,307,261,309, 339,354, 328,371, 240,331"
// draws a line from each co-ord pair to the next - assumes starting point needs to be repeated as ending point.
function drawPoly(coOrdStr)
{
    if (typeof coOrdStr === 'undefined')
        return;

    hdc.beginPath();
    hdc.lineWidth = 10;
	hdc.globalAlpha = 0.8;
    hdc.fillStyle = randomColor();

    var mCoords = coOrdStr.split(',');
    var i, n;
    n = mCoords.length;

    hdc.beginPath();
    hdc.moveTo(mCoords[0], mCoords[1]);
    for (i=2; i<n; i+=2)
    {
        hdc.lineTo(mCoords[i], mCoords[i+1]);
    }
    hdc.lineTo(mCoords[0], mCoords[1]);
    hdc.stroke();
    hdc.fill();
}

function drawRect(coOrdStr)
{
    if (typeof coOrdStr === 'undefined')
        return;

    var mCoords = coOrdStr.split(',');
    var top, left, bot, right;
    left = mCoords[0];
    top = mCoords[1];
    right = mCoords[2];
    bot = mCoords[3];
    hdc.strokeRect(left,top,right-left,bot-top); 
}

function myHover(element)
{
    if (typeof element === 'undefined')
        return;

    var hoveredElement = element;
    var coordStr = element.getAttribute('coords');
    var areaType = element.getAttribute('shape');

    var title = element.getAttribute('title');
    displayTooltip(title, coordStr)

    switch (areaType)
    {
        case 'polygon':
        case 'poly':
            drawPoly(coordStr);
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
    // const context = canvas.getContext('2d');
    // context.clearRect(0, 0, canvas.width, canvas.height);
    // canvas.width = canvas.width;

    // get the target image
    var img = byId("bookshelf");

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

    // place the canvas in front of the image
    can.style.zIndex = 1;

    // position it over the image
    can.style.left = x+'px';
    can.style.top = y+'px';

    // make same size as the image
    can.setAttribute('width', w+'px');
    can.setAttribute('height', h+'px');

    // get it's context
    hdc = can.getContext('2d');

    // set the 'default' values for the colour/width of fill/stroke operations
    hdc.fillStyle = 'blue';
    hdc.strokeStyle = 'black';
    hdc.lineWidth = 10;
}
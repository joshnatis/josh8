let drawing = false;
let focused = false;

let canvas;
let ctx;

let currx, curry = 0;
let prevx, prevy = 0;

let line_width = 1;
let line_color="#000000"

function init()
{
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext("2d");

	canvas.addEventListener("mousemove", function (e) {
		if(drawing && focused && e.button == 0)
		{
			prevx = currx;
			prevy = curry;
			findCursor(e.clientX, e.clientY);
			draw();
		}
	}, false);
	
	canvas.addEventListener("mousedown", function (e) {
		if(e.button == 0 && focused)
		{
			drawing = true;
			findCursor(e.clientX, e.clientY);
			//bucket();
			prevx = currx;
			prevy = curry;
			draw();
		}
	}, false);

	canvas.addEventListener("mouseup", function (e) {
		drawing = false;
	}, false);

	canvas.addEventListener("mouseout", function (e) {
		focused = false;
	}, false);

	canvas.addEventListener("mouseover", function (e) {
		focused = true;
	}, false);

	let dl_btn = document.getElementById('dl_btn');
	dl_btn.addEventListener('click', function (e) {
    	dl_btn.href = canvas.toDataURL('image/jpg');
	});

	// let upl_btn = document.getElementById('img_upload_input');
	// upl_btn.addEventListener("change", displayUploadedImage, false);

	let title = document.getElementById("line_width_title");
	let slider = document.getElementById("line_width_slider");

	slider.oninput = function() {
		line_width = this.value;
  		title.innerHTML = "Line Width: " + line_width + "px";
  	}

  	let color_picker_title = document.getElementById("color_picker_title");
	let color_picker = document.getElementById("line_color");

	color_picker.oninput = function() {
		line_color = this.value;
  		color_picker_title.innerHTML = "Color: " + this.value;
  	}

	fix_dpi();

	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function findCursor(x, y)
{
	let rect = canvas.getBoundingClientRect();
	let scaleX = canvas.width / rect.width;
	let scaleY = canvas.height / rect.height;

    currx = (x - rect.left) * scaleX;  // scale mouse coordinates after they have
    curry = (y - rect.top) * scaleY;     // been adjusted to be relative to element
}

function draw()
{
	ctx.beginPath();
	ctx.moveTo(prevx, prevy);
	ctx.lineTo(currx, curry);
	ctx.lineJoin = "round";
	ctx.lineCap = "round";
	ctx.lineWidth = line_width;
	ctx.closePath();
	ctx.strokeStyle = line_color;
	ctx.stroke();
}

function reset()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}


function fix_dpi()
{
	let dpi = window.devicePixelRatio;
	//get CSS height
	//the + prefix casts it to an integer
	//the slice method gets rid of "px"
	let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
	//get CSS width
	let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
	//scale the canvas
	canvas.setAttribute('height', style_height * dpi);
	canvas.setAttribute('width', style_width * dpi);
}

// function displayUploadedImage() {
// 	let selectedFile = document.getElementById('img_upload_input').files[0];

// 	let img = new Image();
// 	img.src = URL.createObjectURL(selectedFile);
// 	//alert((canvas.width/2) + " " + img.width + "px");
// 	//img.width = (canvas.width/2) % img.width + "px";
// 	//img.height = (canvas.height/2) % img.height + "px";
// 	img.onload = function() {
// 		// let w = (img.width % (canvas.width/2));
// 		// let h = (img.height % (canvas.height/2));
// 		let w = (canvas.width/2) % img.width;
// 		let h = (canvas.height/2) % img.height;
// 		//img.width="10";
//     	ctx.drawImage(img, 0, 0, w, h);
// 	}
// }

// function bucket()
// {
// 	let img = (ctx.getImageData(0, 0, canvas.width, canvas.height)).data;
	
// 	alert(img[0] + "\t" + img[1] + "\t" + img[2];

		//for each pixel recursively look for pixel next to it with same color, add to array
		//once it is false, stop
		//loop through array chanigng all pixel vals



	//let index = (curry * img.width + currx) * 4;

	// let r = img[index]
	// let g = img[index + 1]
	// let b = img[index + 2]
	// let a = img[index + 3]
	/*
var ctx = canvas.getContext('2d');
ctx.fillStyle = '#f00';
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(100,50);
ctx.lineTo(50, 100);
ctx.lineTo(0, 90);
ctx.closePath();
ctx.fill();
	*/
//}
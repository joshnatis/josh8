let paste = false;

function upload() {
	document.getElementById("upload-button").addEventListener("change", displayUploadedImage, false);
	document.getElementById('upload-button').click();
}

function displayUploadedImage(file) {
	let selectedFile;

	if(!paste)
		selectedFile = document.getElementById('upload-button').files[0];
	else
	{
		selectedFile = file;
		paste = false;
	}

	let img = document.getElementById("user-image");
	img.src = URL.createObjectURL(selectedFile);
	img.style.display = "block";

	document.getElementById("upload-image-placeholder").style.display = "none";
	
	let img_holder = document.getElementById("image-holder");
	img_holder.style.display = "block";

	let canvas = document.getElementById("user-image-overlay");

	img.onload = function() {
		document.getElementById("filter-holder").style.display = "block";
		document.getElementById("dl-btn").style.display = "inline-block";
		document.getElementById("ul-btn").style.display = "inline-block";
		document.getElementById("reset-btn").style.display = "inline-block";

		canvas.style.left = img.getBoundingClientRect().left + "px";
		canvas.style.height = img.clientHeight + "px";
		canvas.style.width = img.clientWidth + "px";
		fix_dpi(canvas);
		var ctx = canvas.getContext("2d");
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

		img.style.visibility="hidden";

		let dl_btn = document.getElementById('dl-btn');
		dl_btn.addEventListener('click', function (e) {
    		dl_btn.href = canvas.toDataURL('image/jpg');
		});

		activateFilters();
	};

	document.getElementById("top-text").addEventListener('input', function (evt) {
		createText2();
	});

	document.getElementById("bottom-text").addEventListener('input', function (evt) {
		createText2();
	});
}

function fix_dpi(canvas) {
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

	return canvas;
}

function createText2() {
	let canvas = document.getElementById("user-image-overlay");
	fix_dpi(canvas);

	var ctx = canvas.getContext("2d");
	ctx.textAlign = 'center';

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	let img = document.getElementById("user-image");
	ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

	let fontsize = Math.floor((canvas.width + canvas.height) / 18);
	ctx.font = fontsize + "px Impact, Anton, sans-serif";
	ctx.fillStyle = 'white';

	if(window.innerWidth < 800)
		ctx.lineWidth = 5;
	else
		ctx.lineWidth = 2;

	let toptext = getWrapped(ctx, document.getElementById("top-text").value, canvas.width);
	let bottomtext = getWrapped(ctx, document.getElementById("bottom-text").value, canvas.width);

	let lines = toptext.split('\n');

	for (var i = 0; i<lines.length; i++)
	{
		ctx.fillText(lines[i], canvas.width/2, fontsize + (i * fontsize));
		ctx.strokeText(lines[i], canvas.width/2, fontsize + (i * fontsize));
	}

	lines = bottomtext.split('\n');

	for (var i = 0; i<lines.length; i++)
	{
		ctx.fillText(lines[lines.length - 1 - i], canvas.width/2, canvas.height - fontsize/3 - (i * fontsize));
		ctx.strokeText(lines[lines.length - 1 - i], canvas.width/2, canvas.height - fontsize/3 - (i * fontsize));
	}
}

//todo; \n doesn't reset width, account for that
function getWrapped(ctx, text, maxWidth) {
	var words = text.split(" ");
	var lines = [];
	var currentLine = words[0];

	for (var i = 1; i < words.length; i++) {
		var word = words[i];

		var width = ctx.measureText(currentLine + " " + word).width;

		if (width < maxWidth) {
			currentLine += " " + word;
		}
		else {
			lines.push(currentLine);
			currentLine = word;
		}
	}
	lines.push(currentLine);

	let wrapped = "";
	for(var i = 0; i < lines.length; i++)
	{
		if(i > 0) wrapped += "\n";
		wrapped += lines[i];
	}

	return wrapped;
}

window.addEventListener("paste", async function(e) {
	for(let i = 0; i < e.clipboardData.items.length; ++i)
	{
		if(e.clipboardData.items[i].type.indexOf("image") === 0)
		{
			e.preventDefault();
			e.stopPropagation();

			paste = true;
			let file = e.clipboardData.items[i].getAsFile();
			displayUploadedImage(file);
			break;
		}
	}
});

function dragondrop()
{
	let dropArea = document.getElementById("upload-image-placeholder");

	['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
		dropArea.addEventListener(eventName, 
			function(eventName) { eventName.preventDefault(); eventName.stopPropagation(); }
			, false)
	});

	['dragenter', 'dragover'].forEach(eventName => {
		dropArea.addEventListener(eventName, highlight, false)
	});

	['dragleave', 'drop'].forEach(eventName => {
		dropArea.addEventListener(eventName, unhighlight, false)
	});

	function highlight(e) {
		dropArea.style.border = "2px dashed purple";
	}

	function unhighlight(e) {
		dropArea.style.border = "2px dashed grey";
	}

	dropArea.addEventListener('drop', handleFiles, false)

	function handleFiles(e) {
		let dt = e.dataTransfer;
		let files = dt.files;

		for(let i = 0; i < files.length; ++i)
		{
			if(files[i].type.indexOf("image") === 0)
			{
				paste = true;
				displayUploadedImage(files[i]);
				break;
			}
		}
	}
}

function reset()
{
	Caman('#user-image-overlay', function() {
		this.revert();
	}); 

	let sliders = document.querySelectorAll(".slider");
	let titles = document.querySelectorAll(".slider_title");
	for (let i = 0; i < sliders.length; i++) {
		sliders[i].value="0";
		let txt = titles[i].innerHTML;
		titles[i].innerHTML = txt.substring(0, txt.indexOf("(") + 1) + "0)";
	}
	toggleTextareas(true);
	createText2();
}

function activateFilters() {
	let titles = document.querySelectorAll(".slider_title");
	let sliders = document.querySelectorAll(".slider");
	for (let i = 0; i < titles.length; i++) {
    	titles[i].style.display="inline-block";
    	sliders[i].style.display="inline-block";
	}

	let img = document.getElementById("user-image");

	if(window.innerWidth < 800)
		document.getElementById("main").style.height = (img.clientHeight/16 + 40) + "em";

	document.getElementById("user-image-overlay").setAttribute("data-caman-hidpi-disabled", "true");

	activateFilter("brightness");
	activateFilter("saturation");
	activateFilter("sharpen");
	activateFilter("contrast");
	activateFilter("noise");
}

function activateFilter(filter_type) {
	let title = document.getElementById(filter_type + "_title");
	let slider = document.getElementById(filter_type + "_slider");

	slider.onchange = function() {
		toggleTextareas(false);
		let val = this.value;
  		title.innerHTML =  filter_type + "(" + val + ")";
  		Caman("#user-image-overlay", function () {
  			this.reloadCanvasData();
  			
  			switch(filter_type) {
  				case "brightness": this.brightness(val).render(); break;
  				case "saturation": this.saturation(val).render(); break;
  				case "sharpen": this.sharpen(val).render(); break;
  				case "contrast": this.contrast(val).render(); break;
  				case "noise": this.noise(val).render(); break;
  			}
		});
  	}
}

function disableSliders() {
	let sliders = document.querySelectorAll(".slider")
	for(let i = 0; i < sliders.length; ++i)
	{
		sliders[i].disabled = true;
	}
}

function toggleTextareas(state) {
	let textareas = document.querySelectorAll("textarea")
	for(let i = 0; i < textareas.length; ++i)
	{
		textareas[i].disabled = !state;
	}
}
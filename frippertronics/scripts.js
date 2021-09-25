if(!window.AudioContext) {
	let shim = document.createElement("script");
	shim.src = "assets/web-audio-api-shim.min.js";
	document.body.appendChild(shim);
}

let audioContext;
let pitchSupported;

let playing = false;
let demo = false;

/*_____   ____  __  __ 
 |  __ \ / __ \|  \/  |
 | |  | | |  | | \  / |
 | |  | | |  | | |\/| |
 | |__| | |__| | |  | |
 |_____/ \____/|_|  |_|*/          
let upload_btn;
let upload_box;
let play_btn;
let pitch_slider, phase_slider, start_slider, loop_slider;
let loop_checkbox;
/* -------------------- */

document.body.onload = function() {
	upload_box = document.getElementById("upload-space");
	upload_btn = document.getElementById("upload_btn");
	upload_btn.addEventListener("change", onAudioUpload);

	upload_box.onclick = function() {
		upload_btn.click();
	}

	play_btn      = document.getElementById("play_btn");
	pitch_slider  = document.getElementById("pitch_slider");
	phase_slider  = document.getElementById("phase_slider");
	start_slider  = document.getElementById("start_slider");
	loop_slider   = document.getElementById("loop_slider");
	loop_checkbox = document.getElementById("loop_checkbox");

	pitchSupported = ("detune" in new AudioContext().createBufferSource());
	if(!pitchSupported) /* hide pitch slider */
	{
		pitch_slider.style.display = "none";
		let ctrls = pitch_slider.parentNode;
		ctrls.querySelector("span").style.display = "none";
		ctrls.querySelector("br").remove();
		phase_slider.style.verticalAlign = "middle";
	}

	enableSampleButtons();
}

function onAudioUpload(e) {
	let file = upload_btn.files[0];
	clearUploadBox(file.name);

	let reader = new FileReader();
	reader.onload = async function() {
		let arrayBuffer = this.result;

		play_btn.onclick = function() {
			/* making a copy with .slice() is necessary for later re-use */
			play(arrayBuffer.slice(0));
		}
	}
	reader.readAsArrayBuffer(file);
}

async function play(arrayBuffer) {
	if(!playing) {
		audioContext = new AudioContext();
		loopAudio(arrayBuffer);
		playing = true;
		play_btn.textContent = "STOP";
	}
	else {
		audioContext.close();
		playing = false;
		play_btn.textContent = "PLAY";
	}
}

async function loopAudio(arrayBuffer)
{
	audioContext.decodeAudioData(arrayBuffer)
	.then(audioBuffer => {
		let pitch  = pitch_slider.value;
		let phase  = phase_slider.value;

		let loop = loop_checkbox.checked;

		let start = parseFloat(start_slider.value) * audioBuffer.duration;
		let proposed_stop = start + parseFloat(loop_slider.value);
		let stop;
		if(proposed_stop > stop || !loop) stop = audioBuffer.duration;
		else                              stop = proposed_stop;

		startLoop(audioBuffer,  1,  1,    start, stop, loop, pitch);
		startLoop(audioBuffer, -1, phase, start, stop, loop, pitch);
	})
}

function startLoop(audioBuffer, pan, rate, start, stop, loop, pitch) {
	let sourceNode = audioContext.createBufferSource();
	let pannerNode = audioContext.createStereoPanner();

	sourceNode.buffer = audioBuffer;
	sourceNode.loop = loop;
	sourceNode.loopStart = start;
	sourceNode.loopEnd = stop;
	sourceNode.playbackRate.value = rate;
	if(pitchSupported)
		sourceNode.detune.value = pitch;

	pannerNode.pan.value = pan;

	sourceNode.connect(pannerNode);
	sourceNode.connect(audioContext.destination);

	sourceNode.start(0, start);
}

function clearUploadBox(filename) {
	let p = upload_box.querySelector("p");
	p.textContent = filename;
	upload_box.id = "";
	upload_box.className = "controls-space";
	upload_box.style.fontWeight = "bold";

	play_btn.style.transition = "transform 0.5s";

	setTimeout(function() {
		play_btn.style.transform = "rotate(7deg)";
	}, 500);
	setTimeout(function() {
		play_btn.style.transform = "rotate(0deg)";
	}, 1000);
}

function enableSampleButtons() {
	let sample_btn1 = document.getElementById("sample_btn_1");
	let sample_btn2 = document.getElementById("sample_btn_2");
	let sample_btn3 = document.getElementById("sample_btn_3");

	[sample_btn1, sample_btn2, sample_btn3].forEach(sample_btn => {
		let path;
		let applySettings;

		if(sample_btn.id == "sample_btn_1") {
			path = "assets/stafford-cybernetics.mp3";
			applySettings = function() {
				pitch_slider.value = 1;
				phase_slider.value = 1.02109375;
				start_slider.value = 0.293632466814159;
				loop_slider.value  = 2;
				loop_checkbox.checked = true;
			}
		} else if(sample_btn.id == "sample_btn_2") {
			path = "assets/sewerslvt.mp3";
			applySettings = function() {
				pitch_slider.value = 1;
				phase_slider.value = 1.01734652;
				start_slider.value = 0.171935840707965;
				loop_slider.value  = 6.673534290354;
				loop_checkbox.checked = true;
			}
		} else if(sample_btn.id == "sample_btn_3") {
			path = "assets/capoxxo-heartbeat.mp3";
			applySettings = function() {
				pitch_slider.value = 1;
				phase_slider.value = 1.01711144911504;
				start_slider.value = 0.191922013274336;
				loop_checkbox.checked = false;
			}
		}

		sample_btn.onclick = function() {
			fetch(path)
				.then(response => response.arrayBuffer())
				.then(buffer => {
				/* making a copy with .slice() is necessary for later re-use */
					play(buffer.slice(0));
					play_btn.onclick = function() {
						play(buffer.slice(0));
					}
					let name = path.split("/")[1];
					clearUploadBox(name);
					applySettings();
					if(!playing)
						sample_btn.click();
				});
		}
	});
}
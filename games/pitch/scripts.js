let context = new AudioContext();

const NOTES = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const HZ =
{
	'C1': 32.70, 'C#1': 34.65, 'D1': 36.71, 'D#1': 38.89, 'E1': 41.20,
	'F1': 43.65, 'F#1': 46.25, 'G1': 49.00, 'G#1': 59.91, 'A1': 55,
	'A#1': 58.27, 'B1': 61.74, 'C2': 65.41, 'C#2': 69.30, 'D2': 73.42,
	'D#2': 77.78, 'E2': 82.41, 'F2': 87.31, 'F#2': 92.50, 'G2': 98.00,
	'G#2': 103.83, 'A2': 110.00, 'A#2': 116.54, 'B2': 123.47, 'C3': 130.81,
	'C#3': 138.59, 'D3': 146.83, 'D#3': 155.56, 'E3': 164.81, 'F3': 174.61,
	'F#3': 185.00, 'G3': 196.00, 'G#3': 207.65, 'A3': 220.00, 'A#3': 233.08,
	'B3': 246.94, 'C4': 261.63, 'C#4': 277.18, 'D4': 293.66, 'D#4': 311.13,
	'E4': 329.63, 'F4': 349.23, 'F#4': 369.99, 'G4': 392.00, 'G#4': 415.30,
	'A4': 440.00, 'A#4': 466.16, 'B4': 493.88, 'C5': 523.25, 'C#5': 554.37,
	'D5': 587.33, 'D#5': 622.255, 'E5': 659.25, 'F5': 698.46, 'F#5': 739.99,
	'G5': 783.99, 'G#5': 830.69, 'A5':  880.00, 'A#5': 932.33, 'B5':  987.77,
	'C6': 1046.50, 'C#6': 1108.73, 'D6': 1174.66, 'D#6': 1244.51, 'E6': 1318.51,
	'F6': 1396.91, 'F#6': 1479.98, 'G6': 1567.98, 'G#6': 1661.22, 'A6': 1760.00,
	'A#6': 1864.66, 'B6': 1975.53, 'C7': 2093.00, 'C#7': 2217.46, 'D7': 2349.32,
	'D#7': 2489.02, 'E7': 2637.02, 'F7': 2793.83, 'F#7': 2959.96, 'G7': 3135.96,
	'G#7': 3322.44, 'A7': 3520.00, 'A#7': 3729.31, 'B7': 3951.07
};

let CURRENT = 0;

let BG_DEFAULT = 'CornflowerBlue';
let BG_CORRECT = 'lightgreen';
let BG_INCORRECT = 'red';
let BG_NOTE_DEFAULT = 'pink';
let BG_NOTE_SELECTED = 'blue';

let dom_notes;

document.body.onload = function() {
	populate();
	shuffle(NOTES);

	dom_notes = [...document.getElementsByClassName('note')];

	dom_notes.forEach(note => {
		note.onclick = checkanswer;
	});

	let start_btn = document.getElementById('start');
	start_btn.onclick = function() {
		start_btn.remove();
		game();
	}

	let repeat_btn = document.getElementById('repeat');
	repeat_btn.onclick = function() {
		game(true);
	}

	let tutorial_btn = document.getElementById('tutorial');
	tutorial_btn.onclick = tutorial;
}

function checkanswer()
{
	let main = document.getElementById('main');

	let note_played = NOTES[CURRENT];
	let note_clicked = this.innerHTML;

	if(note_played == note_clicked) {
		main.style.backgroundColor = BG_CORRECT;
		delay(500).then(() => {
			main.style.backgroundColor = BG_DEFAULT;
			game();
		});
	} else {
		main.style.backgroundColor = BG_INCORRECT;
		let actual_note = dom_notes.find(n => n.innerHTML == note_played);
		actual_note.style.backgroundColor = BG_NOTE_SELECTED;
		delay(500).then(() => {
			main.style.backgroundColor = BG_DEFAULT;
			actual_note.style.backgroundColor = BG_NOTE_DEFAULT;
			game();
		});
	}
}

function game(replay=false)
{
	if(!replay) CURRENT = (CURRENT+1) % NOTES.length;
	let octave = 3 + Math.floor(Math.random() * 3);
	let voice = createVoice('triangle', 0.5, NOTES[CURRENT] + octave);
	play(voice);
}

function play(voice, duration=3)
{
	voice.start(context.currentTime);
	voice.stop(context.currentTime + duration);
}

function createVoice(wave, gain, pitch)
{
	let vco = context.createOscillator();

	vco.type = wave;
	vco.frequency.value = HZ[pitch];
	console.log(pitch, "(", HZ[pitch], "hz )");
 
	let vca = context.createGain();
	vca.gain.value = gain;
	vca.gain.setTargetAtTime(0, context.currentTime, 1.5);

	vco.connect(vca);
	vca.connect(context.destination);	

	return vco;
}

function populate()
{
	let notes_container = document.getElementById('notes');
	for(let i = 0; i < NOTES.length; ++i) {
		let span = document.createElement('span');
		span.innerHTML = NOTES[i];
		span.className = 'note';
		notes_container.appendChild(span);
	}
}

function tutorial() {
	let notes = document.getElementsByClassName('note');
	let tutscale = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
	for(let i = 0; i < tutscale.length; ++i) {
		delay(500 * i).then(() => {
			let voice = createVoice('triangle', 0.5, tutscale[i] + '4');
			play(voice, 0.5);
			notes[i].style.backgroundColor = BG_NOTE_SELECTED;
		});
	}
	delay(6200).then(() => {
		[...notes].forEach(note => {
			note.style.backgroundColor = BG_NOTE_DEFAULT;
		});
	});
}

/* stack overflow thx */
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function delay(time) {
	return new Promise(resolve => setTimeout(resolve, time));
}

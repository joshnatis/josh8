document.body.onload = function() {
	main();
}

function shuffle(array) {
	let currentIndex = array.length,  randomIndex;

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
	}
	return array;
}

function getcover()
{
	let span = document.createElement("div");
	span.className = "cover";
	span.zIndex = 1;
	return span;
}


function getpic()
{
	let NUM_PICS = 363;
	let n = Math.floor(Math.random() * NUM_PICS);
	let img = document.createElement("img");
	img.src = "images/" + n + ".png";
	img.alt = "pic " + n;
	img.className = "card-img";
	return img;
}

function win()
{
	document.getElementById("win-audio").play();
	let img = document.createElement("img");
	img.src = "confetti.gif";
	img.alt = "confetti";
	img.id = "confetti";
	document.body.appendChild(img);
}

function main()
{
	let match_audio = new Audio("match.mp3");
	let selected_cards = [];
	let found = 0;

	let container = document.body;

	let num_cards = 32;
	let cards = [];
	for(let i = 0; i < num_cards / 2; ++i) {
		let pic = getpic();
		cards.push(pic);
		cards.push(pic.cloneNode());
	}
	shuffle(cards);

	for(let i = 0; i < num_cards; i++) {
		let card = document.createElement("div");
		card.className = "card";

		card.appendChild(cards[i]);
		let cover = getcover();
		card.onclick = function() {
			if(selected_cards.length > 0 && selected_cards[0] == card) {
				return;
			}
			selected_cards.push(card);
			cover.style.opacity = "0%";

			if(selected_cards.length == 2) {
				let pic1 = selected_cards[0].children[0].src;
				let pic2 = selected_cards[1].children[0].src;

				let cover1 = selected_cards[0].children[1];
				let cover2 = selected_cards[1].children[1];

				if(pic1 == pic2) {
					cover1.remove();
					cover2.remove();
					found++;

					if(found == (num_cards / 2)) win();
					else match_audio.play();
				}

				selected_cards = [];
				setTimeout(function()
				{
					cover1.style.opacity = "100%";
					cover2.style.opacity = "100%";
				}, 300);
			}
		}

		card.appendChild(cover);
		container.appendChild(card);
	}
}

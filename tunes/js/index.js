jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        // initialize plyr
        var player = new Plyr('#audio1', {
            controls: [
                'restart',
                'play',
                'progress',
                'current-time',
                'duration',
                'mute',
                'volume'
            ]
        });
        // initialize playlist and controls
        var index = 0,
            playing = false,
            tracks = [{
                "track": 1,
                "name": "私とあなたが結婚した木へ散歩",
                "duration": "0:24",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__tree.mp3?raw=true"
            }, {
                "track": 2,
                "name": "bowls",
                "duration": "0:43",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__bowl.mp3?raw=true"
            }, {
                "track": 3,
                "name": "fkit",
                "duration": "0:56",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__fkit.mp3?raw=true"
            }, {
                "track": 4,
                "name": "space cats",
                "duration": "0:55",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__spacecats.mp3?raw=true"
            }, {
                "track": 5,
                "name": "movement",
                "duration": "0:44",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__movement.mp3?raw=true"
            }, {
                "track": 6,
                "name": "bzper",
                "duration": "0:36",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__bzper.mp3?raw=true"
            }, {
                "track": 7,
                "name": "bwouns",
                "duration": "0:44",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__bwouns.mp3?raw=true"
            }, {
                "track": 8,
                "name": "plum",
                "duration": "1:36",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__plum_1.mp3?raw=true"
            }, {
                "track": 9,
                "name": "spacrowave -30DEFRO",
                "duration": "0:34",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__spacrowav-30DEFRO.mp3?raw=true"
            }, {
                "track": 10,
                "name": "big lenny",
                "duration": "1:58",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__biglenny.mp3?raw=true"
            }, {
                "track": 11,
                "name": "fried_liver_attack",
                "duration": "0:40",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__fried_liver_attack.mp3?raw=true"
            }, {
                "track": 12,
                "name": "f5",
                "duration": "0:30",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__f5.mp3?raw=true"
            }, {
                "track": 13,
                "name": "clark",
                "duration": "1:30",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__clark2.mp3?raw=true"
            },  {
                "track": 14,
                "name": "evenings in rome",
                "duration": "0:54",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__evenings_in_rome.mp3?raw=true"
            }, {
                "track": 15,
                "name": "fffff",
                "duration": "2:03",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__fffff.mp3?raw=true"
            }, {
                "track": 16,
                "name": "grandfather",
                "duration": "1:18",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__grandfather.mp3?raw=true"
            }, {
                "track": 17,
                "name": "sirens on my stoop",
                "duration": "1:50",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__sirens_on_my_stoop.mp3?raw=true"
            }, {
                "track": 18,
                "name": "north",
                "duration": "1:05",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__north.mp3?raw=true"
            }, {
                "track": 19,
                "name": "marc",
                "duration": "0:39",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__marc.mp3?raw=true"
            }, {
                "track": 20,
                "name": "alex",
                "duration": "0:43",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__alex.mp3?raw=true"
            }, {
                "track": 21 ,
                "name": "andata",
                "duration": "1:29",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__andata.mp3?raw=true"
            }, {
                "track": 22,
                "name": "bird days",
                "duration": "2:08",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__bird_days.mp3?raw=true"
            }, {
                "track": 23,
                "name": "coffee beans",
                "duration": "1:08",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__coffee_beans.mp3?raw=true"
            }, {
                "track": 24 ,
                "name": "cart",
                "duration": "0:37",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__cart.mp3?raw=true"
            }, {
                "track": 25 ,
                "name": "joshanova",
                "duration": "0:40",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__joshanova.mp3?raw=true"
            }, {
                "track": 26,
                "name": "synthetics medley",
                "duration": "2:05",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__synthethics_medley.mp3?raw=true"
            }, {
                "track": 27,
                "name": "villas",
                "duration": "1:40",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__villas.mp3?raw=true"
            }, {
                "track": 28,
                "name": "lilypad [demo]",
                "duration": "1:50",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__lilypad_[demo].mp3?raw=true"
            }, {
                "track": 29,
                "name": "pacificitnalta",
                "duration": "1:19",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__pacificitnalta.mp3?raw=true"
            }, {
                "track": 30,
                "name": "lilac",
                "duration": "1:18",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__lilac.mp3?raw=true"
            }, {
                "track": 31,
                "name": "third party inst",
                "duration": "1:09",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__third_party_inst.mp3?raw=true"
            }, {
                "track": 32,
                "name": "powerᵖᵉᵒᵖˡᵉ",
                "duration": "2:12",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__powerpeople.mp3?raw=true"
            }, {
                "track": 33 ,
                "name": "a molten heart",
                "duration": "1:45",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__a_molten_heart.mp3?raw=true"
            }, {
                "track": 34,
                "name": "grasspeaking",
                "duration": "1:55",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__grasspeaking.mp3?raw=true"
            }, {
                "track": 35,
                "name": "love's gonna get you killed",
                "duration": "1:42",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__love's_gonna_get_you_killed_2.mp3?raw=true"
            }, {
                "track": 36 ,
                "name": "i feel lonely without you",
                "duration": "1:12",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__i_feel_lonely_without_you.mp3?raw=true"
            }, {
                "track": 37,
                "name": "all i need",
                "duration": "1:18",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__all_i_need.mp3?raw=true"
            }, {
                "track": 38,
                "name": "ocean of tears",
                "duration": "0:54",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__ocean_of_tears.mp3?raw=true"
            }, {
                "track": 39,
                "name": "we must look like freaks to them",
                "duration": "1:07",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__we_must_look_like_freaks_to_them.mp3?raw=true"
            }, {
                "track": 40,
                "name": "wishful thinking",
                "duration": "2:12",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__wishful_thinking.mp3?raw=true"
            }, {
                "track": 41,
                "name": "47 dandelions",
                "duration": "1:34",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__47_dandelions.mp3?raw=true"
            }, {
                "track": 42,
                "name": "on",
                "duration": "0:43",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__on.mp3?raw=true"
            }, {
                "track": 43,
                "name": "smith9",
                "duration": "1:04",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__smith9_inst.mp3?raw=true"
            }, {
                "track": 44,
                "name": "erth",
                "duration": "1:03",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__erth.mp3?raw=true"
            }, {
                "track": 45,
                "name": "kaa",
                "duration": "0:23",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__kaa.mp3?raw=true"
            }, {
                "track": 46,
                "name": "magnus",
                "duration": "2:04",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__magnus.mp3?raw=true"
            }, {
                "track": 47,
                "name": "часы_тикают",
                "duration": "2:33",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__часы_тикают_2.mp3?raw=true"
            }, {
                "track": 48,
                "name": "ptolemy's curbstard + other assorted pseudointellectual crap",
                "duration": "1:10",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__fantasy4.mp3?raw=true"
            }, {
                "track": 49,
                "name": "posthumous deathmatch",
                "duration": "0:58",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__posthumous_deathmatch_2.mp3?raw=true"
            }, {
                "track": 50,
                "name": "aerobica",
                "duration": "2:05",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__astrobeka2.mp3?raw=true"
            }, {
                "track": 51,
                "name": "ocean train",
                "duration": "0:35",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__ocean_train.mp3?raw=true"
            }, {
                "track": 52,
                "name": "everyday relaxation",
                "duration": "2:21",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__everyday_relaxation.mp3?raw=true"
            }, {
                "track": 53,
                "name": "sethlow swings",
                "duration": "1:22",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__sethlow_swings.mp3?raw=true"
            }, {
                "track": 54,
                "name": "spartans live on mars",
                "duration": "1:20",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__spartans_live_on_mars.mp3?raw=true"
            }, {
                "track": 55,
                "name": "lisp",
                "duration": "0:48",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__lisp.mp3?raw=true"
            }, {
                "track": 56,
                "name": "last breath",
                "duration": "1:40",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__last_breath_v2.mp3?raw=true"
            }, {
                "track": 57,
                "name": "seeds",
                "duration": "2:54",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__seeds_(final).mp3?raw=true"
            }, {
                "track": 58,
                "name": "buusound",
                "duration": "0:07",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__buusound.mp3?raw=true"
            }, {
                "track": 59,
                "name": "tulip",
                "duration": "1:06",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__mari.mp3?raw=true"
            }, {
                "track": 60,
                "name": "mariner's lounge",
                "duration": "0:58",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__mariner_lounge.mp3?raw=true"
            }, {
                "track": 61,
                "name": "rascal",
                "duration": "1:00",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__charl.mp3?raw=true"
            }, {
                "track": 62,
                "name": "short",
                "duration": "0:43",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__short.mp3?raw=true"
            }, {
                "track": 63,
                "name": "86",
                "duration": "0:39",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__86.mp3?raw=true"
            }, {
                "track": 64,
                "name": "batu",
                "duration": "0:56",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__batu.mp3?raw=true"
            }, {
                "track": 65,
                "name": "nm2",
                "duration": "1:08",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__nm2.mp3?raw=true"
            }, {
                "track": 66,
                "name": "back",
                "duration": "0:30",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__back.mp3?raw=true"
            }, {
                "track": 67,
                "name": "alone/in//space",
                "duration": "1:11",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__aloneinspace.mp3?raw=true"
            }, {
                "track": 68,
                "name": "caś",
                "duration": "1:07",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__cas.mp3?raw=true"
            }, {
                "track": 69,
                "name": "deep sea secrets",
                "duration": "1:02",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__deep_sea_secrets.mp3?raw=true"
            }, {
                "track": 70,
                "name": "boeing",
                "duration": "1:54",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__boeing_inst.mp3?raw=true"
            }, {
                "track": 71,
                "name": "panacea staircase",
                "duration": "1:36",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__panacea_staircase_[inst].mp3?raw=true"
            }, {
                "track": 72,
                "name": "kakarot",
                "duration": "0:49",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__kakorot(v2).mp3?raw=true"
            }, {                
                "track": 73,
                "name": "mozart",
                "duration": "0:32",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__mozrt.mp3?raw=true"
            }, {
                "track": 74,
                "name": "sound",
                "duration": "1:05",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__sound.mp3?raw=true"
            }, {
                "track": 75,
                "name": "spaced out",
                "duration": "1:44",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__spaced_out.mp3?raw=true"
            }, {
                "track": 76,
                "name": "SUMOHOUSE Mixed Drink",
                "duration": "0:18",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__SUMOHOUSE_Mixed_Drink.mp3?raw=true"
            }, {
                "track": 77,
                "name": "Agamemnon",
                "duration": "1:48",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__Agamemnon.mp3?raw=true"
            }, {
            	"track": 78,
            	"name": "library holly",
            	"duration": "1:23",
            	"file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__library_holly.mp3?raw=true"
            }, {
            	"track": 79,
            	"name": "metroloop",
            	"duration": "1:00",
            	"file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__metroloop.mp3?raw=true"
            }, {
            	"track": 80,
            	"name": "blue chalk",
            	"duration": "1:24",
            	"file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__blue_chalk.mp3?raw=true"
            }, {
            	"track": 81,
            	"name": "cessaria",
            	"duration": "2:15",
            	"file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__cessaria.mp3?raw=true"
            }, {
            	"track": 82,
            	"name": "nöcht",
            	"duration": "0:33",
            	"file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__nocht.mp3?raw=true"
            }, {
            	"track": 83,
            	"name": "metal cheek",
            	"duration": "1:06",
            	"file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__metalcheek.mp3?raw=true"
            }, {
                "track": 84,
                "name": "qux",
                "duration": "0:32",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__qux.mp3?raw=true"
            }, {
                "track": 85,
                "name": "gerard way in 7th grade",
                "duration": "1:20",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__gw7gr.mp3?raw=true"
            }, {
                "track": 86,
                "name": "let us fall",
                "duration": "2:19",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__fall.mp3?raw=true"
            }, {
                "track": 87,
                "name": "icy cough",
                "duration": "1:54",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__icy_cough.mp3?raw=true"
            }, {
                "track": 88,
                "name": "porcupinez",
                "duration": "1:02",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__porcupinez.mp3?raw=true"
            }, {
                "track": 89,
                "name": "earrings",
                "duration": "1:50",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__earrings.mp3?raw=true"
            }, {
                "track": 90,
                "name": "checkered tablecloth",
                "duration": "1:08",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__checkered_tablecloth.mp3?raw=true"
            }, {
                "track": 91,
                "name": "hotpot",
                "duration": "1:02",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__hotpot.mp3?raw=true"
            }, {
                "track": 92,
                "name": "purple heater",
                "duration": "0:43",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__purple_heater.mp3?raw=true"
            }, {
                "track": 93,
                "name": "MIC. CHECK TWO",
                "duration": "2:17",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__MIC_CHECK_TWO.mp3?raw=true"
            }, {
                "track": 94,
                "name": "sunday",
                "duration": "1:56",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__sunday.mp3?raw=true"
            }, {
                "track": 95,
                "name": "scary hedgehogs",
                "duration": "0:44",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__scary_hedgehogs.mp3?raw=true"
            }, {
                "track": 96,
                "name": "hai",
                "duration": "0:44",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__hai.mp3?raw=true"
            }, {
                "track": 97,
                "name": "warmachine828",
                "duration": "1:14",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__warmachine828.mp3?raw=true"
            }, {
                "track": 98,
                "name": "e",
                "duration": "0:51",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__e.mp3?raw=true"
            }, {
                "track": 99,
                "name": "sickness",
                "duration": "1:25",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__sickness.mp3?raw=true"
            }, {
                "track": 100,
                "name": " good old",
                "duration": "1:05",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__good_old.mp3?raw=true"
            }, {
                "track": 101,
                "name": " sock",
                "duration": "0:53",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__sock.mp3?raw=true"
            }, {
                "track": 102,
                "name": " big macaque",
                "duration": "0:34",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__big_macaque.mp3?raw=true"
            }, {
                "track": 103,
                "name": " vice city",
                "duration": "1:22",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__vice_city.mp3?raw=true"
            }, {
                "track": 104,
                "name": " new york antipasto",
                "duration": "1:38",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__new_york_antipasto.mp3?raw=true"
            }, {
                "track": 105,
                "name": " marble fountain",
                "duration": "1:00",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__white_fountain.mp3?raw=true"
            }, {
                "track": 106,
                "name": " haussmann",
                "duration": "2:12",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__haussmann.mp3?raw=true"
            }, {
                "track": 107,
                "name": " kindled progeny",
                "duration": "1:21",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__kindled_progeny.mp3?raw=true"
            }, {
                "track": 108,
                "name": " sound2",
                "duration": "1:06",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__sound2.mp3?raw=true"
            }, {
                "track": 109,
                "name": " mozart2",
                "duration": "1:04",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__mozart.mp3?raw=true"
            }, {
                "track": 110,
                "name": " suc",
                "duration": "0:29",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__suc.mp3?raw=true"
            }, {
                "track": 111,
                "name": " cotton blues",
                "duration": "0:48",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__cotton_blues.mp3?raw=true"
            }, {
                "track": 112,
                "name": " the sounds in my cochlea on february 14th",
                "duration": "0:48",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__cochlea_feb14.mp3?raw=true"
            }, {
                "track": 113,
                "name": " discotheque endormie",
                "duration": "0:33",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__discotheque_endormie.mp3?raw=true"
            }, {
                "track": 114,
                "name": " itoa",
                "duration": "0:44",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__itoa.mp3?raw=true"
            }, {
                "track": 115,
                "name": " knex",
                "duration": "1:44",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__knex.mp3?raw=true"
            }, {
                "track": 116,
                "name": " acrobat",
                "duration": "0:54",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__acrobat.mp3?raw=true"
            }, {
                "track": 117,
                "name": " marina",
                "duration": "1:00",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__marina.mp3?raw=true"
            }, {
                "track": 118,
                "name": " tututu",
                "duration": "0:42",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__tututu.mp3?raw=true"
            }, {
                "track": 119,
                "name": " pl",
                "duration": "0:12",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__pl.mp3?raw=true"
            }, {
                "track": 120,
                "name": " freak",
                "duration": "0:24",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__freak.mp3?raw=true"
            }, {
                "track": 121,
                "name": " j",
                "duration": "0:23",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__j.mp3?raw=true"
            }, {
                "track": 121,
                "name": " icy beatz",
                "duration": "0:24",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__icy_beatz.mp3?raw=true"
            }, {
                "track": 122,
                "name": " park side up",
                "duration": "1:18",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__park_side_up.mp3?raw=true"
            }, {
                "track": 123,
                "name": " oimoi",
                "duration": "0:26",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__oimoi.mp3?raw=true"
            }, {
                "track": 124,
                "name": " pliers on ear van gogh",
                "duration": "0:27",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__pliers_on_ear_van_gogh.mp3?raw=true"
            }, {
                "track": 125,
                "name": " pliers on ear van gogh",
                "duration": "0:27",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__pliers_on_ear_van_gogh.mp3?raw=true"
            }, {
                "track": 126,
                "name": " liv",
                "duration": "1:24",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__liv.mp3?raw=true"
            }, {
                "track": 127,
                "name": " queens",
                "duration": "1:30",
                "file": "https://github.com/joshnatis/josh8/blob/master/tunes/songs/__queens.mp3?raw=true"
            }],
            
            buildPlaylist = $(tracks).each(function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackDuration = value.duration;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                }
                $('#plList').append('<li> \
                    <div class="plItem"> \
                        <span class="plNum">' + trackNumber + '.</span> \
                        <span class="plTitle">' + trackName + '</span> \
                        <span class="plLength">' + trackDuration + '</span> \
                    </div> \
                </li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').on('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).on('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).on('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').on('click', function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').on('click', function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').on('click', function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = tracks[id].file;
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        //extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/mpeg') ? '.mp3' : '';
        loadTrack(index);
    } else {
        // boo hoo
        $('.column').addClass('hidden');
        var noSupport = $('#audio1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
    }
});

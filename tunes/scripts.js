//TODO FIX DRAGGING TIMEBAR (oninput vs onchange, or both?)
//move songs to external json file
//todo - make shuffle previous go to previous song in history
//todo - change songbox to song_container

/*_____       _______
 |  __ \   /\|__   __|/\
 | |  | | /  \  | |  /  \
 | |  | |/ /\ \ | | / /\ \
 | |__| / ____ \| |/ ____ \
 |_____/_/    \_\_/_/    \_\*/

const SONGPATH = "https://github.com/joshnatis/josh8/blob/master/tunes/songs/";
const SONGS = [{
    "name": "私とあなたが結婚した木へ散歩",
    "duration": "0:24",
    "file": "__tree.mp3"
}, {
    "name": "bowls",
    "duration": "0:43",
    "file": "__bowl.mp3"
}, {
    "name": "fkit",
    "duration": "0:56",
    "file": "__fkit.mp3"
}, {
    "name": "space cats",
    "duration": "0:55",
    "file": "__spacecats.mp3"
}, {
    "name": "movement",
    "duration": "0:44",
    "file": "__movement.mp3"
}, {
    "name": "bzper",
    "duration": "0:36",
    "file": "__bzper.mp3"
}, {
    "name": "bwouns",
    "duration": "0:44",
    "file": "__bwouns.mp3"
}, {
    "name": "plum",
    "duration": "1:36",
    "file": "__plum_1.mp3"
}, {
    "name": "spacrowave -30DEFRO",
    "duration": "0:34",
    "file": "__spacrowav-30DEFRO.mp3"
}, {
    "name": "big lenny",
    "duration": "1:58",
    "file": "__biglenny.mp3"
}, {
    "name": "fried_liver_attack",
    "duration": "0:40",
    "file": "__fried_liver_attack.mp3"
}, {
    "name": "f5",
    "duration": "0:30",
    "file": "__f5.mp3"
}, {
    "name": "clark",
    "duration": "1:30",
    "file": "__clark2.mp3"
},  {
    "name": "evenings in rome",
    "duration": "0:54",
    "file": "__evenings_in_rome.mp3"
}, {
    "name": "fffff",
    "duration": "2:03",
    "file": "__fffff.mp3"
}, {
    "name": "grandfather",
    "duration": "1:18",
    "file": "__grandfather.mp3"
}, {
    "name": "sirens on my stoop",
    "duration": "1:50",
    "file": "__sirens_on_my_stoop.mp3"
}, {
    "name": "north",
    "duration": "1:05",
    "file": "__north.mp3"
}, {
    "name": "marc",
    "duration": "0:39",
    "file": "__marc.mp3"
}, {
    "name": "alex",
    "duration": "0:43",
    "file": "__alex.mp3"
}, {
    "name": "andata",
    "duration": "1:29",
    "file": "__andata.mp3"
}, {
    "name": "bird days",
    "duration": "2:08",
    "file": "__bird_days.mp3"
}, {
    "name": "coffee beans",
    "duration": "1:08",
    "file": "__coffee_beans.mp3"
}, {
    "name": "cart",
    "duration": "0:37",
    "file": "__cart.mp3"
}, {
    "name": "joshanova",
    "duration": "0:40",
    "file": "__joshanova.mp3"
}, {
    "name": "synthetics medley",
    "duration": "2:05",
    "file": "__synthethics_medley.mp3"
}, {
    "name": "villas",
    "duration": "1:40",
    "file": "__villas.mp3"
}, {
    "name": "lilypad [demo]",
    "duration": "1:50",
    "file": "__lilypad_[demo].mp3"
}, {
    "name": "pacificitnalta",
    "duration": "1:19",
    "file": "__pacificitnalta.mp3"
}, {
    "name": "lilac",
    "duration": "1:18",
    "file": "__lilac.mp3"
}, {
    "name": "third party inst",
    "duration": "1:09",
    "file": "__third_party_inst.mp3"
}, {
    "name": "powerᵖᵉᵒᵖˡᵉ",
    "duration": "2:12",
    "file": "__powerpeople.mp3"
}, {
    "name": "a molten heart",
    "duration": "1:45",
    "file": "__a_molten_heart.mp3"
}, {
    "name": "grasspeaking",
    "duration": "1:55",
    "file": "__grasspeaking.mp3"
}, {
    "name": "love's gonna get you killed",
    "duration": "1:42",
    "file": "__love's_gonna_get_you_killed_2.mp3"
}, {
    "name": "i feel lonely without you",
    "duration": "1:12",
    "file": "__i_feel_lonely_without_you.mp3"
}, {
    "name": "all i need",
    "duration": "1:18",
    "file": "__all_i_need.mp3"
}, {
    "name": "ocean of tears",
    "duration": "0:54",
    "file": "__ocean_of_tears.mp3"
}, {
    "name": "we must look like freaks to them",
    "duration": "1:07",
    "file": "__we_must_look_like_freaks_to_them.mp3"
}, {
    "name": "wishful thinking",
    "duration": "2:12",
    "file": "__wishful_thinking.mp3"
}, {
    "name": "47 dandelions",
    "duration": "1:34",
    "file": "__47_dandelions.mp3"
}, {
    "name": "on",
    "duration": "0:43",
    "file": "__on.mp3"
}, {
    "name": "smith9",
    "duration": "1:04",
    "file": "__smith9_inst.mp3"
}, {
    "name": "erth",
    "duration": "1:03",
    "file": "__erth.mp3"
}, {
    "name": "kaa",
    "duration": "0:23",
    "file": "__kaa.mp3"
}, {
    "name": "magnus",
    "duration": "2:04",
    "file": "__magnus.mp3"
}, {
    "name": "часы_тикают",
    "duration": "2:33",
    "file": "__часы_тикают_2.mp3"
}, {
    "name": "ptolemy's curbstard + other assorted pseudointellectual crap",
    "duration": "1:10",
    "file": "__fantasy4.mp3"
}, {
    "name": "posthumous deathmatch",
    "duration": "0:58",
    "file": "__posthumous_deathmatch_2.mp3"
}, {
    "name": "aerobica",
    "duration": "2:05",
    "file": "__astrobeka2.mp3"
}, {
    "name": "ocean train",
    "duration": "0:35",
    "file": "__ocean_train.mp3"
}, {
    "name": "everyday relaxation",
    "duration": "2:21",
    "file": "__everyday_relaxation.mp3"
}, {
    "name": "sethlow swings",
    "duration": "1:22",
    "file": "__sethlow_swings.mp3"
}, {
    "name": "spartans live on mars",
    "duration": "1:20",
    "file": "__spartans_live_on_mars.mp3"
}, {
    "name": "lisp",
    "duration": "0:48",
    "file": "__lisp.mp3"
}, {
    "name": "last breath",
    "duration": "1:40",
    "file": "__last_breath_v2.mp3"
}, {
    "name": "seeds",
    "duration": "2:54",
    "file": "__seeds_(final).mp3"
}, {
    "name": "buusound",
    "duration": "0:07",
    "file": "__buusound.mp3"
}, {
    "name": "tulip",
    "duration": "1:06",
    "file": "__mari.mp3"
}, {
    "name": "mariner's lounge",
    "duration": "0:58",
    "file": "__mariner_lounge.mp3"
}, {
    "name": "rascal",
    "duration": "1:00",
    "file": "__charl.mp3"
}, {
    "name": "short",
    "duration": "0:43",
    "file": "__short.mp3"
}, {
    "name": "86",
    "duration": "0:39",
    "file": "__86.mp3"
}, {
    "name": "batu",
    "duration": "0:56",
    "file": "__batu.mp3"
}, {
    "name": "nm2",
    "duration": "1:08",
    "file": "__nm2.mp3"
}, {
    "name": "back",
    "duration": "0:30",
    "file": "__back.mp3"
}, {
    "name": "alone/in//space",
    "duration": "1:11",
    "file": "__aloneinspace.mp3"
}, {
    "name": "caś",
    "duration": "1:07",
    "file": "__cas.mp3"
}, {
    "name": "deep sea secrets",
    "duration": "1:02",
    "file": "__deep_sea_secrets.mp3"
}, {
    "name": "boeing",
    "duration": "1:54",
    "file": "__boeing_inst.mp3"
}, {
    "name": "panacea staircase",
    "duration": "1:36",
    "file": "__panacea_staircase_[inst].mp3"
}, {
    "name": "kakarot",
    "duration": "0:49",
    "file": "__kakorot(v2).mp3"
}, {
    "name": "mozart",
    "duration": "0:32",
    "file": "__mozrt.mp3"
}, {
    "name": "sound",
    "duration": "1:05",
    "file": "__sound.mp3"
}, {
    "name": "spaced out",
    "duration": "1:44",
    "file": "__spaced_out.mp3"
}, {
    "name": "SUMOHOUSE Mixed Drink",
    "duration": "0:18",
    "file": "__SUMOHOUSE_Mixed_Drink.mp3"
}, {
    "name": "Agamemnon",
    "duration": "1:48",
    "file": "__Agamemnon.mp3"
}, {
    "name": "library holly",
    "duration": "1:23",
    "file": "__library_holly.mp3"
}, {
    "name": "metroloop",
    "duration": "1:00",
    "file": "__metroloop.mp3"
}, {
    "name": "blue chalk",
    "duration": "1:24",
    "file": "__blue_chalk.mp3"
}, {
    "name": "cessaria",
    "duration": "2:15",
    "file": "__cessaria.mp3"
}, {
    "name": "nöcht",
    "duration": "0:33",
    "file": "__nocht.mp3"
}, {
    "name": "metal cheek",
    "duration": "1:06",
    "file": "__metalcheek.mp3"
}, {
    "name": "qux",
    "duration": "0:32",
    "file": "__qux.mp3"
}, {
    "name": "gerard way in 7th grade",
    "duration": "1:20",
    "file": "__gw7gr.mp3"
}, {
    "name": "let us fall",
    "duration": "2:19",
    "file": "__fall.mp3"
}, {
    "name": "icy cough",
    "duration": "1:54",
    "file": "__icy_cough.mp3"
}, {
    "name": "porcupinez",
    "duration": "1:02",
    "file": "__porcupinez.mp3"
}, {
    "name": "earrings",
    "duration": "1:50",
    "file": "__earrings.mp3"
}, {
    "name": "checkered tablecloth",
    "duration": "1:08",
    "file": "__checkered_tablecloth.mp3"
}, {
    "name": "hotpot",
    "duration": "1:02",
    "file": "__hotpot.mp3"
}, {
    "name": "purple heater",
    "duration": "0:43",
    "file": "__purple_heater.mp3"
}, {
    "name": "MIC. CHECK TWO",
    "duration": "2:17",
    "file": "__MIC_CHECK_TWO.mp3"
}, {
    "name": "sunday",
    "duration": "1:56",
    "file": "__sunday.mp3"
}, {
    "name": "scary hedgehogs",
    "duration": "0:44",
    "file": "__scary_hedgehogs.mp3"
}, {
    "name": "hai",
    "duration": "0:44",
    "file": "__hai.mp3"
}, {
    "name": "warmachine828",
    "duration": "1:14",
    "file": "__warmachine828.mp3"
}, {
    "name": "e",
    "duration": "0:51",
    "file": "__e.mp3"
}, {
    "name": "sickness",
    "duration": "1:25",
    "file": "__sickness.mp3"
}, {
    "name": " good old",
    "duration": "1:05",
    "file": "__good_old.mp3"
}, {
    "name": " sock",
    "duration": "0:53",
    "file": "__sock.mp3"
}, {
    "name": " big macaque",
    "duration": "0:34",
    "file": "__big_macaque.mp3"
}, {
    "name": " vice city",
    "duration": "1:22",
    "file": "__vice_city.mp3"
}, {
    "name": " new york antipasto",
    "duration": "1:38",
    "file": "__new_york_antipasto.mp3"
}, {
    "name": " marble fountain",
    "duration": "1:00",
    "file": "__white_fountain.mp3"
}, {
    "name": " haussmann",
    "duration": "2:12",
    "file": "__haussmann.mp3"
}, {
    "name": " kindled progeny",
    "duration": "1:21",
    "file": "__kindled_progeny.mp3"
}, {
    "name": " sound2",
    "duration": "1:06",
    "file": "__sound2.mp3"
}, {
    "name": " mozart2",
    "duration": "1:04",
    "file": "__mozart.mp3"
},{
    "name": " cotton blues",
    "duration": "0:48",
    "file": "__cotton_blues.mp3"
}, {
    "name": " the sounds in my cochlea on february 14th",
    "duration": "0:48",
    "file": "__cochlea_feb14.mp3"
}, {
    "name": " discotheque endormie",
    "duration": "0:33",
    "file": "__discotheque_endormie.mp3"
}, {
    "name": " itoa",
    "duration": "0:44",
    "file": "__itoa.mp3"
}, {
    "name": " knex",
    "duration": "1:44",
    "file": "__knex.mp3"
}, {
    "name": " acrobat",
    "duration": "0:54",
    "file": "__acrobat.mp3"
}, {
    "name": " marina",
    "duration": "1:00",
    "file": "__marina.mp3"
}, {
    "name": " tututu",
    "duration": "0:42",
    "file": "__tututu.mp3"
}, {
    "name": " pl",
    "duration": "0:12",
    "file": "__pl.mp3"
}, {
    "name": " freak",
    "duration": "0:24",
    "file": "__freak.mp3"
}, {
    "name": " j",
    "duration": "0:23",
    "file": "__j.mp3"
}, {
    "name": " icy beatz",
    "duration": "0:24",
    "file": "__icy_beatz.mp3"
}, {
    "name": " park side up",
    "duration": "1:18",
    "file": "__park_side_up.mp3"
}, {
    "name": " oimoi",
    "duration": "0:26",
    "file": "__oimoi.mp3"
}, {
    "name": " pliers on ear van gogh",
    "duration": "0:27",
    "file": "__pliers_on_ear_van_gogh.mp3"
}, {
    "name": " liv",
    "duration": "1:24",
    "file": "__liv.mp3"
}, {
    "name": " queens",
    "duration": "1:30",
    "file": "__queens.mp3"
}, {
    "name": " droplet",
    "duration": "1:16",
    "file": "__droplet.mp3"
}, {
    "name": " peachsodaxxo",
    "duration": "1:06",
    "file": "__peachsodaxxo.mp3"
}, {
    "name": " honey dark",
    "duration": "1:29",
    "file": "__honey_dark.mp3"
}, {
    "name": " oxford coma",
    "duration": "2:12",
    "file": "__oxford_coma.mp3"
}, {
    "name": " ball and chain",
    "duration": "1:08",
    "file": "__ball_and_chain.mp3"
}, {
    "name": " mikey's april",
    "duration": "1:05",
    "file": "__mikeys_april.mp3"
}, {
    "name": " noirshoppe",
    "duration": "0:48",
    "file": "__noirshoppe.mp3"
}, {
    "name": " dmt pirate",
    "duration": "0:35",
    "file": "__dmt_pirate.mp3"
}, {
    "name": " world and inhabitant",
    "duration": "1:09",
    "file": "__world_and_inhabitant.mp3"
}, {
    "name": " parlor",
    "duration": "1:22",
    "file": "__parlor.mp3"
}, {
    "name": " bitcrushed fish alien",
    "duration": "2:04",
    "file": "__bitcrushed_fish_alien.mp3"
}, {
    "name": " stonks",
    "duration": "0:48",
    "file": "__stonks.mp3"
}, {
    "name": " floater",
    "duration": "0:56",
    "file": "__floater.mp3"
}, {
    "name": " seaside vinescape",
    "duration": "1:14",
    "file": "__seasidevinescape.mp3"
}, {
    "name": " chillin94",
    "duration": "1:16",
    "file": "__chillin94.mp3"
}, {
    "name": " CHASING TAILS",
    "duration": "0:47",
    "file": "__CHASING_TAILS.mp3"
}, {
    "name": " pearls",
    "duration": "0:55",
    "file": "__pearls.mp3"
}, {
    "name": " silkapitan",
    "duration": "1:01",
    "file": "__silkapitan.mp3"
}, {
    "name": " pegasus",
    "duration": "0:35",
    "file": "__pegasus.mp3"
}, {
    "name": " tower von crystalle",
    "duration": "0:44",
    "file": "__tower_von_crystalle.mp3"
}, {
    "name": " p",
    "duration": "0:56",
    "file": "__p.mp3"
}, {
    "name": " ttttt",
    "duration": "0:36",
    "file": "__ttttt.mp3"
}, {
    "name": " chuck",
    "duration": "0:57",
    "file": "__chuck.mp3"
}, {
    "name": " tab",
    "duration": "1:05",
    "file": "__tab.mp3"
}, {
    "name": " green tea",
    "duration": "1:35",
    "file": "__green_tea.mp3"
}, {
    "name": " tryna find my way back home ~~",
    "duration": "1:28",
    "file": "__tryna_find_my_way_back_home.mp3"
}, {
    "name": "fuckin chamaleon",
    "duration": "1:59",
    "file": "__fuckin_chamaleon.mp3"
}, {
    "name": "chance",
    "duration": "0:44",
    "file": "__chance.mp3"
}, {
    "name": "at night",
    "duration": "0:44",
    "file": "__at_night.mp3"
}, {
    "name": "cyberfruit",
    "duration": "0:39",
    "file": "__cyberfruit.mp3"
}, {
    "name": "can 'o crap",
    "duration": "0:44",
    "file": "__can_o_crap.mp3"
}, {
    "name": "love and mist",
    "duration": "0:59",
    "file": "__love_and_mist.mp3"
}, {
    "name": "phrog",
    "duration": "0:55",
    "file": "__phrog.mp3"
}, {
    "name": "parroting about",
    "duration": "0:51",
    "file": "__parroting_about.mp3"
}, {
    "name": "cute fizz",
    "duration": "0:27",
    "file": "__cute_fizz.mp3"
}, {
    "name": "b",
    "duration": "0:56",
    "file": "__b.mp3"
}, {
    "name": "anxiety spirals",
    "duration": "0:32",
    "file": "__anxiety_spirals.mp3"
}, {
    "name": "stiki",
    "duration": "1:07",
    "file": "__stiki.mp3"
}, {
    "name": "moo",
    "duration": "0:34",
    "file": "__moo.mp3"
}, {
    "name": "never stop",
    "duration": "1:04",
    "file": "__never_stop.mp3"
}, {
    "name": "ode to 347",
    "duration": "0:50",
    "file": "__ode_to_347.mp3"
}, {
    "name": "yo!",
    "duration": "1:01",
    "file": "__yo.mp3"
}, {
    "name": "aquarium",
    "duration": "0:42",
    "file": "__aquarium.mp3"
}, {
    "name": "sky86",
    "duration": "1:04",
    "file": "__sky86.mp3"
}, {
    "name": "animals, planets",
    "duration": "1:42",
    "file": "__animals_planets.mp3"
}, {
    "name": "damn sounds like ur avoiding the rap battle tho",
    "duration": "0:38",
    "file": "__damn_sounds_like_ur_avoiding_the_rap_battle_tho.mp3"
}, {
    "name": "bubblebath",
    "duration": "0:39",
    "file": "__bubblebath.mp3"
}, {
    "name": "peaceful skeleton war",
    "duration": "0:56",
    "file": "__peaceful_skeleton_war.mp3"
}, {
    "name": "kawaii graveyard",
    "duration": "1:21",
    "file": "__kawaii_graveyard.mp3"
}, {
    "name": "ticonderoga46",
    "duration": "0:48",
    "file": "__ticonderoga46.mp3"
}, {
    "name": "moth",
    "duration": "0:23",
    "file": "__moth.mp3"
}, {
    "name": "i will be a geezer at the park",
    "duration": "0:36",
    "file": "__geezer.mp3"
}, {
    "name": "my father's piano",
    "duration": "0:42",
    "file": "__my_fathers_piano.mp3"
}, {
    "name": "argonaut",
    "duration": "0:10",
    "file": "__argonaut.mp3"
}, {
    "name": "m",
    "duration": "1:17",
    "file": "__m.mp3"
}, {
    "name": "fite",
    "duration": "0:12",
    "file": "__fite.mp3"
}, {
    "name": "sunwalk",
    "duration": "0:12",
    "file": "__sunwalk.mp3"
}, {
    "name": "reducer",
    "duration": "0:57",
    "file": "__reducer.mp3"
}, {
    "name": "friendly ock",
    "duration": "0:17",
    "file": "__friendly_ock.mp3"
}, {
    "name": "cappoouueeoueouccino",
    "duration": "1:42",
    "file": "__cappoouueeoueouccino.mp3"
}, {
    "name": "harps",
    "duration": "1:21",
    "file": "__harps.mp3"
}, {
    "name": "33LD4",
    "duration": "0:17",
    "file": "__33LD4.mp3"
}, {
    "name": "say goodnight to my little friend",
    "duration": "1:16",
    "file": "__say_goodnight_to_my_little_friend.mp3"
}, {
    "name": "we really wave ninjas",
    "duration": "0:32",
    "file": "__we_really_wave_ninjas.mp3"
}, {
    "name": "walking cheems outside the castle",
    "duration": "0:42",
    "file": "__walking_cheems_outside_the_castle.mp3"
}, {
    "name": "deadwoods",
    "duration": "0:46",
    "file": "__deadwoods.mp3"
}, {
    "name": "alien coffin",
    "duration": "0:33",
    "file": "__alien_coffin.mp3"
}, {
    "name": "kurt talk 2",
    "duration": "0:44",
    "file": "__kurt_talk_2.mp3"
}, {
    "name": "drowned9/ru",
    "duration": "0:54",
    "file": "__drowned9ru.mp3"
}, {
    "name": "say less more often",
    "duration": "0:51",
    "file": "__say_less_more_often.mp3"
}, {
    "name": "meat radio",
    "duration": "2:13",
    "file": "__meat_radio.mp3"
}, {
    "name": "furry fiend",
    "duration": "0:42",
    "file": "__furry_fiend.mp3"
}, {
    "name": "very haircut",
    "duration": "0:46",
    "file": "__very_haircut.mp3"
}];

/*_____ _______    _______ ______  __      __     _____    _____
 / ____|__   __|/\|__   __|  ____|  \ \    / /\   |  __ \  / ____|
| (___    | |  /  \  | |  | |__      \ \  / /  \  | |__) || (___
 \___ \   | | / /\ \ | |  |  __|      \ \/ / /\ \ |  _  /  \___ \
 ____) |  | |/ ____ \| |  | |____      \  / ____ \| | \ \  ____) |
|_____/   |_/_/    \_\_|  |______|      \/_/    \_\_|  \_\|_____/*/

let CURRENT_SONG_INDEX;
let CURRENT_SONG;
let CURRENT_SONG_CONTAINER;
let CURRENT_VOLUME = 1.00;
let CURRENT_MODE = "LINEAR";
let HISTORY = [];

/*_____   ____  __  __    ______ _      ______ __  __ ______ _   _ _______ _____
 |  __ \ / __ \|  \/  |  |  ____| |    |  ____|  \/  |  ____| \ | |__   __/ ____|
 | |  | | |  | | \  / |  | |__  | |    | |__  | \  / | |__  |  \| |  | | | (___
 | |  | | |  | | |\/| |  |  __| | |    |  __| | |\/| |  __| | . ` |  | |  \___ \
 | |__| | |__| | |  | |  | |____| |____| |____| |  | | |____| |\  |  | |  ____) |
 |_____/ \____/|_|  |_|  |______|______|______|_|  |_|______|_| \_|  |_| |_____/*/

const play_btn = document.getElementById("play");
const refresh_btn = document.getElementById("refresh");
const speaker_btn = document.getElementById("speaker");
const volume_slider = document.getElementById("volume");
const time_slider = document.getElementById("timebar");
const time_text = document.getElementById("time");

/*_____ _   _ _____ _______    _____ _______ _    _ ______ ______
 |_   _| \ | |_   _|__   __|  / ____|__   __| |  | |  ____|  ____|
   | | |  \| | | |    | |    | (___    | |  | |  | | |__  | |__
   | | | . ` | | |    | |     \___ \   | |  | |  | |  __| |  __|
  _| |_| |\  |_| |_   | |     ____) |  | |  | |__| | |    | |
 |_____|_| \_|_____|  |_|    |_____/   |_|   \____/|_|    |_|*/

init();

function init()
{
	populateSongs();
	initMenuBarStuff();
	initKeyboardShortcuts();
	highlightQueriedSong();
}

function populateSongs()
{
	const BR = document.createElement("BR");
	for(let i = 0; i < SONGS.length; ++i)
	{
		let title = document.createElement("P");
		title.innerHTML = i + ". &nbsp;" + SONGS[i].name;
		title.className = "song_titles";

		let duration = document.createElement("P");
		duration.innerHTML = SONGS[i].duration;
		duration.className = "song_durations";

		let songbox = document.createElement("DIV");
		songbox.className = "song_boxes";
		songbox.appendChild(title);
		songbox.appendChild(duration);

		songbox.onclick = function() {
			playSong(i, songbox);
		};

		document.getElementById("songs-container").appendChild(songbox);
		document.getElementById("songs-container").appendChild(BR);
	}
}

function initMenuBarStuff()
{
	initTimeBubble();

	play_btn.onclick = function() {
		if(CURRENT_SONG == null)
			playSong(0, document.getElementsByClassName("song_boxes")[0]);
		else
		{
			if(CURRENT_SONG.paused) playCurrentSong();
			else pauseCurrentSong();
		}
	}

	refresh_btn.onclick = function() {
		toggleLoopMode();
	}

	speaker_btn.onclick = function() {
		CURRENT_VOLUME == 0 ? setVolume(1) : setVolume(0);
	}

	volume_slider.oninput = function() {
		setVolume(volume_slider.value);
	}

	time_slider.onchange = function() {
		if(CURRENT_SONG != null)
		  CURRENT_SONG.currentTime = time_slider.value;
	}
}

function initTimeBubble()
{
	let bubble;

	time_slider.addEventListener("mousemove", function(e) {
		if(bubble != null) bubble.remove();
		bubble = document.createElement("P");
		bubble.id = "bubble";
		bubble.style.left = e.clientX + "px";
		let hovered_time = calcSliderPos(e);
		bubble.innerHTML = secondsToMinutes(hovered_time);
		insertAfter(bubble, time_slider);
	});

	time_slider.addEventListener("mouseout", function() {
		if(bubble != null) bubble.remove();
	});
}

function initKeyboardShortcuts()
{
	document.onkeydown = function(e)
	{
		if(e.keyCode == 32) //space
		{
			if(CURRENT_SONG == null)
				playSong(0, document.getElementsByClassName("song_boxes")[0]);
			else
				CURRENT_SONG.paused ? playCurrentSong() : pauseCurrentSong();

			return false;
		}

		else if(e.keyCode == 39 /* right */) playNextSong(CURRENT_SONG_INDEX, "next");
		else if(e.keyCode == 37 /*  left */) playNextSong(CURRENT_SONG_INDEX, "prev");
		else if(e.keyCode == 38 /*    up */) {window.scrollTo(0, 0); return false;}
		else if(e.keyCode == 40 /*  down */) {window.scrollTo(0,document.body.scrollHeight); return false;}
		else if(e.keyCode == 76 /*     l */) toggleLoopMode();
		else if(e.keyCode == 77 /*     m */) CURRENT_VOLUME == 0 ? setVolume(100) : setVolume(0);
		else if(e.keyCode == 83 /*     s */) toggleShuffleMode();
	}
}

function highlightQueriedSong()
{
	let url = window.location.href;
	let qpos = url.search("q=");
	if(qpos == -1) return;
	let query = url.substring(qpos + 2).replace(/%20/g, " ").replace(/_/g, " ");

	let titles = document.getElementsByClassName("song_titles");
	for(let i = 0; i < titles.length; ++i)
	{
		if(titles[i].innerHTML.includes(query))
		{
			titles[i].style.border = "2px solid #89cdd3";
			titles[i].onclick = function() {
				titles[i].style.border = null;
				titles[i].removeAttribute("onclick");
			}
			titles[i].scrollIntoView();
			return;
		}
	}
}

/*_____ _______    _______ ______    _____ ____  _   _ _______ _____   ____  _       _____
 / ____|__   __|/\|__   __|  ____|  / ____/ __ \| \ | |__   __|  __ \ / __ \| |     / ____|
| (___    | |  /  \  | |  | |__    | |   | |  | |  \| |  | |  | |__) | |  | | |    | (___
 \___ \   | | / /\ \ | |  |  __|   | |   | |  | | . ` |  | |  |  _  /| |  | | |     \___ \
 ____) |  | |/ ____ \| |  | |____  | |___| |__| | |\  |  | |  | | \ \| |__| | |____ ____) |
|_____/   |_/_/    \_\_|  |______|  \_____\____/|_| \_|  |_|  |_|  \_\\____/|______|_____/*/

function playSong(index, songbox = document.getElementsByClassName("song_boxes")[index])
{
	if(CURRENT_SONG != null && title.innerHTML != "")
	{
		pauseCurrentSong();
		CURRENT_SONG_CONTAINER.classList.remove("clicked_song_boxes");
	}

	CURRENT_SONG = new Audio(SONGPATH + SONGS[index].file + "?raw=true");
	CURRENT_SONG_INDEX = index;
	CURRENT_SONG_CONTAINER = songbox;
	CURRENT_SONG.volume = CURRENT_VOLUME;
	document.getElementById("title").innerHTML = SONGS[index].name;
	updateTimeSlider(index);
	playCurrentSong();
	CURRENT_SONG_CONTAINER.classList.add("clicked_song_boxes");

	if(HISTORY.length == 0 || HISTORY[HISTORY.length - 1] != index)
		HISTORY.push(index);

	CURRENT_SONG.onended = function()
	{
		playNextSong(index, "next");
	}
}

function playCurrentSong()
{
	CURRENT_SONG.play();
	play_btn.src = "pause.png";
}

function pauseCurrentSong()
{
	CURRENT_SONG.pause();
	play_btn.src = "play.png";
}

function playNextSong(index, direction)
{
	if(CURRENT_SONG == null)
	{
		playSong(0);
		return;
	}

	if(CURRENT_MODE == "LOOP")
		playSong(index);

	else if(CURRENT_MODE == "LINEAR")
    {
        if(direction == "next") playSong((index + 1) % SONGS.length);
        else (index != 0) ? playSong(index - 1) : playSong(SONGS.length - 1);
    }

	else if(CURRENT_MODE == "SHUFFLE")
	{
		if(direction == "prev")
		{
			HISTORY.pop();
			if(HISTORY.length > 0) playSong(HISTORY[HISTORY.length - 1]);
			else playSong(Math.floor(Math.random() * SONGS.length));
		}
		else playSong(Math.floor(Math.random() * SONGS.length));
	}
}

function updateTimeSlider(index)
{
	time_slider.max = minutesToSeconds(SONGS[index].duration);
	time_slider.value = 0;

	CURRENT_SONG.ontimeupdate = function() {
		let current = secondsToMinutes(CURRENT_SONG.currentTime);
		let duration = str_pad_left(SONGS[index].duration, '0', 5);
		time_text.innerHTML = current + " / " + duration;

		time_slider.value = CURRENT_SONG.currentTime;
	}
}

function setVolume(vol)
{
	volume_slider.value = vol;

	CURRENT_VOLUME = vol/100;
	if(CURRENT_SONG != null) CURRENT_SONG.volume = CURRENT_VOLUME;

	if(CURRENT_VOLUME == 0) speaker_btn.src = "speaker_muted.png";
	else if(speaker_btn.src = "speaker_muted.png") speaker_btn.src = "speaker2.png";
}

function toggleLoopMode()
{
	if(CURRENT_MODE == "LOOP")
	{
		CURRENT_MODE = "LINEAR";
		refresh_btn.classList.remove("looping");
	}
	else
	{
		CURRENT_MODE = "LOOP";
		refresh_btn.classList.add("looping");
	}
}

function toggleShuffleMode()
{
	if(CURRENT_MODE == "SHUFFLE") CURRENT_MODE = "LINEAR";
	else
	{
		if(CURRENT_MODE == "LOOP")
			toggleLoopMode();
		CURRENT_MODE = "SHUFFLE";
	}
}

/*_    _ ______ _      _____  ______ _____   _____
 | |  | |  ____| |    |  __ \|  ____|  __ \ / ____|
 | |__| | |__  | |    | |__) | |__  | |__) | (___
 |  __  |  __| | |    |  ___/|  __| |  _  / \___ \
 | |  | | |____| |____| |    | |____| | \ \ ____) |
 |_|  |_|______|______|_|    |______|_|  \_\_____/*/


function insertAfter(el, referenceNode) {
	referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

function calcSliderPos(e) {
	return (e.offsetX / e.target.clientWidth) * parseInt(e.target.getAttribute('max'), 10);
}

function minutesToSeconds(time)
{
	let args = time.split(":");
	if(args.length != 2)
	{
		console.log("Improperly structured duration: " + time);
		return time;
	}
	return (parseInt(args[0]) * 60) + parseInt(args[1]);
}

function secondsToMinutes(time)
{
	if(time < 0) return "00:00";

	time = parseInt(time);
	let minutes = Math.floor(time / 60);
	let seconds = time % 60;

	return str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);
}

//thx dru
function str_pad_left(string,pad,length) {
    return (new Array(length+1).join(pad)+string).slice(-length);
}

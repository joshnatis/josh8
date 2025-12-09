//move songs to external json file

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
}, {
    "name": "apollonia",
    "duration": "2:22",
    "file": "__apollonia.mp3"
}, {
    "name": "headass medal",
    "duration": "1:23",
    "file": "__headass_medal.mp3"
}, {
    "name": "my sunflower",
    "duration": "0:54",
    "file": "__my_sunflower.mp3"
}, {
    "name": "where da fuck is my shyt",
    "duration": "0:44",
    "file": "__where_da_fuck_is_my_shit.mp3"
}, {
    "name": "astigmatism ;(",
    "duration": "0:43",
    "file": "__astigmatism.mp3"
}, {
    "name": "cute fox",
    "duration": "0:37",
    "file": "__cute_fox.mp3"
}, {
    "name": "thoughts",
    "duration": "1:37",
    "file": "__thoughts.mp3"
}, {
    "name": "buddy durress jumps out of a speeding taxi",
    "duration": "0:17",
    "file": "__buddy_durress_jumps_out_of_a_taxi.mp3"
}, {
    "name": "catnap",
    "duration": "0:41",
    "file": "__catnap.mp3"
}, {
    "name": "lol2",
    "duration": "0:12",
    "file": "__lol2.mp3"
}, {
    "name": "baby evan in the jungle",
    "duration": "0:17",
    "file": "__baby_evan_in_the_jungle.mp3"
}, {
    "name": "stegasaurus",
    "duration": "0:29",
    "file": "__stegasaurus.mp3"
},{
    "name": "interplanetary catbus",
    "duration": "1:04",
    "file": "__interplanetary_catbus.mp3"
}, {
    "name": "fantasy_star",
    "duration": "0:23",
    "file": "__fantasy_star.mp3"
}, {
    "name": "𝙱𝙸𝙶 𝙵𝙰𝚃 𝙰𝙻𝙸𝙴𝙽 𝙱𝙾𝚈𝙵𝚁𝙸𝙴𝙽𝙳",
    "duration": "1:38",
    "file": "__big_fat_alien_boyfriend.mp3"
}, {
    "name": "feedback",
    "duration": "2:14",
    "file": "__feedback.mp3"
}, {
    "name": "turkish deep state",
    "duration": "0:36",
    "file": "__turkish_deep_state.mp3"
}, {
    "name": "My mom bought a rock painting activity",
    "duration": "1:27",
    "file": "__My_mom_bought_a_rock_painting_activity.mp3"
}, {
    "name": "bashkirian waste and the master plan",
    "duration": "8:54",
    "file": "__bashkirian_waste_and_the_master_plan.mp3"
}, {
    "name": "this is a recurring death",
    "duration": "0:40",
    "file": "__this_is_a_recurring_death.mp3"
}, {
    "name": "gimme a minute uhh...",
    "duration": "0:58",
    "file": "__gime_a_minute_uhh.mp3"
}, {
    "name": "dark gray wave machine",
    "duration": "2:01",
    "file": "__dark_gray_wave_machine.mp3"
}, {
    "name": "space sandwich",
    "duration": "1:01",
    "file": "__space_sandwich.mp3"
}, {
    "name": "surely you're joking",
    "duration": "1:37",
    "file": "__sure.mp3"
}, {
    "name": "peche lambic beer",
    "duration": "0:44",
    "file": "__peche_lambic_beer.mp3"
}, {
    "name": "violet",
    "duration": "0:22",
    "file": "__violet.mp3"
}, {
    "name": "drive-by downloads",
    "duration": "0:30",
    "file": "__drive-by_downloads.mp3"
}, {
    "name": "aw cute butterfly",
    "duration": "0:44",
    "file": "__aw_cute_butterfly.mp3"
}, {
    "name": "oblong",
    "duration": "0:30",
    "file": "__oblong.mp3"
}, {
    "name": "cchips2",
    "duration": "0:27",
    "file": "__cchips2.mp3"
}, {
    "name": "cchips3",
    "duration": "0:20",
    "file": "__cchips3.mp3"
}, {
    "name": "freeze",
    "duration": "1:04",
    "file": "__freeze.mp3"
}, {
    "name": "lucas",
    "duration": "1:04",
    "file": "__lucas.mp3"
}, {
    "name": "i dont like girls with nice teeth",
    "duration": "1:18",
    "file": "__idontlikegirlswithniceteeth.mp3"
}, {
    "name": "tu again?",
    "duration": "1:27",
    "file": "__tu_again.mp3"
}, {
    "name": "a worm was here first",
    "duration": "1:06",
    "file": "__a_worm_was_here_first.mp3"
}, {
    "name": "static fields",
    "duration": "0:24",
    "file": "__static_fields.mp3"
}, {
    "name": "massage my ears",
    "duration": "0:37",
    "file": "__massage_my_ears.mp3"
}, {
    "name": "drain jesus",
    "duration": "0:14",
    "file": "__drain_jesus.mp3"
}, {
    "name": "russian cybercriminals, or, are you sure you want to land on the moon?",
    "duration": "0:53",
    "file": "__russian_cybercriminals.mp3"
}, {
    "name": "on sun kil moon",
    "duration": "1:09",
    "file": "__oe.mp3"
}, {
    "name": "how we relate",
    "duration": "0:52",
    "file": "__how_we_relate.mp3"
}, {
    "name": "blowin off steam",
    "duration": "0:25",
    "file": "__blowin_off_steam.mp3"
}, {
    "name": "swagged up",
    "duration": "0:24",
    "file": "__swagged_up.mp3"
}, {
    "name": "a direct reference to purple music",
    "duration": "1:32",
    "file": "__a_direct_reference_to_purple_music.mp3"
}, {
    "name": "trancey prance",
    "duration": "1:08",
    "file": "__trancey_prance.mp3"
}, {
    "name": "torreador",
    "duration": "0:23",
    "file": "__torreador.mp3"
}, {
    "name": "doink by the beach",
    "duration": "1:15",
    "file": "__doink_by_the_beach.mp3"
}, {
    "name": "STRAPPED",
    "duration": "0:41",
    "file": "__STRAPPED.mp3"
}, {
    "name": "movie sketch 1",
    "duration": "0:31",
    "file": "__movie_sketch_1.mp3"
}, {
    "name": "movie sketch 2",
    "duration": "0:48",
    "file": "__movie_sketch_2.mp3"
}, {
    "name": "skoold",
    "duration": "1:11",
    "file": "__skoold.mp3"
}, {
    "name": "wachu",
    "duration": "0:16",
    "file": "__wachu.mp3"
}, {
    "name": "E0000002.wav",
    "duration": "1:24",
    "file": "__E0000002.mp3"
}, {
    "name": "synth cookies",
    "duration": "1:20",
    "file": "__synth_cookies.mp3"
}, {
    "name": "il ragazzo",
    "duration": "0:44",
    "file": "__il_ragazzo.mp3"
}, {
    "name": "alice hi",
    "duration": "0:17",
    "file": "__alice_hi.mp3"
}, {
    "name": "blue map cafe",
    "duration": "0:56",
    "file": "__blue_cafe_map.mp3"
}, {
    "name": "chinggis moment",
    "duration": "0:18",
    "file": "__chinggis_moment.mp3"
}, {
    "name": "baltic bits",
    "duration": "0:51",
    "file": "__baltic_bits.mp3"
}, {
    "name": "nightcluub",
    "duration": "0:59",
    "file": "__nightcluub.mp3"
}, {
    "name": "oppenheimer security hearing",
    "duration": "0:42",
    "file": "__oppenheimer_security_hearing.mp3"
}, {
    "name": "shaker",
    "duration": "0:28",
    "file": "__shaker.mp3"
}, {
    "name": "il caffé",
    "duration": "0:43",
    "file": "__il_caffe.mp3"
}, {
    "name": "level with me",
    "duration": "1:12",
    "file": "__level_with_me.mp3"
}, {
    "name": "back to lalaland",
    "duration": "0:20",
    "file": "__back_to_lalaland.mp3"
}, {
    "name": "prarie",
    "duration": "0:48",
    "file": "__prarie.mp3"
}, {
    "name": "cU@cyberia2nite?",
    "duration": "0:32",
    "file": "__cyberia_nite.mp3"
}, {
    "name": "a wise dj spanish fly once said smoke that onion, smoke that onion, keep on smoking that onion, onion",
    "duration": "1:08",
    "file": "__spanishfly.mp3"
}, {
    "name": "hyperbolic pizza party and/or ice cream party",
    "duration": "1:44",
    "file": "__hyperspace_pizza_party.mp3"
}, {
    "name": "beep ;x",
    "duration": "0:24",
    "file": "__beep.mp3"
}, {
    "name": "i want peace",
    "duration": "0:56",
    "file": "__i_want_peace.mp3"
}, {
    "name": "bump",
    "duration": "0:37",
    "file": "__bump.mp3"
}, {
    "name": "dimitri finds out",
    "duration": "1:02",
    "file": "__vladimir.mp3"
}, {
    "name": "nems and necro on bay parkway",
    "duration": "1:33",
    "file": "__nems_and_necro_on_bay_parkway.mp3"
}, {
    "name": "sewer rat 3",
    "duration": "1:32",
    "file": "__sewer_rat_3.mp3"
}, {
    "name": "telephone psychopath",
    "duration": "0:49",
    "file": "__telephone_psychopath.mp3"
}, {
    "name": "gnos",
    "duration": "0:44",
    "file": "__gnos.mp3"
}, {
    "name": "jexus",
    "duration": "0:42",
    "file": "__jexus.mp3"
}, {
    "name": "evropa",
    "duration": "1:00",
    "file": "__evropa.mp3"
}, {
    "name": "logicus lakefront",
    "duration": "0:47",
    "file": "__logicus_lakefront.mp3"
}, {
    "name": "neverspace",
    "duration": "1:19",
    "file": "__neverspace.mp3"
}, {
    "name": "mecha-kanye",
    "duration": "0:56",
    "file": "__mecha_kanye.mp3"
}, {
    "name": "caterpillarz",
    "duration": "0:24",
    "file": "__caterpillarz.mp3"
}, {
    "name": "fat lazy fat lazy",
    "duration": "0:45",
    "file": "__fat_lazy.mp3"
}, {
    "name": "rainbow fish story",
    "duration": "0:45",
    "file": "__rainbow_fish_story.mp3"
}, {
    "name": "waiting",
    "duration": "0:22",
    "file": "__waiting.mp3"
}, {
    "name": "ed, tom, n matt",
    "duration": "0:40",
    "file": "__ed_tom_n_matt.mp3"
}, {
    "name": "stress fields",
    "duration": "0:14",
    "file": "__stess_field.mp3"
}, {
    "name": "weird stroll",
    "duration": "0:24",
    "file": "__weird_stroll.mp3"
}, {
    "name": "heavy eyes",
    "duration": "0:34",
    "file": "__heavy_eyes.mp3"
}, {
    "name": "interstellar san pelegrino",
    "duration": "1:16",
    "file": "__interstellar_san_pelegrino.mp3"
}, {
    "name": "q laser",
    "duration": "0:21",
    "file": "__q_laser.mp3"
}, {
    "name": "expansion pack",
    "duration": "1:27",
    "file": "__expansion_pack.mp3"
}, {
    "name": "times of nachos",
    "duration": "0:59",
    "file": "__times_of_nachos.mp3"
}, {
    "name": "school lunch slop *plop*",
    "duration": "0:30",
    "file": "__school_lunch_slop_plop.mp3"
}, {
    "name": "gnome weapons school",
    "duration": "0:30",
    "file": "__gnome_weapons_school.mp3"
}, {
    "name": "tunnel snail world",
    "duration": "0:48",
    "file": "__tunnel_snail_world.mp3"
}, {
    "name": "what the dog doin (prod. dj eugenics a.k.a. bigbuu32)",
    "duration": "0:17",
    "file": "__what_the_dog_doin_dj_eugenics.mp3"
}, {
    "name": "zelly2",
    "duration": "1:22",
    "file": "__zelly2.mp3"
}, {
    "name": "experiment.01",
    "duration": "0:36",
    "file": "__experiment01.mp3"
}, {
    "name": "beached!",
    "duration": "1:06",
    "file": "__beached.mp3"
}, {
    "name": "midnight cashew run",
    "duration": "0:41",
    "file": "__midnight_cashew_run.mp3"
}, {
    "name": "fire mario",
    "duration": "0:36",
    "file": "__fire_mario.mp3"
}, {
    "name": "adventure.v1",
    "duration": "0:42",
    "file": "__adventurev1.mp3"
}, {
    "name": "adventure.v2",
    "duration": "1:07",
    "file": "__adventurev2.mp3"
}, {
    "name": "alien thunderdome",
    "duration": "0:29",
    "file": "__alien_thunderdome.mp3"
}, {
    "name": "experiment.02",
    "duration": "4:38",
    "file": "__experiment02.mp3"
}, {
    "name": "candyflipper",
    "duration": "0:48",
    "file": "__candyflipper.mp3"
}, {
    "name": "son of a gun",
    "duration": "1:27",
    "file": "__son_of_a_gun.mp3"
}, {
    "name": "deep quine",
    "duration": "1:03",
    "file": "__deep_quine.mp3"
}, {
    "name": "cyber fatigue",
    "duration": "1:29",
    "file": "__cyber_fatigue.mp3"
}, {
    "name": "sharp turn",
    "duration": "0:38",
    "file": "__sharp_turn.mp3"
}, {
    "name": "boss",
    "duration": "0:36",
    "file": "__boss.mp3"
}, {
    "name": "experiment.03",
    "duration": "4:16",
    "file": "__experiment03.mp3"
}, {
    "name": "space dust",
    "duration": "1:11",
    "file": "__space_dust.mp3"
}, {
    "name": "ain't",
    "duration": "0:54",
    "file": "__aint.mp3"
}, {
    "name": "gary's laboratory",
    "duration": "0:32",
    "file": "__garys_laboratory.mp3"
}, {
    "name": "arctic circle",
    "duration": "0:40",
    "file": "__arctic_circle.mp3"
}, {
    "name": "big z",
    "duration": "2:00",
    "file": "__big_z.mp3"
}, {
    "name": "experiment.04",
    "duration": "1:39",
    "file": "__experiment04.mp3"
}, {
    "name": "blunt",
    "duration": "2:48",
    "file": "__blunt.mp3"
}, {
    "name": "alice",
    "duration": "3:24",
    "file": "__alice.mp3"
}, {
    "name": "face",
    "duration": "0:32",
    "file": "__face.mp3"
}, {
    "name": "nos",
    "duration": "3:44",
    "file": "__nos.mp3"
}, {
    "name": "pretty sailor",
    "duration": "1:21",
    "file": "__pretty_sailor.mp3"
}, {
    "name": "floral g-shock",
    "duration": "1:02",
    "file": "__floral_gshock.mp3"
}, {
    "name": "if and only if",
    "duration": "0:27",
    "file": "__if_and_only_if.mp3"
}, {
    "name": "whatevs",
    "duration": "0:32",
    "file": "__whatevs.mp3"
}, {
    "name": "groovy snowflake",
    "duration": "0:38",
    "file": "__groovy_snowflake.mp3"
}, {
    "name": "crawly",
    "duration": "0:10",
    "file": "__crawly.mp3"
}, {
    "name": "red velvet bear",
    "duration": "0:46",
    "file": "__red_velvet_bear.mp3"
}, {
    "name": "sheer cold",
    "duration": "2:08",
    "file": "__sheer_cold.mp3"
}, {
    "name": "domovoy",
    "duration": "3:21",
    "file": "__domovoy.mp3"
}, {
    "name": "nz2",
    "duration": "0:43",
    "file": "__nz2.mp3"
}, {
    "name": "pyramid1",
    "duration": "0:29",
    "file": "__pyramid1.mp3"
}, {
    "name": "dome",
    "duration": "1:39",
    "file": "__dome.mp3"
}, {
    "name": "fingers",
    "duration": "0:38",
    "file": "__fingers.mp3"
}, {
    "name": "lunarbom",
    "duration": "0:37",
    "file": "__lunarbom.mp3"
}, {
    "name": "break yourself",
    "duration": "0:43",
    "file": "__break_yourself.mp3"
}, {
    "name": "neversoft eyeball",
    "duration": "0:36",
    "file": "__neversoft_eyeball.mp3"
}, {
    "name": "cozy прогулка",
    "duration": "2:50",
    "file": "__cozy_progulka.mp3"
}, {
    "name": "sheeps",
    "duration": "0:48",
    "file": "__sheeps.mp3"
}, {
    "name": "moody furniture",
    "duration": "1:15",
    "file": "__moody_furniture.mp3"
}, {
    "name": "pano",
    "duration": "0:45",
    "file": "__pano.mp3"
}, {
    "name": "bits",
    "duration": "2:06",
    "file": "__bits.mp3"
}, {
    "name": "persian rug breaks the 4th wall",
    "duration": "1:06",
    "file": "__persian_rug.mp3"
}, {
    "name": "basically what i hear when i listen to yeezus",
    "duration": "1:20",
    "file": "__yeezus.mp3"
}, {
    "name": "dj rediska",
    "duration": "1:09",
    "file": "__dj_rediska.mp3"
}, {
    "name": "gigi ferrari",
    "duration": "1:02",
    "file": "__gigi_ferrari.mp3"
}, {
    "name": "guitunnel",
    "duration": "0:25",
    "file": "__guitunnel.mp3"
}, {
    "name": "my gf says my sound design sucks",
    "duration": "0:25",
    "file": "__my_gf_says_my_sound_design_sucks.mp3"
}, {
    "name": "direct line",
    "duration": "0:38",
    "file": "__direct_line.mp3"
}, {
    "name": "new stamp :)",
    "duration": "0:24",
    "file": "__new_stamp.mp3"
}, {
    "name": "my tail",
    "duration": "1:29",
    "file": "__my_tail.mp3"
}, {
    "name": "the elf's march",
    "duration": "1:28",
    "file": "__the_elfs_march.mp3"
}, {
    "name": "hadouken",
    "duration": "0:27",
    "file": "__hadouken.mp3"
}, {
    "name": "David Shawty, whose real name is David Salazar",
    "duration": "1:24",
    "file": "__davidshawty.mp3"
}, {
    "name": "highway through maine",
    "duration": "1:26",
    "file": "__highway_through_maine.mp3"
}, {
    "name": "glacier",
    "duration": "0:41",
    "file": "__glacier.mp3"
}, {
    "name": "san andreas train",
    "duration": "1:07",
    "file": "__san_andreas_train.mp3"
}, {
    "name": "metal birds island",
    "duration": "3:08",
    "file": "__metal_birds_island.mp3"
}, {
    "name": "wooden teeth jabroni",
    "duration": "0:40",
    "file": "__militia.mp3"
}, {
    "name": "pink party",
    "duration": "0:50",
    "file": "__pink_dance.mp3"
}, {
    "name": "BWAUGHH",
    "duration": "0:36",
    "file": "__BWAUGHH.mp3",
}, {
    "name": "back to space",
    "duration": "0:50",
    "file": "__back_to_space.mp3",
}, {
    "name": "niceday",
    "duration": "0:53",
    "file": "__niceday.mp3",
}, {
    "name": "spongebab",
    "duration": "0:54",
    "file": "__spongebab.mp3",
}, {
    "name": "angels",
    "duration": "0:42",
    "file": "__angels.mp3",
}, {
    "name": "BAM",
    "duration": "1:04",
    "file": "__BAM.mp3",
}, {
    "name": "blast a charlatan",
    "duration": "1:03",
    "file": "__blast_a_charlatan.mp3",
}, {
    "name": "lovetheme4",
    "duration": "1:07",
    "file": "__lovetheme4.mp3",
}, {
    "name": "grenade2",
    "duration": "1:50",
    "file": "__grenade2.mp3",
}, {
    "name": "slvt",
    "duration": "1:02",
    "file": "__slvt.mp3",
}, {
    "name": "gamelan",
    "duration": "1:14",
    "file": "__gamelan.mp3",
}, {
    "name": "paracetamol",
    "duration": "0:57",
    "file": "__paracetamol.mp3",
}, {
    "name": "robot2008",
    "duration": "1:30",
    "file": "__robot2008.mp3",
}, {
    "name": "premo",
    "duration": "1:23",
    "file": "__premo.mp3",
}, {
    "name": "blue sands",
    "duration": "1:02",
    "file": "__bluesands.mp3",
}, {
    "name": "rescue heroes",
    "duration": "1:30",
    "file": "__rescueheroes.mp3",
}, {
    "name": "posted upright",
    "duration": "1:11",
    "file": "__posted_upright.mp3",
}, {
    "name": "friend",
    "duration": "0:49",
    "file": "__friend.mp3",
}, {
    "name": "izbushka",
    "duration": "2:43",
    "file": "__izbushka.mp3",
}, {
    "name": "twirl",
    "duration": "0:40",
    "file": "__twirl.mp3",
}, {
    "name": "babachka",
    "duration": "0:28",
    "file": "__babachka.mp3",
}, {
    "name": "freindship club",
    "duration": "2:10",
    "file": "__freindship-club.mp3",
}, {
    "name": "El-P's 9mm",
    "duration": "1:06",
    "file": "__elp.mp3",
}, {
    "name": "somber mario",
    "duration": "1:35",
    "file": "__somber_mario.mp3",
}, {
    "name": "for teh lulz",
    "duration": "0:24",
    "file": "__for_teh_lulz.mp3",
}, {
    "name": "soft scissors",
    "duration": "0:40",
    "file": "__soft_scissors.mp3",
}, {
    "name": "walk",
    "duration": "0:49",
    "file": "__walk.mp3",
}, {
    "name": "rains",
    "duration": "0:32",
    "file": "__rains.mp3",
}, {
    "name": "hail",
    "duration": "0:40",
    "file": "__hail.mp3",
}, {
    "name": "magnemite",
    "duration": "0:32",
    "file": "__magnemite.mp3",
}, {
    "name": "goodbye plane",
    "duration": "0:57",
    "file": "__goodbye_plane.mp3",
}, {
    "name": "violins",
    "duration": "2:00",
    "file": "__violins.mp3",
}, {
    "name": "playboi carti type beat (feat. tha liddo)",
    "duration": "0:27",
    "file": "__playboi_carti_type_beat.mp3",
}, {
    "name": "palm trees",
    "duration": "0:50",
    "file": "__palm_trees.mp3",
}, {
    "name": "wash",
    "duration": "1:20",
    "file": "__wash.mp3",
}, {
    "name": "get out",
    "duration": "3:24",
    "file": "__get_out.mp3",
}, {
    "name": "pinballs",
    "duration": "1:39",
    "file": "__pinballs.mp3",
}, {
    "name": "this is your copilot speaking",
    "duration": "1:37",
    "file": "__this_is_your_copilot_speaking.mp3",
}, {
    "name": "escape",
    "duration": "0:43",
    "file": "__escape.mp3",
}, {
    "name": "with the ferocity of one thousand gnashed teeth",
    "duration": "2:52",
    "file": "__with_the_ferocity_of_one_thousand_gnashed_teeth.mp3",
}, {
    "name": "troubled",
    "duration": "1:31",
    "file": "__troubled.mp3",
}, {
    "name": "bruh",
    "duration": "1:21",
    "file": "__bruh.mp3",
}, {
    "name": "ship",
    "duration": "0:48",
    "file": "__ship.mp3",
}, {
    "name": "devotion",
    "duration": "0:17",
    "file": "__devotion.mp3",
}, {
    "name": "emerald",
    "duration": "1:23",
    "file": "__emerald.mp3",
}, {
    "name": "five star hotel",
    "duration": "1:48",
    "file": "__five_star_hotel.mp3",
}, {
    "name": "slushie",
    "duration": "1:36",
    "file": "__slushie.mp3",
}, {
    "name": "bubble up",
    "duration": "0:59",
    "file": "__bubble_up.mp3",
}, {
    "name": "emocean",
    "duration": "0:42",
    "file": "__emocean.mp3",
}, {
    "name": "caverns",
    "duration": "1:01",
    "file": "__caverns.mp3",
}, {
    "name": "the beach",
    "duration": "0:49",
    "file": "__the_beach.mp3",
}, {
    "name": "fuji nights",
    "duration": "3:21",
    "file": "__fuji_nights.mp3",
}, {
    "name": "nat",
    "duration": "1:55",
    "file": "__nat.mp3",
}, {
    "name": "fly away",
    "duration": "1:49",
    "file": "__fly_away.mp3",
}, {
    "name": "wind vane",
    "duration": "3:08",
    "file": "__wind_vane.mp3",
}, {
    "name": "show you how",
    "duration": "0:33",
    "file": "__show_you_how.mp3",
}, {
    "name": "file city",
    "duration": "1:06",
    "file": "__file_city.mp3",
}, {
    "name": "YMO",
    "duration": "0:42",
    "file": "__YMO.mp3",
}, {
    "name": "rip dj rashad",
    "duration": "0:26",
    "file": "__rip_dj_rashad.mp3",
}, {
    "name": "7\" record",
    "duration": "1:56",
    "file": "__7inch_record.mp3",
}, {
    "name": "battle1",
    "duration": "1:09",
    "file": "__battle1.mp3",
}, {
    "name": "serial experiments",
    "duration": "0:45",
    "file": "__serial_experiments.mp3",
}, {
    "name": "griffin peter bandicam",
    "duration": "0:54",
    "file": "__griffin_peter_bandicam.mp3",
}, {
    "name": "tmobile swaqq",
    "duration": "1:47",
    "file": "__tmobile_swaqq.mp3",
}, {
    "name": "waiting room2",
    "duration": "0:38",
    "file": "__waiting_room2.mp3",
}, {
    "name": "mechanical turk",
    "duration": "0:22",
    "file": "__mechanical_turk.mp3",
}, {
    "name": "winter wonderland abstraction",
    "duration": "3:04",
    "file": "__winter_wonderland_abstraction.mp3",
}, {
    "name": "holocene",
    "duration": "1:39",
    "file": "__holocene.mp3",
}, {
    "name": "horserider",
    "duration": "1:25",
    "file": "__horserider.mp3",
}, {
    "name": "cities",
    "duration": "0:44",
    "file": "__cities.mp3",
}, {
    "name": "nicehatlady",
    "duration": "0:29",
    "file": "__nicehatlady.mp3",
}, {
    "name": "cheeky mustache",
    "duration": "0:59",
    "file": "__cheeky_mustache.mp3",
}, {
    "name": "sleep machine",
    "duration": "0:30",
    "file": "__sleep_machine.mp3",
}, {
    "name": "twin peaks",
    "duration": "5:53",
    "file": "__twin_peaks.mp3",
}, {
    "name": "death forest",
    "duration": "1:16",
    "file": "__death_forest.mp3",
}, {
    "name": "apparition",
    "duration": "0:06",
    "file": "__apparition.mp3",
}, {
    "name": "harping on piano",
    "duration": "1:59",
    "file": "__harping_on_piano.mp3",
}, {
    "name": "universal shower (prod. dj shower freak)",
    "duration": "0:47",
    "file": "__dj_shower_freak.mp3",
}, {
    "name": "jimmy cosmonaut",
    "duration": "2:05",
    "file": "__jimmy_cosmonaut.mp3",
}, {
    "name": "planet namek",
    "duration": "0:16",
    "file": "__planet_namek.mp3",
}, {
    "name": "lithuanian baby (hyperpop version)",
    "duration": "0:57",
    "file": "__lithuanian_baby_(hyperpop_version).mp3",
}, {
    "name": "lithuanian baby (crystal castles version)",
    "duration": "1:03",
    "file": "__lithuanian_baby_(crystal_castles_version).mp3",
}, {
    "name": "Toodle-Fucking-Oo",
    "duration": "1:14",
    "file": "__Toodle-Fucking-Oo.mp3",
}, {
    "name": "asdf",
    "duration": "0:51",
    "file": "__asdf.mp3",
}, {
    "name": "g",
    "duration": "0:27",
    "file": "__g.mp3",
}, {
    "name": "ambulance blue",
    "duration": "0:30",
    "file": "__ambulance_blue.mp3",
}, {
    "name": "seaweed",
    "duration": "0:54",
    "file": "__seaweed.mp3",
}, {
    "name": "bing chilling",
    "duration": "1:15",
    "file": "__bing_chilling.mp3",
}, {
    "name": "picture",
    "duration": "0:53",
    "file": "__picture.mp3",
}, {
    "name": "white rabbits",
    "duration": "1:02",
    "file": "__white_rabbits.mp3",
}, {
    "name": "his dissent",
    "duration": "4:58",
    "file": "__his_dissent.mp3",
}, {
    "name": "cereal and concurrent",
    "duration": "1:23",
    "file": "__cereal_and_concurrent.mp3",
}, {
    "name": "sea of flowers",
    "duration": "0:43",
    "file": "__sea_of_flowers.mp3",
}, {
    "name": "beach 4 nerds",
    "duration": "2:24",
    "file": "__beach_4_nerds.mp3",
}, {
    "name": "ciani arcade",
    "duration": "1:17",
    "file": "__ciani_arcade.mp3",
}, {
    "name": "clubbing in club penguin",
    "duration": "0:30",
    "file": "__clubbing_in_club_penguin.mp3",
}, {
    "name": "anime female",
    "duration": "0:54",
    "file": "__anime_female.mp3",
}, {
    "name": "metallic-5s",
    "duration": "1:43",
    "file": "__metallic-5s.mp3",
}, {
    "name": "rainbow fish story pt2",
    "duration": "1:14",
    "file": "__rainbow_fish_story_pt2.mp3",
}, {
    "name": "pops",
    "duration": "0:53",
    "file": "__pops.mp3",
}, {
    "name": "bluebird",
    "duration": "2:27",
    "file": "__bluebird.mp3",
}, {
    "name": "face the fresh air",
    "duration": "1:09",
    "file": "__face_the_fresh_air.mp3",
}, {
    "name": "james ferraro loud pack",
    "duration": "0:36",
    "file": "__james_ferraro_loud_pack.mp3",
}, {
    "name": "fuckingswag",
    "duration": "1:12",
    "file": "__fuckingswag.mp3",
}, {
    "name": "warm springs",
    "duration": "3:21",
    "file": "__warm_springs.mp3",
}, {
    "name": "disturbiak",
    "duration": "0:48",
    "file": "__disturbiak.mp3",
}, {
    "name": "cherry",
    "duration": "1:49",
    "file": "__cherry.mp3",
}, {
    "name": "aaaaa2",
    "duration": "0:43",
    "file": "__aaaaa2.mp3",
}, {
    "name": "acd.vocals.17",
    "duration": "0:46",
    "file": "__acd.vocals.17.mp3",
}, {
    "name": "massive genius",
    "duration": "1:10",
    "file": "__massive_genius.mp3",
}, {
    "name": "echoa1",
    "duration": "2:05",
    "file": "__echoa1.mp3",
}, {
    "name": "echoa2",
    "duration": "0:30",
    "file": "__echoa2.mp3",
}, {
    "name": "the palisades cliffs",
    "duration": "2:26",
    "file": "__the_palisades_cliffs.mp3",
}, {
    "name": "pea shooter",
    "duration": "1:20",
    "file": "__pea_shooter.mp3",
}, {
    "name": "devotion 2",
    "duration": "0:37",
    "file": "__devotion_2.mp3",
}, {
    "name": "backstab",
    "duration": "0:24",
    "file": "__backstab.mp3",
}, {
    "name": "epicswag",
    "duration": "0:45",
    "file": "__epicswag.mp3",
}, {
    "name": "tachyon",
    "duration": "0:36",
    "file": "__tachyon.mp3",
}, {
    "name": "a happy little kettle",
    "duration": "2:39",
    "file": "__a_happy_little_kettle.mp3",
}, {
    "name": "paw",
    "duration": "0:52",
    "file": "__paw.mp3",
}, {
    "name": "by candlelight",
    "duration": "2:43",
    "file": "__by_candlelight.mp3",
}, {
    "name": "harley gray",
    "duration": "2:42",
    "file": "__harley_gray.mp3",
}, {
    "name": "golf pencil dance",
    "duration": "1:14",
    "file": "__golf_pencil_dance.mp3",
}, {
    "name": "applying pressure",
    "duration": "1:09",
    "file": "__applying_pressure.mp3",
}, {
    "name": "leaf scene",
    "duration": "0:42",
    "file": "__leaf_scene.mp3",
}, {
    "name": "new paltz nights",
    "duration": "0:35",
    "file": "__new_paltz_nights.mp3",
}, {
    "name": "strawberry fields",
    "duration": "1:20",
    "file": "__strawberry_fields.mp3",
}, {
    "name": "safe with me",
    "duration": "1:27",
    "file": "__safe_with_me.mp3",
}, {
    "name": "outer space rubiks",
    "duration": "0:51",
    "file": "__outer_space_rubiks.mp3",
}, {
    "name": "pleasantries",
    "duration": "0:59",
    "file": "__pleasantries.mp3",
}, {
    "name": "a raga for the blue carpet",
    "duration": "2:34",
    "file": "__a_raga_for_the_blue_carpet.mp3",
}, {
    "name": "RodsAndCones",
    "duration": "1:43",
    "file": "__RodsAndCones.mp3",
}, {
    "name": "the rabbi",
    "duration": "1:38",
    "file": "__the_rabbi.mp3",
}, {
    "name": "thomas waltz",
    "duration": "1:13",
    "file": "__thomas_waltz.mp3",
}, {
    "name": "dat kokibucha",
    "duration": "0:24",
    "file": "__dat_kokibucha.mp3",
}, {
    "name": "gone (old)",
    "duration": "1:04",
    "file": "__gone_(old).mp3",
}, {
    "name": "rave in new york",
    "duration": "0:55",
    "file": "__rave_in_new_york.mp3",
}, {
    "name": "snowfield",
    "duration": "1:23",
    "file": "__snowfield.mp3",
}, {
    "name": "storage unit talisman",
    "duration": "1:43",
    "file": "__storage_unit_talisman.mp3",
}, {
    "name": "sun showers",
    "duration": "0:55",
    "file": "__sun_showers.mp3",
}, {
    "name": "sun kisss",
    "duration": "0:34",
    "file": "__sun_kisss.mp3",
}, {
    "name": "i walk you",
    "duration": "1:23",
    "file": "__i_walk_you.mp3",
}, {
    "name": "song of falling leaves",
    "duration": "1:00",
    "file": "__song_of_falling_leaves.mp3",
}, {
    "name": "sunrays",
    "duration": "2:23",
    "file": "__sunrays.mp3",
}, {
    "name": "angst and happiness",
    "duration": "2:17",
    "file": "__angst_and_happiness.mp3",
}, {
    "name": "we are happy to shred you",
    "duration": "2:14",
    "file": "__we_are_happy_to_shred_you.mp3",
}, {
    "name": "stringsurfer",
    "duration": "1:31",
    "file": "__stringsurfer.mp3",
}, {
    "name": "7713",
    "duration": "0:40",
    "file": "__7713.mp3",
}, {
    "name": "skull kid",
    "duration": "1:07",
    "file": "__skull_kid.mp3",
}, {
    "name": "i am studying the enemy",
    "duration": "1:47",
    "file": "__i_am_studying_the_enemy.mp3",
}, {
    "name": "nighthawks",
    "duration": "2:58",
    "file": "__nighthawks.mp3",
}, {
    "name": "turnstilez",
    "duration": "2:01",
    "file": "__turnstilez.mp3",
}, {
    "name": "real noodling",
    "duration": "2:19",
    "file": "__real_noodling.mp3",
}, {
    "name": "kitchen",
    "duration": "0:54",
    "file": "__kitchen.mp3",
}, {
    "name": "cold bricks and idling engine",
    "duration": "0:30",
    "file": "__cold_bricks_and_idling_engine.mp3",
}, {
    "name": "minimal warehouse rave",
    "duration": "1:11",
    "file": "__minimal_warehouse_rave.mp3",
}, {
    "name": "mr. buckshot",
    "duration": "1:55",
    "file": "__mr._buckshot.mp3",
}, {
    "name": "wait!",
    "duration": "1:44",
    "file": "__wait!.mp3",
}, {
    "name": "raygun",
    "duration": "1:12",
    "file": "__raygun.mp3",
}, {
    "name": "interdimensional toaster",
    "duration": "1:14",
    "file": "__interdimensional_toaster.mp3",
}, {
    "name": "swordfish biopic",
    "duration": "1:18",
    "file": "__swordfish_biopic.mp3",
}, {
    "name": "speeding by in italo high speed train",
    "duration": "1:43",
    "file": "__speeding_by_in_italo_high_speed_train.mp3",
}, {
    "name": "spacehi",
    "duration": "2:00",
    "file": "__spacehi.mp3",
}, {
    "name": "veena exercise",
    "duration": "1:15",
    "file": "__veena_exercise.mp3",
}, {
    "name": "shopkeeping song",
    "duration": "0:50",
    "file": "__shopkeeping_song.mp3",
}, {
    "name": "seafaring shit",
    "duration": "0:35",
    "file": "__seafaring_shit.mp3",
}, {
    "name": "stuk 0ff d4 r34ln355",
    "duration": "1:16",
    "file": "__stuk_0ff_d4_r34ln355.mp3",
}, {
    "name": "9",
    "duration": "0:28",
    "file": "__9.mp3",
}, {
    "name": "drippin",
    "duration": "0:48",
    "file": "__drippin.mp3",
}, {
    "name": "spoooky pumpkin",
    "duration": "0:29",
    "file": "__spoooky_pumpkin.mp3",
}, {
    "name": "debil",
    "duration": "1:20",
    "file": "__debil.mp3",
}, {
    "name": "desertstep",
    "duration": "0:48",
    "file": "__desertstep.mp3",
}, {
    "name": "zebra",
    "duration": "1:00",
    "file": "__zebra.mp3",
}, {
    "name": "ice spice",
    "duration": "1:24",
    "file": "__ice_spice.mp3",
}, {
    "name": "death's dynamic crap",
    "duration": "0:54",
    "file": "__death's_dynamic_crap.mp3",
}, {
    "name": "submarine guy fieri",
    "duration": "1:50",
    "file": "__submarine_guy_fieri.mp3",
}, {
    "name": "die for you",
    "duration": "2:12",
    "file": "__die_for_you.mp3",
}, {
    "name": "laura palmer's theme",
    "duration": "0:39",
    "file": "__laura_palmer's_theme.mp3",
}, {
    "name": "song",
    "duration": "1:11",
    "file": "__song.mp3",
}, {
    "name": "spindat",
    "duration": "1:12",
    "file": "__spindat.mp3",
}, {
    "name": "380SL Mercedes",
    "duration": "1:55",
    "file": "__380SL_Mercedes.mp3",
}, {
    "name": "frickin alien activities",
    "duration": "1:06",
    "file": "__frickin_alien_activities.mp3",
}, {
    "name": "heroin chic",
    "duration": "0:49",
    "file": "__heroin_chic.mp3",
}, {
    "name": "roddyricch",
    "duration": "2:15",
    "file": "__roddyrich-inst.mp3",
}, {
    "name": "leaf is loading",
    "duration": "1:54",
    "file": "__leaf_is_loading.mp3",
}, {
    "name": "see you on the boards",
    "duration": "2:45",
    "file": "__see_you_on_the_boards.mp3",
}, {
    "name": "break1",
    "duration": "1:17",
    "file": "__break1.mp3",
}, {
    "name": "dusty spoon",
    "duration": "0:59",
    "file": "__dusty_spoon.mp3",
}, {
    "name": "friccckkkkkk",
    "duration": "1:02",
    "file": "__friccckkkkkk.mp3",
}, {
    "name": "onwards taikonaut",
    "duration": "0:39",
    "file": "__onwards_taikonaut.mp3",
}, {
    "name": "no pussyfooting",
    "duration": "1:10",
    "file": "__no_pussyfooting.mp3",
}, {
    "name": "dxm5/terp",
    "duration": "1:18",
    "file": "__dxm5.terp.mp3",
}, {
    "name": "dual wield",
    "duration": "0:45",
    "file": "__dual_wield.mp3",
}, {
    "name": "tabla",
    "duration": "0:15",
    "file": "__tabla.mp3",
}, {
    "name": "hyperborean",
    "duration": "1:15",
    "file": "__hyperborean.mp3",
}, {
    "name": "bubbl",
    "duration": "0:29",
    "file": "__bubbl.mp3",
}, {
    "name": "getting specific at pacific street",
    "duration": "1:45",
    "file": "__getting_specific_at_pacific_street.mp3",
}, {
    "name": "a man with sunglasses approaches",
    "duration": "1:13",
    "file": "__a_man_with_sunglasses_approaches.mp3",
}, {
    "name": "zomb",
    "duration": "0:59",
    "file": "__zomb.mp3",
}, {
    "name": "floridian shmovements",
    "duration": "1:26",
    "file": "__floridian_shmovements.mp3",
}, {
    "name": "braintree",
    "duration": "0:52",
    "file": "__braintree.mp3",
}, {
    "name": "arnie",
    "duration": "0:46",
    "file": "__arnie.mp3",
}, {
    "name": "War Games",
    "duration": "10:11",
    "file": "__War_Games.mp3",
}, {
    "name": "space rover",
    "duration": "0:39",
    "file": "__space_rover.mp3",
}, {
    "name": "envelopes with your love",
    "duration": "0:50",
    "file": "__envelopes_with_your_love.mp3",
}, {
    "name": "fight scene (H)",
    "duration": "0:26",
    "file": "__fight_scene_(H).mp3",
}, {
    "name": "dat bitch",
    "duration": "0:42",
    "file": "__dat_bitch.mp3",
}, {
    "name": "kept (low peaceful remix)",
    "duration": "1:35",
    "file": "__kept_(low_peaceful_remix).mp3",
}, {
    "name": "juku4",
    "duration": "0:23",
    "file": "__juku4.mp3",
}, {
    "name": "f8",
    "duration": "0:23",
    "file": "__f8.mp3",
}, {
    "name": "the womb",
    "duration": "1:40",
    "file": "__the_womb.mp3",
}, {
    "name": "intoxicated",
    "duration": "0:29",
    "file": "__intoxicated.mp3",
}, {
    "name": "help me",
    "duration": "1:38",
    "file": "__help_me.mp3",
}, {
    "name": "out in the pasture",
    "duration": "0:56",
    "file": "__out_in_the_pasture.mp3",
}, {
    "name": "m. scruff kalimba",
    "duration": "1:01",
    "file": "__m_scruff_kalimba.mp3",
}, {
    "name": "campfire draft 46",
    "duration": "0:43",
    "file": "__campfire_draft_46.mp3",
}, {
    "name": "campfire draft 55",
    "duration": "1:41",
    "file": "__campfire_draft_55.mp3",
}, {
    "name": "campfire draft 58",
    "duration": "0:53",
    "file": "__campfire_draft_58.mp3",
}, {
    "name": "campfire draft 62",
    "duration": "0:21",
    "file": "__campfire_draft_62.mp3",
}, {
    "name": "campfire draft 63",
    "duration": "0:27",
    "file": "__campfire_draft_63.mp3",
}, {
    "name": "deborah",
    "duration": "1:17",
    "file": "__deborah.mp3",
}, {
    "name": "questions",
    "duration": "0:43",
    "file": "__questions.mp3",
}, {
    "name": "changes",
    "duration": "1:11",
    "file": "__changes.mp3",
}, {
    "name": "chamber",
    "duration": "0:58",
    "file": "__chamber.mp3",
}, {
    "name": "the looming feeling that something awful is going to happen [session]",
    "duration": "3:02",
    "file": "__the_looming_feeling_that_something_awful_is_going_to_happen_[session].mp3",
}, {
    "name": "Yasha Kniga 1",
    "duration": "1:16",
    "file": "__Yasha_Kniga_1.mp3",
}, {
    "name": "Yasha Kniga 2",
    "duration": "1:49",
    "file": "__Yasha_Kniga_2.mp3",
}, {
    "name": "Yasha Kniga 3",
    "duration": "1:26",
    "file": "__Yasha_Kniga_3.mp3",
}, {
    "name": "ship horn",
    "duration": "1:54",
    "file": "__ship_horn.mp3",
}, {
    "name": "jolene flip",
    "duration": "1:01",
    "file": "__jolene_flip.mp3",
}, {
    "name": "my boat",
    "duration": "2:02",
    "file": "__my_boat.mp3",
}, {
    "name": "unauthorized bite",
    "duration": "2:13",
    "file": "__unauthorized_bite.mp3",
}, {
    "name": "swaq",
    "duration": "1:55",
    "file": "__swaq.mp3",
}, {
    "name": "bandz anthology",
    "duration": "0:42",
    "file": "__bandz_anthology.mp3",
}, {
    "name": "microsoft teams type beat",
    "duration": "2:14",
    "file": "__microsoft_teams_type_beat.mp3",
}, {
    "name": "lemon tek",
    "duration": "1:31",
    "file": "__lemon_tek.mp3",
}, {
    "name": "pu2dprrtynwegtfkdup",
    "duration": "0:33",
    "file": "__pu2dprrtynwegtfkdup.mp3",
}, {
    "name": "can't stop juggin",
    "duration": "1:23",
    "file": "__can't_stop_juggin.mp3",
}, {
    "name": "frickyfrack",
    "duration": "0:54",
    "file": "__frickyfrack.mp3",
}, {
    "name": "spooky alien",
    "duration": "0:25",
    "file": "__spooky_alien.mp3",
}, {
    "name": "sexy bitch",
    "duration": "1:28",
    "file": "__sexy_bitch.mp3",
}, {
    "name": "sexy bitch 500",
    "duration": "1:06",
    "file": "__sexy_bitch_500.mp3",
}, {
    "name": "2am burger rampage",
    "duration": "1:04",
    "file": "__2am_burger_rampage.mp3",
}, {
    "name": "magnolia remix (feat. ice spice, tekashi69, pop smoke)",
    "duration": "1:35",
    "file": "__magnolia_remix.mp3",
}, {
    "name": "sugar high",
    "duration": "1:30",
    "file": "__sugar_high.mp3",
}, {
    "name": "gentle wind",
    "duration": "1:28",
    "file": "__gentle_wind.mp3",
}, {
    "name": "a cold day at just the right time",
    "duration": "1:39",
    "file": "__a_cold_day_at_just_the_right_time.mp3",
}, {
    "name": "slateport city",
    "duration": "1:55",
    "file": "__slateport_city.mp3",
}, {
    "name": "idkp",
    "duration": "1:03",
    "file": "__idkp.mp3",
}, {
    "name": "hyperdrive",
    "duration": "1:07",
    "file": "__hyperdrive.mp3",
}, {
    "name": "the skreets",
    "duration": "1:25",
    "file": "__the_skreets.mp3",
}, {
    "name": "sky funky dub",
    "duration": "1:03",
    "file": "__sky_funky_dub.mp3",
}, {
    "name": "rrrrumble",
    "duration": "1:17",
    "file": "__rrrrumble.mp3",
}, {
    "name": "playing",
    "duration": "2:22",
    "file": "__playing.mp3",
}, {
    "name": "floatation",
    "duration": "0:20",
    "file": "__floatation.mp3",
}, {
    "name": "seagull riddim",
    "duration": "2:05",
    "file": "__seagull_riddim.mp3",
}, {
    "name": "tunnel riddim",
    "duration": "1:40",
    "file": "__tunnel_riddim.mp3",
}, {
    "name": "in for the kill (rated grimey remix)",
    "duration": "1:51",
    "file": "__in_for_the_kill_(rated_grimey_remix).mp3",
}, {
    "name": "dusty flip",
    "duration": "1:27",
    "file": "__dusty_flip.mp3",
}, {
    "name": "heavy mental",
    "duration": "1:47",
    "file": "__heavy_mental.mp3",
}, {
    "name": "quick1 for buddy",
    "duration": "1:06",
    "file": "__quick1_for_buddy.mp3",
}, {
    "name": "menthols",
    "duration": "2:33",
    "file": "__menthols.mp3",
}, {
    "name": "it-gets",
    "duration": "1:43",
    "file": "__it-gets.mp3",
}, {
    "name": "american guy (me) finds out about out uk garage",
    "duration": "1:51",
    "file": "__american_guy_(me)_finds_out_about_out_uk_garage.mp3",
}, {
    "name": "I trusted you El-B",
    "duration": "1:02",
    "file": "__I_trusted_you_El-B.mp3",
}, {
    "name": "initial-d",
    "duration": "1:25",
    "file": "__initial-d.mp3",
}, {
    "name": "on horseback",
    "duration": "1:29",
    "file": "__on_horseback.mp3",
}, {
    "name": "red sky",
    "duration": "0:25",
    "file": "__red_sky.mp3",
}, {
    "name": "punches",
    "duration": "1:03",
    "file": "__punches.mp3",
}, {
    "name": "sunlol",
    "duration": "0:24",
    "file": "__sunlol.mp3",
}, {
    "name": "dark master",
    "duration": "2:11",
    "file": "__dark_master.mp3",
}, {
    "name": "guy named mark from estonia bleeds on my guitar at 4AM",
    "duration": "3:54",
    "file": "__guy_named_mark_from_estonia_bleeds_on_my_guitar_at_4AM.mp3",
}, {
    "name": "seeing olivia",
    "duration": "1:01",
    "file": "__seeing_olivia.mp3",
}, {
    "name": "um",
    "duration": "1:08",
    "file": "__um.mp3",
}, {
    "name": "spirit bomb",
    "duration": "1:56",
    "file": "__spirit_bomb.mp3",
}, {
    "name": "9mm-death-drive",
    "duration": "1:45",
    "file": "__9mm-death-drive.mp3",
}, {
    "name": "Can i have the vape",
    "duration": "2:54",
    "file": "__Can_i_have_the_vape.mp3",
}, {
    "name": "ice skate with you",
    "duration": "1:25",
    "file": "__ice_skate_with_you.mp3",
}, {
    "name": "vitamin water xxx acai",
    "duration": "1:42",
    "file": "__vitamin_water_xxx_acai.mp3",
}, {
    "name": "cartridge",
    "duration": "1:00",
    "file": "__cartridge.mp3",
}, {
    "name": "chemical",
    "duration": "2:22",
    "file": "__chemical.mp3",
}, {
    "name": "endocrine disruptor",
    "duration": "3:43",
    "file": "__endocrine_disruptor.mp3",
}, {
    "name": "krutitsa shar (крутится шар)",
    "duration": "3:28",
    "file": "__krutitsa_shar.mp3",
}, {
    "name": "dance",
    "duration": "1:57",
    "file": "__dance.mp3",
}, {
    "name": "donk oblast",
    "duration": "1:39",
    "file": "__donk_oblast.mp3",
}, {
    "name": "1-800-clipped",
    "duration": "2:07",
    "file": "__1-800-clipped.mp3",
}, {
    "name": "chiefcockproduction999",
    "duration": "1:30",
    "file": "__chiefcockproduction999.mp3",
}, {
    "name": "and i dont care!!",
    "duration": "2:07",
    "file": "__and_i_dont_care!!.mp3",
}, {
    "name": "horse",
    "duration": "1:31",
    "file": "__horse.mp3",
}, {
    "name": "body modification #1 (prod. brigid)",
    "duration": "0:27",
    "file": "__body_modification_1_prod_brigid.mp3",
}, {
    "name": "seabird heart",
    "duration": "2:52",
    "file": "__seabird_heart.mp3",
}, {
    "name": "oxygen",
    "duration": "2:01",
    "file": "__oxygen.mp3",
}, {
    "name": "full metal jesus",
    "duration": "2:02",
    "file": "__full_metal_jesus.mp3",
}, {
    "name": "shampoo torture method",
    "duration": "1:19",
    "file": "__shampoo_torture_method.mp3",
}, {
    "name": "sealed train extracts the dream",
    "duration": "2:03",
    "file": "__sealed_train_extracts_the_dream.mp3",
}, {
    "name": "chill wayne - a chilly",
    "duration": "2:52",
    "file": "__chill_wayne_-_a_chilly.mp3",
}, {
    "name": "Frett - Runnin (Griminal x BBK!!! Rated Remix)",
    "duration": "1:45",
    "file": "__Frett_-_Runnin_(Griminal_x_BBK!!!_Rated_Remix).mp3",
}, {
    "name": "weather overground",
    "duration": "2:21",
    "file": "__weather_overground.mp3",
}, {
    "name": "listo",
    "duration": "1:49",
    "file": "__listo.mp3",
}, {
    "name": "headache",
    "duration": "1:00",
    "file": "__headache.mp3",
}, {
    "name": "rain",
    "duration": "1:39",
    "file": "__rain.mp3",
}, {
    "name": "deep space molotov",
    "duration": "1:27",
    "file": "__deep_space_molotov.mp3",
}, {
    "name": "riemann approximation of playboi carti 😭",
    "duration": "1:27",
    "file": "__riemann_approximation_of_playboi_carti_😭.mp3",
}, {
    "name": "ps2 boot menu",
    "duration": "1:11",
    "file": "__ps2_boot_menu.mp3",
}, {
    "name": "snowy road",
    "duration": "4:33",
    "file": "__snowy_road.mp3",
}, {
    "name": "strawberry synth jam",
    "duration": "2:15",
    "file": "__strawberry_synth_jam.mp3",
}, {
    "name": "human ecology fund",
    "duration": "1:36",
    "file": "__human_ecology_fund.mp3",
}, {
    "name": "somewhere i belong flip",
    "duration": "2:09",
    "file": "__somewhere_i_belong_flip.mp3",
}, {
    "name": "small hands sal",
    "duration": "2:28",
    "file": "__small_hands_sal.mp3",
}, {
    "name": "fruity flip",
    "duration": "2:14",
    "file": "__fruity_flip.mp3",
}, {
    "name": "amai",
    "duration": "2:19",
    "file": "__amai.mp3",
}, {
    "name": "kublai",
    "duration": "2:44",
    "file": "__kublai.mp3",
}, {
    "name": "fat phacts",
    "duration": "1:40",
    "file": "__fat_phacts.mp3",
}, {
    "name": "genghis",
    "duration": "1:02",
    "file": "__genghis.mp3",
}, {
    "name": "night walk",
    "duration": "2:24",
    "file": "__night_walk.mp3",
}, {
    "name": "gagaaa",
    "duration": "1:27",
    "file": "__gagaaa.mp3",
}, {
    "name": "dream",
    "duration": "1:49",
    "file": "__dream.mp3",
}, {
    "name": "ummmmm2",
    "duration": "2:15",
    "file": "__ummmmm2.mp3",
}, {
    "name": "im clipster",
    "duration": "2:05",
    "file": "__im_clipster.mp3",
}, {
    "name": "nokia afghanistan",
    "duration": "1:13",
    "file": "__nokia_afghanistan.mp3",
}, {
    "name": "nokia albania",
    "duration": "0:42",
    "file": "__nokia_albania.mp3",
}, {
    "name": "xono2",
    "duration": "1:54",
    "file": "__xono2.mp3",
}, {
    "name": "blind date",
    "duration": "1:36",
    "file": "__blind_date.mp3",
}, {
    "name": "snowflakes on your eyelashes",
    "duration": "1:54",
    "file": "__snowflakes_on_your_eyelashes.mp3",
}, {
    "name": "200bpm cigarettttte",
    "duration": "0:49",
    "file": "__200bpm_cigarettttte.mp3",
}, {
    "name": "goldberg",
    "duration": "1:20",
    "file": "__goldberg.mp3",
}, {
    "name": "N1",
    "duration": "1:36",
    "file": "__N1.mp3",
}, {
    "name": "N2",
    "duration": "1:18",
    "file": "__N2.mp3",
}, {
    "name": "N3",
    "duration": "1:54",
    "file": "__N3.mp3",
}, {
    "name": "N4",
    "duration": "1:36",
    "file": "__N4.mp3",
}, {
    "name": "N5",
    "duration": "2:05",
    "file": "__N5.mp3",
}, {
    "name": "N6",
    "duration": "1:42",
    "file": "__N6.mp3",
}, {
    "name": "N7",
    "duration": "1:36",
    "file": "__N7.mp3",
}, {
    "name": "N8",
    "duration": "1:35",
    "file": "__N8.mp3",
}, {
    "name": "N9",
    "duration": "1:21",
    "file": "__N9.mp3",
}, {
    "name": "N10",
    "duration": "1:12",
    "file": "__N10.mp3",
}, {
    "name": "N11",
    "duration": "1:15",
    "file": "__N11.mp3",
}, {
    "name": "N12",
    "duration": "1:15",
    "file": "__N12.mp3",
}, {
    "name": "N13",
    "duration": "1:20",
    "file": "__N13.mp3",
}, {
    "name": "bloodstream",
    "duration": "1:21",
    "file": "__bloodstream.mp3",
}, {
    "name": "light from above",
    "duration": "1:09",
    "file": "__light_from_above.mp3",
}, {
    "name": "japanese kitkat",
    "duration": "0:48",
    "file": "__japanese_kitkat.mp3",
}, {
    "name": "the tragedy of stafford beer",
    "duration": "3:15",
    "file": "__the_tragedy_of_stafford_beer.mp3",
}, {
    "name": "pharmacy technician",
    "duration": "1:15",
    "file": "__pharmacy_technician.mp3",
}, {
    "name": "bluey vuitton",
    "duration": "2:24",
    "file": "__bluey_vuitton.mp3",
}, {
    "name": "faf de klerk",
    "duration": "1:29",
    "file": "__faf_de_klerk.mp3",
}, {
    "name": "signed with blood",
    "duration": "1:34",
    "file": "__signed_with_blood.mp3",
}, {
    "name": "stars",
    "duration": "3:01",
    "file": "__stars.mp3",
}, {
    "name": "remote girlfriend",
    "duration": "2:16",
    "file": "__remote_girlfriend.mp3",
}, {
    "name": "iron horse",
    "duration": "1:57",
    "file": "__iron_horse.mp3",
}, {
    "name": "still not a",
    "duration": "2:17",
    "file": "__still_not_a.mp3",
}, {
    "name": "picnic with god",
    "duration": "2:09",
    "file": "__picnic_with_god.mp3",
}, {
    "name": "bugs",
    "duration": "1:25",
    "file": "__bugs.mp3",
}, {
    "name": "recycling a soul",
    "duration": "5:27",
    "file": "__recycling_a_soul.mp3",
}, {
    "name": "on the road",
    "duration": "2:49",
    "file": "__on_the_road.mp3",
}, {
    "name": "broken promises",
    "duration": "2:24",
    "file": "__broken_promises.mp3",
}, {
    "name": "shuriken",
    "duration": "2:59",
    "file": "__shuriken.mp3",
}, {
    "name": "rrrrain",
    "duration": "1:54",
    "file": "__rrrrain.mp3",
}, {
    "name": "wasted life",
    "duration": "1:54",
    "file": "__wasted_life.mp3",
}, {
    "name": "fishbowl life",
    "duration": "1:52",
    "file": "__fishbowl_life.mp3",
}, {
    "name": "tiny flip",
    "duration": "1:30",
    "file": "__tiny_flip.mp3",
}, {
    "name": "ransom money",
    "duration": "1:12",
    "file": "__ransom_money.mp3",
}, {
    "name": "jimmy no good doer",
    "duration": "2:22",
    "file": "__jimmy_no_good_doer.mp3",
}, {
    "name": "serious mustache",
    "duration": "2:14",
    "file": "__serious_mustache.mp3",
}, {
    "name": "earl boykins",
    "duration": "1:30",
    "file": "__earl_boykins.mp3",
}, {
    "name": "rigas katya poison vsop",
    "duration": "1:46",
    "file": "__rigas_katya_poison_vsop.mp3",
}, {
    "name": "train",
    "duration": "1:26",
    "file": "__train.mp3",
}, {
    "name": "therapeutic window",
    "duration": "2:03",
    "file": "__therapeutic_window.mp3",
}, {
    "name": "bit of a sawtooth for chips",
    "duration": "1:21",
    "file": "__bit_of_a_sawtooth_for_chips.mp3",
}, {
    "name": "my amiga is my friend",
    "duration": "1:39",
    "file": "__my_amiga_is_my_friend.mp3",
}, {
    "name": "blood moon",
    "duration": "1:02",
    "file": "__blood_moon.mp3",
}, {
    "name": "santa smooth",
    "duration": "0:51",
    "file": "__santa_smooth.mp3",
}, {
    "name": "alej cooks",
    "duration": "0:36",
    "file": "__alej_cooks.mp3",
}, {
    "name": "just some stuff",
    "duration": "1:36",
    "file": "__just_some_stuff.mp3",
}, {
    "name": "siberia",
    "duration": "2:37",
    "file": "__siberia.mp3",
}, {
    "name": "fruity loop number 782",
    "duration": "1:40",
    "file": "__fruity_loop_number_782.mp3",
}, {
    "name": "this song is called this song sucks",
    "duration": "1:48",
    "file": "__this_song_is_called_this_song_sucks.mp3",
}, {
    "name": "cardiod",
    "duration": "1:48",
    "file": "__cardiod.mp3",
}, {
    "name": "3PM",
    "duration": "0:26",
    "file": "__3PM.mp3",
}, {
    "name": "peso (flex on em refix)",
    "duration": "1:28",
    "file": "__peso_(flex_on_em_refix).mp3",
}, {
    "name": "purple train to nowhere",
    "duration": "2:22",
    "file": "__purple_train_to_nowhere.mp3",
}, {
    "name": "im wet",
    "duration": "0:36",
    "file": "__im_wet.mp3",
}, {
    "name": "jam on toast (june 22)",
    "duration": "4:24",
    "file": "__jam_on_toast_(june_22).mp3",
}, {
    "name": "jupiter 800",
    "duration": "2:57",
    "file": "__jupiter_800.mp3",
}, {
    "name": "Sam's dark place reprise",
    "duration": "1:35",
    "file": "__Sam's_dark_place_reprise.mp3",
}, {
    "name": "donut1",
    "duration": "0:56",
    "file": "__donut1.mp3",
}, {
    "name": "forest1",
    "duration": "1:59",
    "file": "__forest1.mp3",
}, {
    "name": "forest3",
    "duration": "2:02",
    "file": "__forest3.mp3",
}, {
    "name": "forest4",
    "duration": "0:47",
    "file": "__forest4.mp3",
}, {
    "name": "umma",
    "duration": "3:23",
    "file": "__umma.mp3",
}, {
    "name": "big gun",
    "duration": "3:45",
    "file": "__big_gun.mp3",
}, {
    "name": "very low star power",
    "duration": "5:13",
    "file": "__very_low_star_power.mp3",
}, {
    "name": "the angels",
    "duration": "0:46",
    "file": "__the_angels.mp3",
}, {
    "name": "the angels (inst)",
    "duration": "1:32",
    "file": "__the_angels_(inst).mp3",
}, {
    "name": "elevator shaft rave",
    "duration": "1:35",
    "file": "__elevator_shaft_rave.mp3",
}, {
    "name": "plumes of smoke",
    "duration": "0:50",
    "file": "__plumes_of_smoke.mp3",
}, {
    "name": "dirge of cosines",
    "duration": "2:26",
    "file": "__dirge_of_cosines.mp3",
}, {
    "name": "jerk chicken type beat",
    "duration": "2:11",
    "file": "__jerk_chicken_type_beat.mp3",
}, {
    "name": "robin gan type beat",
    "duration": "1:20",
    "file": "__robin_gan_type_beat.mp3",
}, {
    "name": "dumbass type beat",
    "duration": "1:19",
    "file": "__dumbass_type_beat.mp3",
}, {
    "name": "quick1 for afx and wagonchrist",
    "duration": "1:50",
    "file": "__quick1_for_afx_and_wagonchrist.mp3",
}, {
    "name": "obshchina",
    "duration": "1:07",
    "file": "__obshchina.mp3",
}, {
    "name": "mesh sequins",
    "duration": "1:36",
    "file": "__mesh_sequins.mp3",
}, {
    "name": "cash",
    "duration": "1:10",
    "file": "__cash.mp3",
}, {
    "name": "pimptro",
    "duration": "0:36",
    "file": "__pimptro.mp3",
}, {
    "name": "unusual",
    "duration": "1:22",
    "file": "__unusual.mp3",
}, {
    "name": "angst",
    "duration": "1:36",
    "file": "__angst.mp3",
}, {
    "name": "ecology village",
    "duration": "3:42",
    "file": "__ecology_village.mp3",
}, {
    "name": "my organs",
    "duration": "2:25",
    "file": "__my_organs.mp3",
}, {
    "name": "glyphosate poisoning",
    "duration": "1:36",
    "file": "__glyphosate_poisoning.mp3",
}, {
    "name": "under the permafrost",
    "duration": "0:57",
    "file": "__under_the_permafrost.mp3",
}, {
    "name": "alert, canada",
    "duration": "1:59",
    "file": "__alert,_canada.mp3",
}, {
    "name": "rosehip loading menu",
    "duration": "2:24",
    "file": "__rosehip_loading_menu.mp3",
}, {
    "name": "polar alarm",
    "duration": "0:40",
    "file": "__polar_alarm.mp3",
}, {
    "name": "living room",
    "duration": "2:19",
    "file": "__living_room.mp3",
}, {
    "name": "press B to exit",
    "duration": "1:45",
    "file": "__press_B_to_exit.mp3",
}, {
    "name": "feverish",
    "duration": "2:06",
    "file": "__feverish.mp3",
}, {
    "name": "alien hand",
    "duration": "1:49",
    "file": "__alien_hand.mp3",
}, {
    "name": "sad french movie alone",
    "duration": "3:01",
    "file": "__sad_french_movie_alone.mp3",
}, {
    "name": "last of november chune",
    "duration": "2:03",
    "file": "__last_of_november_chune.mp3",
}, {
    "name": "when the sky clears",
    "duration": "1:51",
    "file": "__when_the_sky_clears.mp3",
}, {
    "name": "reflection",
    "duration": "2:52",
    "file": "__reflection.mp3",
}, {
    "name": "mess is here",
    "duration": "1:26",
    "file": "__mess_is_here.mp3",
}, {
    "name": "reel life",
    "duration": "1:30",
    "file": "__reel_life.mp3",
}, {
    "name": "the warrior and the brahmin",
    "duration": "1:27",
    "file": "__the_warrior_and_the_brahmin.mp3",
}, {
    "name": "fucking epicsauce",
    "duration": "0:48",
    "file": "__fucking_epicsauce.mp3",
}, {
    "name": "in my dreams",
    "duration": "3:09",
    "file": "__in_my_dreams.mp3",
}, {
    "name": "jumanji",
    "duration": "1:52",
    "file": "__jumanji.mp3",
}, {
    "name": "intercom",
    "duration": "1:10",
    "file": "__intercom.mp3",
}, {
    "name": "syndrome",
    "duration": "1:48",
    "file": "__syndrome.mp3",
}];

/*_____ _______    _______ ______   __      __     _____    _____
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
const songs_container = document.getElementById("songs-container");

/*_____ _   _ _____ _______    _____ _______ _    _ ______ ______
 |_   _| \ | |_   _|__   __|  / ____|__   __| |  | |  ____|  ____|
   | | |  \| | | |    | |    | (___    | |  | |  | | |__  | |__
   | | | . ` | | |    | |     \___ \   | |  | |  | |  __| |  __|
  _| |_| |\  |_| |_   | |     ____) |  | |  | |__| | |    | |
 |_____|_| \_|_____|  |_|    |_____/   |_|   \____/|_|    |_|*/

init();

function init()
{
	SONGS.reverse(); /* reverse chronological order */
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

		songs_container.appendChild(songbox);
		songs_container.appendChild(BR);
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
        else if(e.keyCode == 82 /*     r */) reverseSongs();
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

function reverseSongs()
{
    let kids = songs_container.childNodes;
    for(let i = kids.length - 1; i >= 0; --i)
    {
        let child = songs_container.removeChild(kids[i]);
        songs_container.appendChild(child);
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

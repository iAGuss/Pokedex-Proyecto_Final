// const pokemons = [
//   {
//     name: "Bulbasaur",
//     height: "0,7m",
//     weight: "6,9kg",
//     stats: {
//       hp: 45,
//       atk: 49,
//       def: 49,
//       spd: 65,
//       satk: 65,
//       sdef: 45,
//     },
//     moves: ["Overgrow", "Chlorophyll"],
//     types: ["Grass", "Poison"],
//     type1color: "#74CB48",
//     type2color: "#A43E9E",
//     number: "#001",
//     color: "#74CB48",
//     cursor:
//       " url(https://cur.cursors-4u.net/games/gam-7/gam648.cur), auto !important;",
//     description:
//       "There is a plant seed on it's back right from the day this Pokémon is born. The seed slowly grows larger",
//   },

//   {
//     name: "Charmander",
//     height: "0,6m",
//     weight: "8,5kg",
//     stats: {
//       hp: 39,
//       atk: 52,
//       def: 43,
//       spd: 65,
//       satk: 60,
//       sdef: 50,
//     },
//     moves: ["Blaze", "Power"],

//     types: ["Fire"],
//     number: "#004",
//     color: "#F57D31",
//     type1color: "#F57D31",
//     type2color: "",
//     cursor:
//       " url(https://cur.cursors-4u.net/games/gam-7/gam648.cur), auto !important;",
//     description: "8",
//   },

//   {
//     name: "Squirtle",
//     height: "0,5m",
//     weight: "9,0kg",
//     stats: {
//       hp: 44,
//       atk: 48,
//       def: 65,
//       spd: 43,
//       satk: 50,
//       sdef: 64,
//     },
//     moves: ["Torrent", "Rain-dish"],
//     types: ["Water"],
//     number: "#007",
//     color: "#6493EB",
//     type1color: "#6493EB",
//     type2color: "",
//     cursor:
//       " url(https://cur.cursors-4u.net/games/gam-7/gam648.cur), auto !important;",
//     description:
//       "Shoots water at prey while in the water. Withdraws into it's shell when in danger",
//   },
//   {
//     name: "ButterFree",
//     height: "11m",
//     weight: "3,20kg",
//     stats: {
//       hp: 60,
//       atk: 45,
//       def: 50,
//       spd: 70,
//       satk: 90,
//       sdef: 80,
//     },
//     moves: ["Compound-eyes", "Tinted-lens"],
//     types: ["Bug", "Flying"],
//     number: "#012",
//     color: "#A7B723",
//     type1color: "#A7B723",
//     type2color: "#A891EC",
//     cursor:
//       " url(https://cur.cursors-4u.net/games/gam-7/gam648.cur), auto !important;",
//     description:
//       "In battle, it flaps it's wings at high speed to release highly toxic dust into the air",
//   },
//   {
//     name: "Pikachu",
//     height: "0.4m",
//     weight: "6,0kg",
//     stats: {
//       hp: 35,
//       atk: 55,
//       def: 40,
//       spd: 90,
//       satk: 50,
//       sdef: 50,
//     },
//     moves: ["Static", "Lightning-rod"],
//     types: ["Electric"],
//     number: "#025",
//     color: "#F9CF30",
//     type1color: "#F9CF30",
//     type2color: "",
//     cursor:
//       " url(https://cur.cursors-4u.net/games/gam-7/gam648.cur), auto !important;",
//     description:
//       "It keeps its tail raised to monitor its surroundings. If you yank it's tail, it will try to bite you",
//   },
//   {
//     name: "Gastly",
//     height: "1.3m",
//     weight: "1kg",
//     stats: {
//       hp: 30,
//       atk: 35,
//       def: 30,
//       spd: 80,
//       satk: 100,
//       sdef: 35,
//     },
//     moves: ["Static"],
//     types: ["Ghost", "Poison"],
//     color: "#70559B",
//     type1color: "#70559B",
//     type2color: "#A43E9E",
//     cursor:
//       " url(https://cur.cursors-4u.net/games/gam-7/gam648.cur), auto !important;",
//     description:
//       "Almost invisible, this gaseous POKéMON cloaks the target and puts it to sleep without notice.",
//     number: "#082",
//   },
//   {
//     name: "Ditto",
//     height: "0.3m",
//     weight: "40kg",
//     stats: {
//       hp: 48,
//       atk: 48,
//       def: 48,
//       spd: 48,
//       satk: 48,
//       sdef: 48,
//     },
//     moves: ["Limber", "Imposter"],
//     types: ["Normal"],
//     color: "#AAA67F",
//     type1color: "#AAA67F",
//     type2color: "",
//     cursor:
//       " url(https://cur.cursors-4u.net/games/gam-7/gam648.cur), auto !important;",
//     description:
//       "Capable of copying an enemy's genetic code to instantly transform itself into a duplicate of the enemy.",
//     number: "#132",
//   },
//   {
//     name: "Mew",
//     height: "0.4m",
//     weight: "40kg",
//     stats: {
//       hp: 100,
//       atk: 100,
//       def: 100,
//       spd: 100,
//       satk: 100,
//       sdef: 100,
//     },
//     moves: ["Synchronize"],
//     types: ["Psychic"],
//     color: "#FB5584",
//     type1color: "#FB5584",
//     type2color: "",
//     cursor:
//       " url(https://cur.cursors-4u.net/games/gam-7/gam648.cur), auto !important;",
//     description:
//       "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.",
//     number: "#182",
//   },
//   {
//     name: "Aron",
//     height: "0.4m",
//     weight: "600kg",
//     stats: {
//       hp: 50,
//       atk: 70,
//       def: 100,
//       spd: 30,
//       satk: 40,
//       sdef: 40,
//     },
//     moves: ["Synchronize"],
//     types: ["Steel", "Rock"],
//     color: "#B789D0",
//     type1color: "#B789D0",
//     type2color: "#B69E31",
//     cursor:
//       " url(https://cur.cursors-4u.net/games/gam-7/gam648.cur), auto !important;",
//     description:
//       "This POKéMON has a body of steel. To make its body, ARON feeds on iron ore that it digs from mountains. Occasionally, it causes major trouble by eating bridges and rails.",
//     number: "#304",
//   },
// ];
// export default pokemons;
//(45,49,49,65,65,45,1),
// (39,52,43,65,60,50,2),
// (44,48,65,43,50,64,3),
// (60,45,50,70,90,80,4),
// (35,55,40,90,50,50,5),
// (30,35,30,80,100,35,6),
// (48,48,48,48,48,48,7),
// (100,100,100,100,100,100,8),
// (50,70,100,30,40,40,9)
// ;
//----------------------------------------moves-------------------------------------------------------------------
// INSERT INTO public.tipos(
// 	name, id, idpokemon, name2, typecolor1, typecolor2)
// ('Grass', '1', '001', 'Poison','#74CB48','#A43E9E'),
//      ('Fire', '2', '#004', '','#F57D31',''),
//     ('Water', '3', '#007', '','#6493EB',''),
//     ('Bug', '4', '#012', 'Flying','#A7B723','#A891EC'),
//    ('Electric', '5', '#025', '','#F9CF30',''),
//      ('Ghost', '6', '#082', 'Poison','#70559B','#A43E9E'),
//     ('Normal', '7', '#132', '','#AAA67F',''),
//     ('Psychic', '8', '#182', '','#FB5584',''),
//      ('Steel', '9', '#304', 'Rock','#B789D0','#B69E31');
// //---------------------------------------types--------------------------------------------------------------------
// VALUES ('Grass', '', '', 'Poison'),
//     ('Fire', '', '', ''),
//     ('Water', '', '', ''),
//     ('Bug', '', '', 'Flying'),
//     ('Electric', '', '', ''),
//     ('Ghost', '', '', 'Poison'),
//     ('Normal', '', '', ''),
//     ('Psychic', '', '', ''),
//     ('Steel', '', '', 'Rock');

// INSERT INTO public.moves(
// 	name, id, idpokemon, name2)
// 	VALUES('Overgrow',1,'001', 'Chlorophyll'),
//     ('Fire', 2,'004', ''),
//     ('Torrent', 3,'#007', 'Rain-dish'),
//     ('Compound-eyes',4, '#012', 'Tinted-lens'),
//     ('Static', 5, '#025', 'Lightning-rod'),
//      ('Static', 6, '#082', ''),
//     ('Limber', 7, '#132', 'Imposter'),
//     ('Synchronize', 8, '#182', ''),
//      ('Synchronize', 9, '#304', '');

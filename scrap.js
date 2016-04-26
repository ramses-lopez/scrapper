var fs = require('fs');
var parser = require('xml2json');
var xml = fs.readFileSync('pages/fifa_venezuela.html', 'utf8');
var inspect = require('util').inspect;

var json = parser.toJson(xml) //returns a string containing the JSON structure by default
var root = JSON.parse(json)

var teams = root.div.ul.li;

//console.log(inspect(teams[0].a.div[0].img[0].src, { colors: true, depth: Infinity }))

parsedTeams = []

teams.forEach(function(actual){
	var l = actual.a.div[0].img[0].src.length;

	parsedTeams.push({
		fifaLink: actual.a.href,
		name: actual.a.title.toUpperCase(),
		logoSmall: actual.a.div[0].img[0].src,
		logoMedium: actual.a.div[0].img[0].src.substring(0,l-5) + '4.png',
		logoBig: actual.a.div[0].img[0].src.substring(0,l-5) + '5.png'
	});
});

console.log('parsedTeams', parsedTeams);
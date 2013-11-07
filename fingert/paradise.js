var fs = require('fs');

var text = fs.readFileSync(__dirname + '/../paradise.txt').toString();

//console.log(text);


var wordCounts = {};

var words = text.split('\n').join(' ').split(' ');

words.forEach(function (item){
	if(wordCounts.hasOwnProperty(item)) {
		wordCounts[item] += 1;
	} else {
		wordCounts[item];
	}
});

var currentMostPopularWord;
var currentTopTimesUsed = 0;

// for (var word in wordCounts) {
	
// }

for(var i = 0; i < words.length; i++){
    wordCounts["_" + words[i]] = (wordCounts["_" + words[i]] || 0) + 1;
    if (wordCounts[words] > currentTopTimesUsed) {
		currentTopTimesUsed = wordCounts[words]
		
	}
}

//var max = Math.max(words);
console.log(currentMostPopularWord);



/*

fs.readfile('/etc/passwd', function (err, data){
  

}); */
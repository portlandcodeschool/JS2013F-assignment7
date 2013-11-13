var fs = require('fs');

var text = fs.readFileSync(__dirname + '/paradise.txt').toString().toLowerCase();

var words = text.split(/[?;)(., \n]+/);

var wordCounts = {};

words.forEach(function (item) {
    if (wordCounts.hasOwnProperty(item)) {
        wordCounts[item] += 1;
    } else {
        wordCounts[item] = 1;
    }
});

var uniqueWords = [];

for (var word in wordCounts) {
    uniqueWords.push(word);
}

uniqueWords.sort(function (a, b) {
    return wordCounts[b] - wordCounts[a];
});

for (var i = 0; i < 100; i++) {
    console.log(uniqueWords[i] + " is used " + wordCounts[uniqueWords[i]] + " times");
}
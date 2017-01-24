var t;
var data;
var entries = [];
var n;
var fontRegular;
var r, g, b;
var r1, g1, b1;
var l = 0;

function preload() {
    fontRegular = loadFont("assets/Museo_Slab_500_2.otf");
    var url = 'https://spreadsheets.google.com/feeds/list/1-tM404sCGoyRQYeUCge1qFpfRLt92lfuyYAA0ESN2O8/od6/public/values?alt=json';
    data = loadJSON(url);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

function setup() {
    getLines();
    noCanvas();
}


function draw() {}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function getLines() {
    for (var i = 0; i < data.feed.entry.length; i++) {
        n = data.feed.entry.length;
        var line = data.feed.entry[i].title.$t + " in " + data.feed.entry[i].gsx$_cokwr.$t + ", " + data.feed.entry[i].gsx$_cpzh4.$t + ".";
        console.log(line);
        entries.push(line);
    }

    entries = shuffle(entries);
    start();
}

function start() {

    setInterval(function() {
        r1 = int(random(255));
        g1 = int(random(255));
        b1 = int(random(255));
        var p = document.createElement('p');
        p.style.color = 'rgb(' + r1 + ',' + g1 + ',' + b1 + ')';
        p.textContent = entries[l];
        var items = document.getElementById('items');
        items.insertBefore(p, items.firstChild);
        l++;
        if (l > entries.length - 1) l = 0;
    }, 1300);
}

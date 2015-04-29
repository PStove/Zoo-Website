var home = function() {
        document.getElementById("home").style.color="blue"
};

var about = function() {
        document.getElementById("about").style.color="blue"
};

var contact = function() {
        document.getElementById("contact").style.color="blue"
};

var ian = function () {
    document.getElementById("home").style.color="black"
};

var preston = function () {
    document.getElementById("about").style.color="black"
};

var cara = function () {
    document.getElementById("contact").style.color="black"
};

var tyler = function() {
    if (document.getElementById("symbol2").style.visibility == "hidden") {
        document.getElementById("symbol2").style.visibility="visible"
    }
    else {
        document.getElementById("symbol2").style.visibility="hidden"
    }
};
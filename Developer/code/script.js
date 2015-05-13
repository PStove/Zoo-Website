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

var ian2 = function() {                window.open("https://www.google.com/maps/space/moon/@-8.4685202,114.8521308,8396037m/data=!3m1!1e3?hl=en.")
};

var preston2 = function() {
    document.getElementById("all").style.visibility="hidden";
    document.getElementById("backgroung").style.visibility="visible";
};
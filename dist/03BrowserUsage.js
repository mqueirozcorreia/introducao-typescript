"use strict";
var basic = require("./01Basic");
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = basic.personHelloWorld(new basic.Student("First", "Middle", "Last"));
}
showHello("greeting", "TypeScript");

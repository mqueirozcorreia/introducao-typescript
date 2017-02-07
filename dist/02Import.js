"use strict";
//É possível importar com um alias diferente do módulo principal
//https://www.typescriptlang.org/docs/handbook/modules.html
var basic = require("./01Basic");
console.log('Função exportada:' + basic.personHelloWorld);
console.log(basic.personHelloWorld(new basic.Student("Mateus", "", "Correia")));

//Este arquivo serve também de entrypoint para o browserify
import * as basic from "./01Basic";

//Função que modifica o html 03BrowserUsage.html
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = basic.personHelloWorld(new basic.Student("Mateus", "Q", "Correia"));
}

showHello("greeting", "TypeScript");
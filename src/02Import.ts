//É possível importar com um alias diferente do módulo principal
//https://www.typescriptlang.org/docs/handbook/modules.html
//Neste caso está sendo importado tudo que foi exportado no arquivo 01Basic, disponível no alias basic
import * as basic from "./01Basic";

console.log('Função exportada:' + basic.personHelloWorld);

console.log(basic.personHelloWorld(new basic.Student("Mateus", "", "Correia")));
//Definição de classe Student com construtor
//A palavra chave export é para informar que esta classe é acessível através de import por outro modulos
export class Student {
    fullName: string;
    //propriedade só modificação no momento da criação
    readonly createdAt : Date;
    constructor(public firstName : string, public middleInitial : string, public lastName : string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
        this.createdAt = new Date;
    }
}

//Inderface não precisam ser implementadas. Se qualquer classe implementar o corpo identico, ele implementa a interface
interface Person {
    firstName: string;
    //Propriedade opcional tem o '?' na frente do nome
    age?: number;
    lastName: string;
    fullName: string;
}

//Priorize o uso de let e const ao invés de var (it uses what some call lexical-scoping or block-scoping)
//https://www.typescriptlang.org/docs/handbook/variable-declarations.html
let user = new Student("Mateus", "Q.", "Correia");

//Repare que passou o Student como Person(para a função helloWorld), sem haver implementação da interface
console.log('01Basic.ts:' + helloWorld(user));

function helloWorld(person : Person) {
    //Uso do template string 
    //These strings are surrounded by the backtick/backquote (`) character, and embedded expressions are of the form ${ expr }.
    //https://www.typescriptlang.org/docs/handbook/basic-types.html
    return `Hello, ${ person.fullName }`;
}

//Exporta a função helloWorld para ser utilizada em outros módulos
//https://www.typescriptlang.org/docs/handbook/modules.html
//É possível renomear o que será utilizado pelos consumidores
export { helloWorld as personHelloWorld };
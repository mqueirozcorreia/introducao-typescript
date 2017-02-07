"use strict";
//Definição de classe com construtor
//A palavra chave export é para informar que esta classe é acessível através de import por outro modulos
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
        this.createdAt = new Date;
    }
    return Student;
}());
exports.Student = Student;
//Priorize o uso de let e const ao invés de var (it uses what some call lexical-scoping or block-scoping)
//https://www.typescriptlang.org/docs/handbook/variable-declarations.html
var user = new Student("Mateus", "Q.", "Correia");
//Repare que passou o Student como Person(para a função helloWorld), sem haver implementação da interface
console.log(helloWorld(user));
//Exporta a função helloWorld para ser utilizada em outros módulos
//https://www.typescriptlang.org/docs/handbook/modules.html
function helloWorld(person) {
    //Uso do template string 
    //These strings are surrounded by the backtick/backquote (`) character, and embedded expressions are of the form ${ expr }.
    //https://www.typescriptlang.org/docs/handbook/basic-types.html
    return "Hello, " + person.fullName;
}
exports.personHelloWorld = helloWorld;

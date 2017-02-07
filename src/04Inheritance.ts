/*******************
 * Exemplo extraído da documentação do TypeScript no 
 * http://www.typescriptlang.org/docs/handbook/classes.html
 * 
 * Este arquivo será executado pelo Node.js
 * Depois de transpilar, você poderá executa-lo pelo comando
 * Node dist/04Inheritance.js
  */
class Animal {
    //todo membro é público por padrão (diferente do C#)
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

//Herança usa a palavra reservada extends
class Snake extends Animal {
    constructor(name: string) 
    {
        //Deve chamar o construtor do pai com o super
        super(name); 
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
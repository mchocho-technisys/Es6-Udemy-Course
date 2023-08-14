//Vamos a ver como crear clases con el nuevo ES6
class SuperHero {
    constructor(name, strength, speed, weapon, cape) {
        this.name = name;
        this.strength = strength;
        this.speed = speed;
        this.weapon = weapon;
        this.cape = cape;
    }

    powerUp() {
        this.strength += 5;
    }
}

let hero = new SuperHero("Thor", 10, 8, "Mjolnr", true);
hero.powerUp();
console.log(hero);
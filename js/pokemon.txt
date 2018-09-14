function Pokemon(name, type, hp, def, atk, legend){
    if(typeof name !== "string"){
        throw "Pokemon name is not a string!"
    }
    if(typeof type !== "string"){
        throw "Pokemon type is not a string!"
    }
    if(typeof hp !== "number"){
        throw "Pokemon hp is not a number!"
    }
    if(typeof def !== "number"){
        throw "Pokemon def is not a number!"
    }
    if(typeof atk !== "number"){
        throw "Pokemon atk is not a number!"
    }
    if(typeof legend !== "boolean"){
        throw "Pokemon legend is not a boolean!"
    }

    //if its our first instantiation
    

    this.name = name;
    this.type = type;
    this.hp = hp;
    this.def = def;
    this.atk = atk;
    this.legend = legend;

    this.attack = function(target){
        if(target instanceof Pokemon){
            target.hp = target.hp - (this.atk - target.def)
        }
        else{
            throw "Parameter is not a Pokemon!"
        }
    }

    this.aliveCheck = function(){
        return this.hp > 0;
    }

    if(Pokemon.all == undefined){
        Pokemon.all = [];
        Pokemon.all.push(this);
    }
    else{
        Pokemon.all.push(this);
    }
}

var pikachu = new Pokemon("Pikachu", "Electric", 100, 15, 50, false);
var golem = new Pokemon("Golem", "Rock", 200, 30, 20, false);

pikachu.attack(golem);
console.log(golem.hp);

console.log(Pokemon.all);
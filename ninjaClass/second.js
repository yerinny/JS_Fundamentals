
function Ninja(name, health){


    var speed = 3;
    var strength = 3; 
    this.name = name;
    this.health = 100;

    this.sayName = function()
    {
        console.log("My name is " + this.name)
    }
    this.showStats = function()
    {
        console.log("Name: "+ this.name + " health: "+ this.health + " speed: "+ speed + " strength: " + strength);    
    }
    this.drinkSake  = function()
    {
        totalHealth = this.health+=10
        console.log(totalHealth);
    }
    this.punch = function(Ninja) {
        Ninja.health-=5;
		console.log(Ninja.name + " was punched by " + this.name + " and lost 5 health!");
    }
    this.kick = function (Ninja) {
        Ninja.health -= 15;
        console.log(Ninja.name + " was kicked by " + this.name + " and lost 15 Health!")
        }
};

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
blueNinja.showStats();
redNinja.showStats();
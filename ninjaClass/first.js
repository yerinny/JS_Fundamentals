
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
};

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
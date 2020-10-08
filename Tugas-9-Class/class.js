// Soal 1
// Relase 0
class Animal {
    constructor(name) {
      this._name = name;
      this.legs = 4;
      this.cold_bolded = false;
    }
    get name() {
      return this._name;
    }
  
    set name(newName) {
      this._name = newName;
    }
  }
  
  var sheep = new Animal("Shaun");
  console.log(sheep.name);
  console.log(sheep.legs);
  console.log(sheep.cold_bolded);
  
  class Ape extends Animal {
    constructor(name) {
      super(name);
      this.legs = 2;
    }
  
    yell() {
      console.log("Auoooo");
    }
  }
  
  class Frog extends Animal {
    constructor(name) {
      super(name);
    }
  
    jump() {
      console.log("Hop Hop");
    }
  }
  
  var sungokong = new Ape("Kera Sakti");
  sungokong.yell();
  var kodok = new Frog("Buduk");
  kodok.jump();


//Soal 2

console.log();
console.log("Soal 2");

class Clock {
    constructor({ template }){
        this._template = template
        this._timer
    }
    
    render() {
        this._date = new Date()
        this._hours = this._date.getHours()
        if (this._hours < 10) this._hours = '0' + this._hours
  
        this._mins = this._date.getMinutes()
        if (this._mins < 10) this._mins = '0' + this._mins
  
        this._secs = this._date.getSeconds()
        if (this._secs < 10) this._secs = '0' + this._secs
  
        this._output = this._template
        .replace('h', this._hours)
        .replace('m', this._mins)
        .replace('s', this._secs);
  
      console.log(this._output)
    }
  
    stop() {
      clearInterval(this._timer)
    }
  
    start() {
      this.render()
      this._timer = setInterval(this.render.bind(this), 1000)
    }
  
  }
  
var clock = new Clock({template: 'h:m:s'})
clock.start(); 
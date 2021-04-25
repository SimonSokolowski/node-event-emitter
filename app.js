var events = require("events");
// var util = require("util");

// var myEmitter = new events.EventEmitter();

// myEmitter.on("someEvent", function(msg){
//     console.log(msg);
// });

// myEmitter.emit("someEvent", "event was emitted");

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person("James");
var mary = new Person("Mary");
var ryan = new Person("Ryan");
var people = [james, mary, ryan];

people.forEach(function(person){
    person.on("speak", function(msg){
        console.log(person.name + " said " + msg);
    });
});

james.emit("speak", "hey");
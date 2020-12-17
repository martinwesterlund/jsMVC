var Participant = function(name){
    this.name = name;
    this.course = null;
}

Participant.prototype = {
    send: function(message, to){
        this.course.send(message, this, to);
    },
    receive: function(message, from){
        console.log(from.name + ' to ' + this.name + ': ' + message)
    }
}

var Course = function () {
  let participants = {};

  return {
    register: function (participant) {
      participants[participant.name] = participant;
      participant.course = this;
    },

    send: function (message, from, to) {
      if (to) {
        to.receive(message, from);
      } else {
      for(key in participants){
          if(participants[key] !== from){
              participants[key].receive(message, from)
          }
      }}
    },
  };
};

let martin = new Participant('Martin')
let hanna = new Participant('Hanna')
let annaJ = new Participant('AnnaJ')
let larre = new Participant('Larre')

let course = new Course()
course.register(martin)
course.register(hanna)
course.register(annaJ)
course.register(larre)

martin.send('Hej allihop')
martin.send('Hej Hanna', hanna)



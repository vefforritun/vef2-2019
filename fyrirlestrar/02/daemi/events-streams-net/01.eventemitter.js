/*
Keyrt með:
node 01.eventemitter.js

Pulse event emitter sem tekur við millisekundum í `start(n)` og gefur frá sér
_púls_ á þeim fresti þar til kallað er í `stop()`.
*/

const EventEmitter = require('events');

class Pulse extends EventEmitter {
  pulse() {
    this.emit('pulse');
  }

  start(n) {
    this.id = setInterval(() => this.pulse(), n);
  }

  stop() {
    clearInterval(this.id);
  }
}

const pulse = new Pulse();

let i = 0;
pulse.on('pulse', () => {
  i += 1;
  console.log(`pulse ${i}`);

  if (i === 3) {
    pulse.stop();
  }
});

pulse.start(1000);

/*
Keyrt með:
node 04.tcp.js

Keyrir upp TCP server sem svarar á localhost porti 9000
Tengst með telnet client af sömu tölvu í nýrri skel, t.d.
> telnet localhost 9000

Server mun láta vita af tengdum clientum og skrifa til allra það sem hver
skrifar til servers
*/

const net = require('net');

const server = net.createServer();
const clients = [];
let i = 0;

server.on('connection', (client) => {
  i += 1;
  const name = `#${i}`;

  console.log('client', i, 'connected');
  clients.push(client);

  client.write(`Hi there client ${name}\n`);

  client.on('data', (data) => {
    clients.forEach((c) => {
      c.write(`${name}: ${data.toString('utf8')}`);
    });
  });

  client.on('close', () => {
    console.log(name, 'left');
    clients.splice(clients.indexOf(client), 1);
  });
});

server.listen(9000);

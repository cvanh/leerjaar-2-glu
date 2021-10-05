const {
    createServer
} = require('http');
const {
    parse
} = require('url');
const {
    WebSocketServer
} = require('ws');

const server = createServer();
const wss1 = new WebSocketServer({
    noServer: true
});
const wss2 = new WebSocketServer({
    noServer: true
});
const WssPort = 7072;

wss1.on('connection', function connection(ws) {
    ws.on('message', function incoming(data, isBinary) {
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(data, { binary: isBinary });
        }
      });
    });
  });

wss2.on('connection', (ws) => {
    console.log('connection')
    ws.on('message', (m) => {
        const data = JSON.parse(m)
        console.log(data)
    })
});

server.on('upgrade', (request, socket, head) => {
    const {
        pathname
    } = parse(request.url);
    switch (pathname) {
        case '/bar': // for assaignment 1 a unique ws end point
            wss1.handleUpgrade(request, socket, head, function done(ws) {
                wss1.emit('connection', ws, request);
            });
            break;
        case '/bar':// for assaignment 2 a unique ws end point
            wss2.handleUpgrade(request, socket, head, function done(ws) {
                wss2.emit('connection', ws, request);
            });
            break;
        default:
            socket.destroy();
            break;
    }

});

server.listen(WssPort);
console.log(`starting a wss server on ${WssPort}`)
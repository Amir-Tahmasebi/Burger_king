const PeerServer = require('peer').PeerServer;
const server = new PeerServer({
    port : process.env.PEER_PORT,
    path : '/messenger'
})
const startPeerServer = () => {
    server.on('connection', client => {
        // console.log(`${client} connected`, client);
    })
}

module.exports = startPeerServer;
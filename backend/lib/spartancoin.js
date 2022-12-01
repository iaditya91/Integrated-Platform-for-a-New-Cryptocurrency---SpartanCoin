const HttpServer = require('./httpServer');
const Blockchain = require('./blockchain');
const Operator = require('./operator');
const {PoWMiner, PoETMiner, EnhancedPoETMiner} = require('./miner');
const Node = require('./node');

module.exports = function spartancoin(host, port, peers, logLevel, name) {
    host = process.env.HOST || host || 'localhost';
    port = process.env.PORT || process.env.HTTP_PORT || port || 3001;
    peers = (process.env.PEERS ? process.env.PEERS.split(',') : peers || []);
    peers = peers.map((peer) => { return { url: peer }; });
    logLevel = (process.env.LOG_LEVEL ? process.env.LOG_LEVEL : logLevel || 6);    
    name = process.env.NAME || name || '1';

    require('./util/consoleWrapper.js')(name, logLevel);

    console.info(`Starting node ${name}`);

    let blockchain = new Blockchain(name);
    let operator = new Operator(name, blockchain);
    let powminer = new PoWMiner(blockchain, logLevel);
    let poetminer = new PoETMiner(blockchain, logLevel);
    let enhancedpoetminer = new EnhancedPoETMiner(blockchain, logLevel);
    let node = new Node(host, port, peers, blockchain);
    let httpServer = new HttpServer(node, blockchain, operator, powminer, poetminer, enhancedpoetminer);

    httpServer.listen(host, port);
};
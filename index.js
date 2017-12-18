const NodeCli = require('./wxclient/nodecli')
//foreach todo 
const config = require('./wxclient/nodecli/demo_turing.json')
let client = new NodeCli(config);
client.start();
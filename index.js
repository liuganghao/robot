const NodeCli = require('./wxclient/nodecli')
//foreach todo 
const setting = require('./wxclient/nodecli/demo_turing.json')
let client = new NodeCli(setting);
client.start();
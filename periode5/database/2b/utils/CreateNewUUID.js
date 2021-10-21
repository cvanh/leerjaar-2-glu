const { v4: uuidv4 } = require('uuid');

function CreateNewUUID() {
    return uuidv4();      
}
module.exports = CreateNewUUID;
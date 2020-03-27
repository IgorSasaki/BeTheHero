const crypto = require('crypto');

module.export = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}
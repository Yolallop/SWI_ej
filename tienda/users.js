const bcrypt = require("bcrypt");

const users = {};

users.comparePass = function(pass, hash, callback){
    bcrypt.compare(pass, hash, callback);
}

users.generateHash = function(pass, callback){
    bcrypt.hash(pass, 10, callback);
}

users.registro = function(username, pass, callback){
    users.generateHash(pass, function(err, hash){
        users[username] = {username, hash};
        if (callback) {
            callback();
        };
    });
}

users.registro('admin', 'admin', function(){
    console.log('User admin successfully registered');
});
users.registro('user', 'user');

module.exports = users;
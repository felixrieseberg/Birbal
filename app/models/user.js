var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var connection = mongoose.connections[0];
autoIncrement.initialize(connection);

var clientSchema = mongoose.Schema({
    name            : String,
    user            : String,
    password        : String
});

var screennameSchema = mongoose.Schema({
    name            : String
});

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    clients          : [{ type: Schema.Types.ObjectId, ref: 'Client' }],
    screennames      : [{ type: Schema.Types.ObjectId, ref: 'Screenname' }],
    userID           : Number

});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
userSchema.plugin(autoIncrement.plugin, { model: 'User', field: 'userID' });
module.exports = mongoose.model('Client', clientSchema);
module.exports = mongoose.model('Screenname', screennameSchema);
module.exports = mongoose.model('User', userSchema);
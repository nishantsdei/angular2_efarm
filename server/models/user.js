var mongoose = require("mongoose");
var Schema = require("mongoose").Schema;
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
var UserSchema = Schema({
    firstName			: { type: String},
    lastName			: { type: String},
    email				: { type: String},
    username			: { type: String},
    password 			: { type: String},
    createdOn			: { type: Date, default: new Date() },
    updatedOn			: { type: Date}
});
UserSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.__v;
    return obj;
}

UserSchema.pre('save', true, function(next,done) {
    this.password = bcrypt.hashSync(this.password,salt);
    done(null,this);
    next()
});


module.exports = mongoose.model('User', UserSchema);


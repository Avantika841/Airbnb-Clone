const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;
const UserSchema = new Schema({
    email: {
     type : String ,
    required : true
}
//for username and password passport local mongoose define automatically.

});
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('user',UserSchema);
const DB = require('../configs/db');
const { Schema } = require('mongoose');

const userSchema = new Schema({
   fullname: {
      type: String,
      required: [true, 'Fullname is require!'],
   },
   email: {
      type: String,
      required: [true, 'Email is require!'],
      unique: [true, 'Email already taken!']
   },
   phone: {
      type: String,
      required: [true, 'Phone number is require!'],
   },
   password: {
      type: String,
      required: [true, 'Password is require!'],
   },
   verified: {
      type: Boolean,
      default: false
   }

}, { timestamps: true });

const UserModel = DB.model("Users", userSchema);

module.exports = UserModel;

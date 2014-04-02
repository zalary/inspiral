/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var bcrypt = require('bcrypt');

module.exports = {

  schema: true,

  attributes: {

    name: {
      type: 'string',
      required: true
    },

    username: {
      type: 'string',
      required: true,
      unique: true
    },

    email: {
      type: 'email',
      email: true,
      required: true,
      unique: true
    },

    passports: {
      collection: 'Passport',
      via: 'user'
    }

    password: {
      type: 'string',
      required: true
    }

  },

  beforeCreate: function (user, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        }else{
          user.password = hash;
          cb(null, user);
        }
      });
    });

  }
};

/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

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

    encryptedPassword: {
      type: 'string'
    }

  },

  beforeCreate: function (values, next) {
    //Check that password is correct and matches confirmation.
    if (!values.password || values.password != values.confirmation) {
      return next({err: ["Password doesn't match password confirmation."]});
    }

    require('bcrypt').hash(values.password, 10, function passwordEncrypted(err, encryptedPassword) {
      if (err) return next(err);
      values.encryptedPassword = encryptedPassword;
      next();
    });
  }

};

/**
 * Inspiration
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    //user_id: 'integer',
    //user_name: 'string', // To reduce the number of references to the user model
    //original_creator_id: 'integer', //this should be static once it's created
    //text: 'string', //static for now
    //city: 'string',
    //done: 'boolean'

    user_id: {
      type: 'integer',
      required: true
    },

    user_username: {
      type: 'string',
      required: true
    },

    original_creator_id: {
      type: 'integer',
      required: true
    },

    original_creator_name: {
      type: 'string',
      required: true
    },


    text: {
      type: 'string',
      required: true
    },

    city: {
      type: 'string'
    },

    done: {
      type: 'boolean'
    }

  }

};

/**
 * Emailer
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    email_to: {
      type: 'string',
      required: true
    },

    text: {
      type: 'string',
      required: true
    },

    subject: {
      type: 'string'
    }
  	/* e.g.
  	nickname: 'string'
  	*/

  }

};

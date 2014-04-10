/**
 * GroupUser
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    group_id: {
      type: 'integer',
      required: true,
    },

    member_id: {
      type: 'integer',
      required: true,
    },

  },

};
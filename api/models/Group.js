/**
 * Group
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  adapter: 'psdb',
  schema: true,

  attributes: {

    org: {
      type: 'string',
      required: true,
      unique: true
    },

    image_url: {
      type: 'string',
      default: '/images/kitten_small.png'
    },

    city: {
      type: 'string',
      required: true,
    },

    description: {
      type: 'text',
    },

  },

  getMembers: function(group_id) {
    GroupUser.query('SELECT groupuser (member_id) WHERE (group_id' + group_id + ')', function(err, data) {})
  },
}
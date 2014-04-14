/**
 * GroupInspiration
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    group_id: {
      type: 'integer',
      required: true
    },

    activitydate: {
      type: 'string',
      required: true
    },

    text: {
      type: 'string',
      required: true
    },

    done: {
      type: 'boolean'
    },

    location: {
      type: 'string',
      required: true
    }

  }

};

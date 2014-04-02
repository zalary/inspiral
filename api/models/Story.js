/**
 * Story
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  adapter: 'mongo',

  attributes: {

        inspiration_id: 'integer',
        pinned_from: 'integer',
        pinned_by: 'integer'

  }

};

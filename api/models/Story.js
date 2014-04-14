/**
 * Story
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  adapter: 'mongo',

  autoCreatedAt: true,
  autoUpdatedAt: false,

  attributes: {

    // Timestamp is not supported but Time, Date, and DateTime are
    updated_at: 'DATETIME',
    created_at: 'DATETIME'
  }

};

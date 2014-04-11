/**
 * GroupController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  new: function(req, res) {
    res.view();
  },

  join: function(req, res, err) {
    //only deals with join table
    GroupUser.query('INSERT INTO groupuser (group_id, member_id) VALUES (' + req.param("groupid") + ',' + req.param("memberid") + ')', function(err, data) {})
    res.send(200);
  },

  show: function(req, res) {
    var members = Group.getMembers(req.param('id'));
    Group.findOne(req.param('id'), function foundGroup(err, group) {

      res.view({
        group: group,
        members: members
      })

    });
  },

  index: function(req, res, err) {
    Group.find(req.param(), function foundGroups(err, groups) {
      res.view({
        groups: groups
      })
    })
  },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to GroupController)
   */
  _config: {}


};
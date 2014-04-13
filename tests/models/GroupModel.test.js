/**
 * Model tests
 */

var should = require('should');
var assert = require('assert');
var supertest = require('supertest');
var uuid = require('node-uuid');

function UserStub() {
  return {
    username: 'inspiral',
    name: "Inspiral",
    email: "inspiral@zalary.oib.com",
    password: "321456",
    confirmation: "321456"
  };
}

function GroupStub() {
  return {
    org: 'Inspiral',
    city: "Austin, TX"
  };
}

function GroupMissingStub() {
  return {
    org: 'Inpiral 2'
  };
}

describe('GroupActions', function() {

  afterEach(function(done) {
    // remove all groups after each test block
    Group.destroy(function(err) {
      if (err) return done(err);
      done();

    });
  });

  describe('Create', function() {

    it("Should be able to create a group", function(done) {
      Group.create(GroupStub(), function(err, group) {
        if (err) return done(err);
        assert.notEqual(group, undefined);
        done();
      });
    });

    it("Should return error on create if there is missing data", function(done) {
      var newGroup = GroupMissingStub();

      Group.create(newGroup, function(err, group) {
        err.should.not.be.empty;
        assert.equal(group, undefined);
        done();
      });

    });

  });

  describe('Find', function() {
    var groupSaved;

    before(function(done) {
      var newGroup = GroupStub();
      // create a group
      Group.create(newGroup, function(err, group) {
        if (err) return done(err);

        groupSaved = group;
        done();
      });
    });

    it("Should find by id and return one group object ", function(done) {
      var group;

      Group.findOneById(groupSaved.id).done(function(err, group) {
        if (err) return done(err);

        should.exist(group);
        group.should.be.an.instanceOf(Object);
        group.should.have.property('org', groupSaved.org);
        group.should.have.property('city', groupSaved.city);
        group.should.have.property('id', groupSaved.id);

        done();
      });
    });

  });

  describe('Delete', function() {
    var groupSaved;

    before(function(done) {
      var newGroup = GroupStub();
      // create a group
      Group.create(newGroup, function(err, group) {
        if (err) return done(err);

        groupSaved = group;
        done();
      });
    });

    it("Should delete group by id", function(done) {
      Group.destroy({
        id: groupSaved.id
      }).done(function(err) {
        if (err) return done(err);

        Group.findOneById(groupSaved.id).done(function(err, group) {
          if (err) return done(err);

          should.not.exist(group);

          done();
        });

      });
    });

  });
});

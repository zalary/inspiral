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

describe('UserModel', function () {

  afterEach(function (done) {
    // remove all users after each test block
    User.destroy(function (err) {
      if (err) return done(err);
      done();

    });
  });

  describe('Create', function () {

    it("Should be able to create a user", function (done) {
      User.create(UserStub(), function (err, user) {
        if (err) return done(err);
        assert.notEqual(user, undefined);
        done();
      });
    });

    it("Should return error on create user with already registered username", function (done) {
      var newUser = UserStub();

      // first create one user
      User.create(newUser, function (err, userCreated) {
        if (err) return done(err);

        User.create(newUser, function (err, user) {
          err.should.not.be.empty;
          //err.should.equal(
          //'duplicate key value violates unique constraint "user_username_key"'
          //);
          assert.equal(user, undefined);
          done();
        });

      });
    });

  });

  describe('Find', function () {
    var userSaved;

    before(function (done) {
      var newUser = UserStub();
      // create one user
      User.create(newUser, function (err, user) {
        if (err) return done(err);

        userSaved = user;
        done();
      });
    });

    it("Should find by id and return one user object ", function (done) {
      var user;

      User.findOneById(userSaved.id).done(function (err, user) {
        if (err) return done(err);

        should.exist(user);
        user.should.be.an.instanceOf(Object);
        user.should.have.property('email', userSaved.email);
        user.should.have.property('name', userSaved.name);
        user.should.have.property('id', userSaved.id);

        done();
      });
    });

  });

  //No Update tests now as we have no update option
  //describe('Update', function() {

  //var userSaved;

  //before(function (done) {
  //var newUser = UserStub();
  //// create one user
  //User.create(newUser, function(err, user) {
  //if(err) return done(err);

  //userSaved = user;
  //done();
  //});
  //});

  //it("Should update one user by id", function(done) {
  //var userDataToUpdate = {
  //name: uuid.v1()
  //};

  //User.update({
  //id: userSaved.id
  //}, userDataToUpdate ).done(function (err, users) {
  //if(err) return done(err);

  //users.should.be.instanceof(Array);
  //users.should.have.lengthOf(1);

  //users[0].should.be.instanceof(Object);
  //// check if are same user
  //users[0].should.have.property('id', userSaved.id);
  //// check if is updated
  //users[0].should.include(userDataToUpdate);

  //done();

  //});
  //});

  //it("Should update a user password");

  //it("Should update a user config");

  //});

  describe('Delete', function () {
    var userSaved;

    before(function (done) {
      var newUser = UserStub();
      // create one user
      User.create(newUser, function (err, user) {
        if (err) return done(err);

        userSaved = user;
        done();
      });
    });

    it("Should delete user by id", function (done) {
      User.destroy({
        id: userSaved.id
      }).done(function (err) {
        if (err) return done(err);

        User.findOneById(userSaved.id).done(function (err, user) {
          if (err) return done(err);

          should.not.exist(user);

          done();
        });

      });
    });

  });
});

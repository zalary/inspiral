/**
 * Model tests
 */

var should = require('should');
var assert = require('assert');
var supertest = require('supertest');
var uuid = require('node-uuid');

function InspirationStub () {
  return {
    user_id: 1,
    original_creator_id: 2,
    city: "Austin",
    text: "inspirational text" 
  };
}

function InspirationMissingStub () {
  return {
    original_creator_id: 2,
    city: "Austin",
    text: "inspirational text" 
  };
}


describe('InspirationModel', function() {

  afterEach(function(done){
    // remove all users after each test block
    Inspiration.destroy(function (err) {
      if(err) return done(err);
      done();

    });
  });

  describe('Create', function() {


    it("Should be able to create an inspiration", function(done) {
      Inspiration.create(InspirationStub(), function(err, insp) {
        if(err) return done(err);
        assert.notEqual(insp, undefined);
        done();
      });
    });

    it("Should return error on create if there is missing data", function(done) {
      var newInsp = InspirationMissingStub();


        Inspiration.create(newInsp, function(err, insp) {
          err.should.not.be.empty;
          assert.equal(insp, undefined);
          done();
        });

     
    });

  });


  describe('Find', function() {
    var inspSaved;

    before(function (done) {
      var newInsp = InspirationStub();
      // create one user
      Inspiration.create(newInsp, function(err, insp) {
        if(err) return done(err);

        inspSaved = insp;
        done();
      });
    });

    it("Should find by id and return one user object ", function(done) {
      var inspiration;

      Inspiration.findOneById(inspSaved.id).done(function(err, insp){
        if(err) return done(err);

        should.exist(insp);
        insp.should.be.an.instanceOf(Object);
        insp.should.have.property('text', inspSaved.text);
        insp.should.have.property('user_id', inspSaved.user_id);
        insp.should.have.property('id', inspSaved.id);

        done();
      });
    });

  });


  describe('Delete', function() {
    var inspSaved;

    before(function (done) {
      var newInsp = InspirationStub();
      // create one user
      Inspiration.create(newInsp, function(err, insp) {
        if(err) return done(err);

        inspSaved = insp;
        done();
      });
    });

    it("Should delete user by id", function(done) {
      Inspiration.destroy({
        id: inspSaved.id
      }).done(function (err) {
        if(err) return done(err);

        Inspiration.findOneById(inspSaved.id).done(function(err, insp){
          if(err) return done(err);
          
          should.not.exist(insp);

          done();
        });

      });
    });

  });
});


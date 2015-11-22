var should = require('should');
var assert = require('assert');
var supertest = require('supertest');

describe('Server', function() {
  var server = supertest.agent("http://localhost:8000");

  before(function(done) {
    done();
  });

  describe('GET /', function() {
    it('should print the list of the files in the specified folder', function(done) {
      server.get('/').expect(200).end(function(err, res) {
        res.status.should.equal(200);
        done();
      });
    });
  });

  describe('GET /random', function() {
    it('should return 404', function(done) {
      server.get('/random').expect(404).end(function(err, res) {
        res.status.should.equal(404);
        done();
      });
    });
  });
});

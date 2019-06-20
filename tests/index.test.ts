import request from 'supertest';
import app from '../src';

describe('app', () => {
  it('should return a successful response for GET /', done => {
    return request(app)
      .get('/')
      .expect(200, done);
  });
});

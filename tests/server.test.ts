import request from 'supertest';
import app from '../src/server';

describe('app', () => {
  it('should redirect to /api for GET /', done => {
    return request(app)
      .get('/')
      .expect('Location', '/api')
      .expect(302, done);
  });
});

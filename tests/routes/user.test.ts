import request from 'supertest';
import app from '../../src/server';

describe('app', () => {
  it('should get users for GET /api/users', done => {
    return request(app)
      .get('/api/users')
      .expect(200, done);
  });
});

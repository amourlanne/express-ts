import request from 'supertest';
import app from '../../src/server';

describe('app', () => {
  it('should get message for GET /api', done => {
    return request(app)
      .get('/api')
      .expect(200, done);
  });
});

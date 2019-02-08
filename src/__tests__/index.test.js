import request from 'supertest';
import app from '../app';

describe('sample test', () => {
  it('jest works', () => {
    expect(true).toBe(true);
  });
});

describe('index route', () => {
  it('responds 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});

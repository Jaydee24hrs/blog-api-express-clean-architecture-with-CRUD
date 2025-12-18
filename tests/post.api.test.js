const request = require('supertest');
const app = require('../app');

describe('Blog API - Full CRUD', () => {
  let createdPostId;

  it('POST /api/posts - creates a post', async () => {
    const res = await request(app)
      .post('/api/posts')
      .send({ title: 'My First Post', content: 'Hello world!' });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('My First Post');
    createdPostId = res.body.id;
  });

  it('GET /api/posts - lists all posts', async () => {
    const res = await request(app).get('/api/posts');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('GET /api/posts/:id - gets a single post', async () => {
    const res = await request(app).get(`/api/posts/${createdPostId}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(createdPostId);
  });

  it('PUT /api/posts/:id - updates a post', async () => {
    const res = await request(app)
      .put(`/api/posts/${createdPostId}`)
      .send({ title: 'Updated Title', content: 'New content' });
    expect(res.status).toBe(200);
    expect(res.body.title).toBe('Updated Title');
  });

  it('DELETE /api/posts/:id - deletes a post', async () => {
    const res = await request(app).delete(`/api/posts/${createdPostId}`);
    expect(res.status).toBe(204);

    const check = await request(app).get(`/api/posts/${createdPostId}`);
    expect(check.status).toBe(404);
  });
});
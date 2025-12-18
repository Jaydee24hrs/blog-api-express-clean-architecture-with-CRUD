const PostRepository = require('../../repositories/post.repository');
const Post = require('../../domain/post.entity');
const { v4: uuidv4 } = require('uuid');  // <-- make sure this is here

class InMemoryPostRepository extends PostRepository {
  constructor() {
    super();
    this.posts = [];
  }

  async create(postData) {
    const post = new Post({ id: uuidv4(), ...postData });
    this.posts.push(post);
    return post;
  }

  async findAll() {
    return this.posts;
  }

  async findById(id) {
    return this.posts.find(p => p.id === id) || null;
  }

  async update(id, postData) {
    const index = this.posts.findIndex(p => p.id === id);
    if (index === -1) return null;
    this.posts[index] = { ...this.posts[index], ...postData };
    return this.posts[index];
  }

  async delete(id) {
    const index = this.posts.findIndex(p => p.id === id);
    if (index === -1) return false;
    this.posts.splice(index, 1);
    return true;
  }
}

module.exports = InMemoryPostRepository;
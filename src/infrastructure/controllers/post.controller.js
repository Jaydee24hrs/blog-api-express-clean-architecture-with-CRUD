const CreatePostUseCase = require('../../use-cases/create-post.usecase');
const GetAllPostsUseCase = require('../../use-cases/get-all-posts.usecase');
const GetPostByIdUseCase = require('../../use-cases/get-post-by-id.usecase');
const UpdatePostUseCase = require('../../use-cases/update-post.usecase');
const DeletePostUseCase = require('../../use-cases/delete-post.usecase');

class PostController {
  constructor(postRepository) {
    this.createPostUseCase = new CreatePostUseCase(postRepository);
    this.getAllPostsUseCase = new GetAllPostsUseCase(postRepository);
    this.getPostByIdUseCase = new GetPostByIdUseCase(postRepository);
    this.updatePostUseCase = new UpdatePostUseCase(postRepository);
    this.deletePostUseCase = new DeletePostUseCase(postRepository);
  }

  async create(req, res) {
    try {
      const post = await this.createPostUseCase.execute(req.body);
      res.status(201).json(post);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const posts = await this.getAllPostsUseCase.execute();
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const post = await this.getPostByIdUseCase.execute(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(err.message === 'Post not found' ? 404 : 400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const post = await this.updatePostUseCase.execute(req.params.id, req.body);
      res.status(200).json(post);
    } catch (err) {
      res.status(err.message === 'Post not found' ? 404 : 400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      await this.deletePostUseCase.execute(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(err.message === 'Post not found' ? 404 : 400).json({ error: err.message });
    }
  }
}

module.exports = PostController;
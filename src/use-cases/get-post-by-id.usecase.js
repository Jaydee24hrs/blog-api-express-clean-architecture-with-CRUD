class GetPostByIdUseCase {
  constructor(postRepository) {
    this.postRepository = postRepository;
  }

  async execute(id) {
    if (!id) {
      throw new Error('Post ID is required');
    }
    const post = await this.postRepository.findById(id);
    if (!post) {
      throw new Error('Post not found');
    }
    return post;
  }
}

module.exports = GetPostByIdUseCase;
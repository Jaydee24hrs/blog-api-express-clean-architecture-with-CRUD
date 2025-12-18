class DeletePostUseCase {
  constructor(postRepository) {
    this.postRepository = postRepository;
  }

  async execute(id) {
    if (!id) {
      throw new Error('Post ID is required');
    }
    const deleted = await this.postRepository.delete(id);
    if (!deleted) {
      throw new Error('Post not found');
    }
    return true;
  }
}

module.exports = DeletePostUseCase;
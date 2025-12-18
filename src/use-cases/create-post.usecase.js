class CreatePostUseCase {
  constructor(postRepository) {
    this.postRepository = postRepository;
  }

  async execute(postData) {
    if (!postData.title || !postData.content) {
      throw new Error('Title and content are required');
    }
    return this.postRepository.create(postData);
  }
}

module.exports = CreatePostUseCase;
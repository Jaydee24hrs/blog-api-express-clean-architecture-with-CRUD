class UpdatePostUseCase {
  constructor(postRepository) {
    this.postRepository = postRepository;
  }

  async execute(id, postData) {
    if (!id) {
      throw new Error('Post ID is required');
    }
    if (!postData || Object.keys(postData).length === 0) {
      throw new Error('No update data provided');
    }
    if (postData.title === '' || postData.content === '') {
      throw new Error('Title and content cannot be empty');
    }

    const updatedPost = await this.postRepository.update(id, postData);
    if (!updatedPost) {
      throw new Error('Post not found');
    }
    return updatedPost;
  }
}

module.exports = UpdatePostUseCase;
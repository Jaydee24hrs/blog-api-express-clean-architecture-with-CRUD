const express = require('express');
const InMemoryPostRepository = require('../infrastructure/repositories/in-memory-post.repository');
const PostController = require('../infrastructure/controllers/post.controller');

const router = express.Router();
const repository = new InMemoryPostRepository();
const controller = new PostController(repository);

//CREATE
router.post('/', controller.create.bind(controller));

//READ ALL
router.get('/', controller.getAll.bind(controller));

//READ ONE
router.get('/:id', controller.getById.bind(controller));

//UPDATE
router.put('/:id', controller.update.bind(controller));

//DELETE
router.delete('/:id', controller.delete.bind(controller));

module.exports = router;
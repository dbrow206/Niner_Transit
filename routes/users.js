var express = require('express');
const controller = require('../controllers/userController');
var router = express.Router();

//GET /users/new: send html form for creating a new user account
router.get('/new', controller.new);

//GET /users/login: send html for logging in
router.get('/login', controller.getUserLogin);

router.post('/', controller.createSuggestion);
router.get('/suggestions', controller.suggestions);

module.exports = router;
const { getAll, create, getOne, remove, update } = require('../controllers/userCrud.controllers');
const express = require('express');

const userCrudRouter = express.Router();

userCrudRouter.route("/usercrud")
		.get(getAll)
		.post(create);

userCrudRouter.route("/usercrud/:id")
		.get(getOne)
		.delete(remove)
		.put(update);

module.exports = userCrudRouter;
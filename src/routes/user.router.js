const { getAll, create, getUser, remove, update } = require('../controllers/user.controller');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
		.get(getAll)
        .post(create)
userRouter.route("/:id")
        .get(getUser)
        .delete(remove)
        .put(update)
module.exports = userRouter;
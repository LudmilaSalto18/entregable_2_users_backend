const UserRouter = require('./user.router') // la importamos
const express = require('express');
const router = express.Router();

// colocar tus rutas aquí
router.use("/users", UserRouter); // la ejecutamos

module.exports = router;
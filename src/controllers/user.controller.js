const catchError = require('../utils/catchError');
const User = require('../models/user');

const getAll = catchError(async(req, res) => {
    const user = await User.findAll()
    return res.json(user)
});

const create = catchError(async (req, res) => {
    const {first_name, last_name, email , password, birthday} = req.body;
    const user = await User.create({
        first_name,
        last_name,
        email,
        password,
        birthday
    })
    return res.status(201).json(user)
})

const getUser = catchError(async (req, res) => {
    const {id} = req.params;
    const getUpser = await User.findByPk(id)
    return res.json(getUpser)
 })

const remove = catchError(async(req, res) => {
    const {id} = req.params;
    const user = await User.destroy({where: {id}})
    if (user === 0) return res.status(404).json({message: "user not found"})

    return res.sendStatus(204)
})


const update = catchError(async(req , res) => {
    const {id} = req.params;
    const {first_name, last_name, email, password, birthday} = req.body;
    const update = await User.update(
        {first_name, last_name, email, password, birthday},
        {where: {id}, returning: true}
    )
    if (!update) return res.status(204).json({message: "user not found"})
    return res.json(update[1][0])
})



module.exports = {
    getAll,
    create,
    getUser,
    remove,
    update
}
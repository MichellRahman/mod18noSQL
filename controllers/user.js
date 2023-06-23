const {User} = require('../models')

const getAllUsers = async (req,res) => {
    try {
        const users = await User.find({}).populate('friends').populate('thoughts')
        res.json(users) 
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = {getAllUsers}
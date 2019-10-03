const SpotModel = require('../models/Spot')
const UserModel = require ('../models/User')



 let spotController = {
    async index(req,res){
        const tech = req.query.tech;
        const spots = await SpotModel.find({techs:tech})
        return res.json(spots)
    },

    async store(req, res) {
        const { filename } = req.file
        const { company,techs,price } = req.body
        const { user_id} = req.headers;

        const user = await UserModel.findById(user_id)

        if(!user){
            return res.status(400).json({errro:"user does not exist"})
        }


        const spot = await SpotModel.create({
            user:user_id,
            thumbnail:filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })


        return res.json(spot)
    }
    
}


module.exports = spotController
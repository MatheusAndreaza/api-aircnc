import Spot from '../models/Spot';
import User from '../models/User';

export default {
    async index(req, res){
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },

    async store(req, res){
        const { filename } = req.file;
        const { company, price, techs } = req.body;
        const { user_id } = req.headers;

        let user = await User.findById(user_id);

        if(!user){
            return res.status(404).json({ message: 'Error, user does not exist'});
        }

        const spot = await Spot.create({ 
            thumbnail: filename,
            company,
            price,
            techs: techs.split(',').map(tech => tech.trim()),
            user: user_id
        });

        return res.json(spot);
    }
}
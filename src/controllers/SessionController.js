import User from '../models/User';

export default {
    async store(req, res){
        const { email } = req.body;

        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email });
        }

        return res.json({ user });
    }
}
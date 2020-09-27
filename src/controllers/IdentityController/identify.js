import User from '../../models/User'

export default async function identify (req, res){
    const user = await User.findById(req.userId)

    return res.send(user.email)
}
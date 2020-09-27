import User from '../../models/User'

export default async function storeUser(req, res){
    const { email, password } = req.body

    const user = await User.create({
        email,
        password
    })

    const { _id } = user;

    return res.json({ _id })
}
import 'dotenv/config'

import User from "../../models/User"

import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";

export default async function storeSession(req, res){
    const { email, password } = req.body;

    const user = await User.findOne({ email })

    if(!user)
        return res.status(404).send('User not found!')

    const isPassowrdCorret = await bcrypt.compare(password, user.passwordHash)

    if(!isPassowrdCorret)
        return res.status(401).send('Wrong password')

    return res.json({
        token: jwt.sign({userId: user._id }, process.env.APP_SECRET, {
            expiresIn: '7d'
        })
    })
}
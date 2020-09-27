import { Schema, model } from 'mongoose'
import bcryptjs from 'bcryptjs'

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    passwordHash: String
})

UserSchema.pre('save', async function() {
    if (this.password) this.passwordHash = await bcryptjs.hash(this.password, 8)
    this.password = undefined
})

export default new model('User', UserSchema)
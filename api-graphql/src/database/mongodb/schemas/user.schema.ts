import mongoose from 'mongoose';
import { User } from 'src/modules/users/user.type';

const userSchema = new mongoose.Schema({
    name: String,
    idade: Number,
    date: { type: Date, default: Date.now },
}, {
    versionKey: false
})

const Users = mongoose.model<User>('Users', userSchema);

export default Users;






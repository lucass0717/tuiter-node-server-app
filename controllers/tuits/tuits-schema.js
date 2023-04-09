import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    userName: String,
    handle: String,
    image: String,
    topic: String,
    time: String,
    replies: Number,
    retuits: Number,
    dislikes: Number
}, {collection: 'tuits'});
export default schema;
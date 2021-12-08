import { Error } from 'mongoose';
const mongoose = require("mongoose");

export const mongodb = () => mongoose.connect(process.env.CLUSTER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log('Db is connected'))
    .catch(() => console.log(`Connection error: ${Error}`))

import { Error } from 'mongoose';
const mongoose = require("mongoose");

export const mongodb = () => mongoose.connect(process.env.CLUSTER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Db is connected'))
    .catch((err: Error) => console.log(`Connection error: ${err}`))

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongodb = void 0;
const mongoose = require("mongoose");
exports.mongodb = () => mongoose.connect(process.env.CLUSTER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Db is connected'))
    .catch((err) => console.log(`Connection error: ${err}`));

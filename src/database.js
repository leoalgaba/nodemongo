import { connect } from "mongoose";
import {MONGODB_URI} from './config'

(async () => {
    try {
        const db = await connect(MONGODB_URI)
        console.log("BD conectada a", db.connection.name);
    } catch (err) {
        console.log(err);
    }
})()


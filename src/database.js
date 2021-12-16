import { connect } from "mongoose";
import {MONGODB_URI} from './config'

(async () => {
    try {
        const db = await connect(mongodb+srv://admin:admin@cluster0.oastl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority)
        console.log("BD conectada a", db.connection.name);
    } catch (err) {
        console.log(err);
    }
})()


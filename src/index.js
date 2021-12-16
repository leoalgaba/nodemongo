import app from './app';
import './database'
import {PORT} from './config'

app.listen(app.get("port"));
console.log(`server on port ${app.get("port")}`);


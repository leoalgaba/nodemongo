import app from './app';
import './database'
import {PORT} from './config'

app.listen(PORT);
console.log(`server on port ${PORT}`);
//app.listen(app.get("port"));
//console.log(`server on port ${app.get("port")}`);


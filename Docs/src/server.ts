import express,{Express} from 'express'
import morgan from 'morgan'
import cors from 'cors'

import {PORT} from './config'
import {conectBD} from './database'
import { routes } from './routes'


/**
 * ${1:Description placeholder}
 * @date 2/28/2024 - 1:58:20 PM
 *
 * @export
 * @class Server
 * @typedef {Server}
 */
export class Server{
    /**
 * ${1:Description placeholder}
 * @date 2/28/2024 - 1:58:20 PM
 *
 * @private
 * @type {Express}
 */
private app:Express;

    /**
 * Creates an instance of Server.
 * @date 2/28/2024 - 1:58:20 PM
 *
 * @constructor
 */
constructor(){
        this.app = express();
        conectBD();
        this.configuracion();
        this.middlewares();
        this.routes();
    }

    /**
 * ${1:Description placeholder}
 * @date 2/28/2024 - 1:58:20 PM
 */
configuracion(){
        this.app.set('port',PORT || 3000)
        
    }
    /**
 * ${1:Description placeholder}
 * @date 2/28/2024 - 1:58:20 PM
 */
middlewares(){
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
    }
    /**
 * ${1:Description placeholder}
 * @date 2/28/2024 - 1:58:20 PM
 */
routes(){
        this.app.get('/',(req,res)=>{
            res.json({
                name:'API REST'
            })
        })
  

        this.app.use('/api',routes.TaskRoute)
    }

    /**
 * ${1:Description placeholder}
 * @date 2/28/2024 - 1:58:20 PM
 */
listen(){
        this.app.listen(this.app.get('port'), ()=>
        {
            console.log(`Server esta corriendo en el puerto ${this.app.get('port')}`);
            
        })

        
    }
}
import express,{Express} from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {PORT} from './config'
import {conectBD} from './database'
import { routes } from './routes'

import  SwaggerUi from 'swagger-ui-express'
import SwaggerSetup from './docs/swagger'








export class Server{
    private app:Express;

    constructor(){
        this.app = express();
        conectBD();
        this.configuracion();
        this.middlewares();
        this.routes();
    }

    configuracion(){
        this.app.set('port',PORT || 3000)
        
    }
    middlewares(){
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
    }
    routes(){
        this.app.get('/',(req,res)=>{
            res.json({
                name:'API REST'
            })
        }) 
  
        this.app.use('/documentation',SwaggerUi.serve, SwaggerUi.setup(SwaggerSetup))
        this.app.use('/api',routes.TaskRoute)
    }

    listen(){
        this.app.listen(this.app.get('port'), ()=>
        {
            console.log(`Server esta corriendo en el puerto ${this.app.get('port')}`);
            
        })

        
    }
}
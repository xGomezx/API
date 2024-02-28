import swaggerJSDoc,{OAS3Definition,OAS3Options} from "swagger-jsdoc";

const swaggerDefinition : OAS3Definition = {
    openapi: "3.0.3",
    info:{
        title:"APIREST",
        version:"1.0.0"
    },
    servers:[
        {
            url:"http://localhost:5000",

        },
    ],
    components:{
        schemas:{
            task:{
                type:"object",
                required:["name","description","status"],
                properties:{
                    name:{
                        type:"string",
                    },
                    description:{
                        type:"string",
                    },
                    status:{
                        type:"boolean"
                    }
                }
            }
        }
    }
}

const swaggerOptions : OAS3Options = {
    swaggerDefinition,
    apis:["./src/routes/*ts"]

}

export default swaggerJSDoc (swaggerOptions)
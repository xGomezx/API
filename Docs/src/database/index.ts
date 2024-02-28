import mongoose,{ connect } from "mongoose";
import {MONGO_URI} from "../config"

/**
 * ${1:Description placeholder}
 * @date 2/28/2024 - 1:57:55 PM
 */
export const conectBD = () =>{
    mongoose.connect(MONGO_URI as string, {
        
    }).then(() => {
        console.log("Conectado a la base de datos MongoDB");
    }).catch((error) => {
        console.error("Error al conectar a la base de datos:", error);
    });
}
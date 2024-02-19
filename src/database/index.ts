import mongoose,{ connect } from "mongoose";
import {MONGO_URI} from "../config"

export const conectBD = () =>{
    mongoose.connect(MONGO_URI as string, {
        
    }).then(() => {
        console.log("Conectado a la base de datos MongoDB");
    }).catch((error) => {
        console.error("Error al conectar a la base de datos:", error);
    });
}
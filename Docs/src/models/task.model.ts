import { Schema,model } from "mongoose";

/**
 * ${1:Description placeholder}
 * @date 2/28/2024 - 1:58:05 PM
 *
 * @type {*}
 */
const taskSchema = new Schema({
    name:{
        type: String,
        required:true
        
    },
    description:{
        type:String,
        required:true

    },
    status:{
        type:Boolean,
        default: true
    }
});

/**
 * ${1:Description placeholder}
 * @date 2/28/2024 - 1:58:05 PM
 *
 * @type {*}
 */
export const TaskModel = model('task',taskSchema)
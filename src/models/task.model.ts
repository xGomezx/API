import { Schema,model } from "mongoose";

const taskSchema = new Schema({
    _id:{
        type : String,
        required : true

    },
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

export const TaskModel = model('task',taskSchema)
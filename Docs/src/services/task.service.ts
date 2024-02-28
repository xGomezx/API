import {TaskModel} from '../models'

/**
 * ${1:Description placeholder}
 * @date 2/28/2024 - 1:58:12 PM
 *
 * @type {{ getAll: () => unknown; create: (entity: object) => unknown; update: (id: string, body: object) => unknown; delete: (id: string) => unknown; }\}
 */

export const taskService = {
  getAll: async()=>{
    return await TaskModel.find();
  },

  create: async(entity: object)=>{
    return await TaskModel.create(entity);
  },

  update: async(id:string, body:object)=>{
    return await TaskModel.findByIdAndUpdate(id, body);
  },

  delete: async(id:string)=>{
    return await TaskModel.findByIdAndDelete(id);
  }
}
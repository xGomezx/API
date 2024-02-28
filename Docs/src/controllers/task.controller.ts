import {Response, Request} from 'express'
import {taskService} from '../services'

/**
 * ${1:Description placeholder}
 * @date 2/28/2024 - 1:57:43 PM
 *
 * @type {{ getAllTask: (req: Request, res: Response) => unknown; create: (req: Request, res: Response) => unknown; update: (req: Request, res: Response) => unknown; delete: (req: Request, res: Response) => unknown; }\}
 */
export const taskController = {
  getAllTask: async(req:Request, res:Response)=>{
    try {
      const data = await taskService.getAll();
      return res.json(data);
    } catch (error:any) {
      res.status(400).json({
        message: error.message
      })
    }
  },

  create: async(req:Request, res:Response)=>{
    console.log("Valio vrfa");

    try {
      const data = await taskService.create(req.body);
      return res.json(data);
    } catch (error:any) {
      res.status(400).json({
        
        message: error.message
        
      })
    }

  },

  update: async(req:Request, res:Response)=>{
    try {
      const {id} = req.params;
      const data = await taskService.update(id, req.body);
      return res.json(data);
    } catch (error:any) {
      res.status(400).json({
        message: error.message
      })
    }
  },

  delete: async(req:Request, res:Response)=>{
    try {
      const {id} = req.params;
      const data = await taskService.delete(id);
      return res.json(data);
    } catch (error:any) {
      res.status(400).json({
        message: error.message
      })
    }
  }
}
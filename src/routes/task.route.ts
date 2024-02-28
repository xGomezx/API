import { Router } from "express";

import { taskController } from "../controllers";




const router = Router();
/**
 * Post track
 * @openapi
 * /api/{id}:
 *    get:
 *      tags:
 *        - task
 *      summary: "Buscar una tarea"
 *      description: Este endpoint es para buscar una tarea, agregando su ID
 *      parameters:
 *        - name: id  
 *          in: path   
 *          description: Id para buscar tarea
 *          required: true
 *          schema:
 *              type: string
 *      
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 */


router.get('/:id',taskController.getOneTask)


/**
 * Post track
 * @openapi
 * /api:
 *    get:
 *      tags:
 *        - task
 *      summary: "Listar Tareas"
 *      description: Este endpoint es para listar las tareas totales  
 *      
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 */
router.get('/', taskController.getAllTask)


/**
 * Post track
 * @openapi
 * /api:
 *    post:
 *      tags:
 *        - task
 *      summary: "Crear nueva Tarea"
 *      description: Este endpoint es para crear una nueva tarea  
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/task"
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 */

router.post('/', taskController.create)

/**
 * Post track
 * @openapi
 * /api/{id}:
 *    put:
 *      tags:
 *        - task
 *      summary: "Actualizar una tarea"
 *      description: Este endpoint es para actualizar una tarea agregando su ID
 *      parameters:
 *        - name: id  
 *          in: path   
 *          description: ID de la tarea a actualizar
 *          required: true
 *          schema:
 *              type: string
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/task"
 *    
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la colección.
 *        '422':
 *          description: Error de validación.
 */


router.put('/:id', taskController.update)

/**
 * Post track
 * @openapi
 * /api/{id}:
 *    delete:
 *      tags:
 *        - task
 *      summary: "Eliminar una tarea"
 *      description: Este endpoint es para eliminar una tarea agregando su ID
 *      parameters:
 *        - name: id  
 *          in: path   
 *          description: Id para eliminar tarea
 *          required: true
 *          schema:
 *              type: string
 *      
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 */


router.delete('/:id', taskController.delete)


export default router; 
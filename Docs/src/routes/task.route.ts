import { Router } from "express";

import { taskController } from "../controllers";

/**
 * ${1:Description placeholder}
 * @date 2/28/2024 - 1:58:09 PM
 *
 * @type {*}
 */
const router = Router();

router.get('/',taskController.getAllTask)

router.post('/',taskController.create)

router.patch('/:id',taskController.update)

router.delete('/:id', taskController.delete)

export default router; 
import { Router } from 'express';

const router: Router = Router();
import bussinesController from "../controllers/bussines.controller"

router.get('/', bussinesController.getAll);

router.get("/:id", bussinesController.getById);

router.post("/add", bussinesController.create);

router.put("/edit/:id", bussinesController.update);

router.delete("/delete/:id", bussinesController.deletee);


export default router;
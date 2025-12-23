import express from 'express';
import { CreateUser, deleteUser, getAllUser, getById, updateUser } from '../Controllers/UserControllers.js';

const router =express.Router();

router.post("/create",CreateUser);
router.get("/get",getAllUser);
router.get("/get/:id",getById);
router.put("/update",updateUser);
router.delete("delete",deleteUser);

export default router;
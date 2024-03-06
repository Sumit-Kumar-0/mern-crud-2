import express from "express";
import { productCreateController } from "../controllers/product.controllers.js";
import { getProductsByOwner } from '../controllers/product.controllers.js';

const router = express.Router();

router.post("/create", productCreateController);

router.get('/owner/:ownerId', getProductsByOwner);

export default router;

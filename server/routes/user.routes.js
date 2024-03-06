import express from "express";
import {
  registerController,
  getAllUserController,
  getSingleUserController,
  updateSingleUserController,
  deleteSingleUserController,
} from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/register", registerController);

router.get("/all", getAllUserController);

router.get("/:id", getSingleUserController);

router.delete("/:id", deleteSingleUserController);

router.put("/:id", updateSingleUserController);

export default router;

import express from "express";
import {
  createSiswa,
  getSiswa,
  updateSiswa,
  deleteSiswa,
  getSiswaById,
} from "../controllers/siswaController.js";

const router = express.Router();

router.get("/siswas", getSiswa);
router.post("/siswa", createSiswa);
router.put("/siswa/:id", updateSiswa);
router.delete("/siswa/:id", deleteSiswa);
router.get("/siswa/:id", getSiswaById);

export default router;

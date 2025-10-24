import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// List of siswas
export const getSiswa = async (req, res) => {
  try {
    const response = await prisma.siswas.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add new siswa
export const createSiswa = async (req, res) => {
  const { kode_siswa, nama_siswa, alamat, tanggal_lahir, jurusan } = req.body;

  try {
    const response = await prisma.siswas.create({
      data: {
        kode_siswa: kode_siswa,
        nama_siswa: nama_siswa,
        alamat: alamat,
        tanggal_lahir: new Date(tanggal_lahir),
        jurusan: jurusan,
      },
    });

    res.status(201).json({
      message: "Data Siswa berhasil ditambahkan",
      data: response,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update siswa
export const updateSiswa = async (req, res) => {
  const { kode_siswa, nama_siswa, alamat, tanggal_lahir, jurusan } = req.body;

  try {
    const response = await prisma.siswas.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        kode_siswa: kode_siswa,
        nama_siswa: nama_siswa,
        alamat: alamat,
        tanggal_lahir: new Date(tanggal_lahir),
        jurusan: jurusan,
      },
    });

    res.status(201).json({
      message: "Data Siswa berhasil diperbarui",
      data: response,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Delete siswa
export const deleteSiswa = async (req, res) => {
  try {
    const response = await prisma.siswas.delete({
      where: { id: Number(req.params.id) },
    });
    res.status(201).json({
      message: "Data Siswa berhasil dihapus",
      data: response,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getSiswaById = async (req, res) => {
  try {
    const response = await prisma.siswas.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

import { useState } from "react";
import axios from "axios";

export const useCreateSiswa = () => {
  const [inputKodeSiswa, setInputKodeSiswa] = useState("");
  const [inputNamaSiswa, setInputNamaSiswa] = useState("");
  const [inputTanggalLahir, setInputTanggalLahir] = useState("");
  const [inputAlamat, setInputAlamat] = useState("");
  const [inputJurusan, setInputJurusan] = useState("");

  const handleCreateSiswa = async () => {
    try {
      await axios.post("http://localhost:8000/siswa", {
        kode_siswa: inputKodeSiswa,
        nama_siswa: inputNamaSiswa,
        tanggal_lahir: inputTanggalLahir,
        alamat: inputAlamat,
        jurusan: inputJurusan,
      });
      //setInputNamaSiswa("");
    } catch (error) {
      console.error("Gagal menambah siswa:", error.message);
    }
  };

  return {
    setInputAlamat,
    setInputJurusan,
    setInputKodeSiswa,
    setInputNamaSiswa,
    setInputTanggalLahir,
    handleCreateSiswa,
  };
};

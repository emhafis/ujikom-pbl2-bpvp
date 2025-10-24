import { useState } from "react";
import axios from "axios";

export const useFetchListSiswa = () => {
  const [listSiswa, setListSiswa] = useState([]);

  const fetchListSiswa = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/siswas`);
      setListSiswa(response.data);
    } catch (error) {
      console.error("Gagal mengambil data siswa:", error.message);
    }
  };

  return {
    listSiswa,
    fetchListSiswa,
  };
};

import axios from "axios";

const handleDeleteSiswa = async (id) => {
  const confirmDelete = confirm("Yakin ingin menghapus siswa ini?");
  if (!confirmDelete) return;

  try {
    await axios.delete(`http://localhost:8000/siswa/${id}`);
  } catch (error) {
    console.error("Gagal menghapus siswa:", error.message);
  }
};

export default handleDeleteSiswa;

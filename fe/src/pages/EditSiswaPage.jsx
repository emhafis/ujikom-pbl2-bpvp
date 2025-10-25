import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditSiswaPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    kode_siswa: "",
    nama_siswa: "",
    tanggal_lahir: "",
    alamat: "",
    jurusan: "",
  });

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/siswa/${id}`)
  //     .then((res) => setFormData(res.data))
  //     .catch((err) => console.error(err));
  // }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/siswa/${id}`)
      .then((res) => {
        const siswaData = res.data;
        let formattedDate = siswaData.tanggal_lahir;

        //API mengembalikan format ISO (misal: "2000-01-01T00:00:00.000Z")
        if (
          formattedDate &&
          typeof formattedDate === "string" &&
          formattedDate.includes("T")
        ) {
          formattedDate = formattedDate.substring(0, 10);
        }

        setFormData({
          ...siswaData,
          tanggal_lahir: formattedDate || "",
        });
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/siswa/${id}`, formData);
      alert("Data siswa berhasil diperbarui!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Gagal memperbarui data siswa!");
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex items-start justify-center">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
          Ubah Siswa: {formData.nama_siswa}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Input Kode Siswa */}
          <div>
            <label
              htmlFor="kode_siswa"
              className="block text-sm font-medium text-gray-700"
            >
              Kode Siswa
            </label>
            <input
              id="kode_siswa"
              type="text"
              name="kode_siswa"
              value={formData.kode_siswa}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="S-001"
            />
          </div>

          {/* Input Nama Siswa */}
          <div>
            <label
              htmlFor="nama_siswa"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Siswa
            </label>
            <input
              id="nama_siswa"
              type="text"
              name="nama_siswa"
              value={formData.nama_siswa}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Nama Lengkap"
            />
          </div>

          {/* Input Tanggal Lahir */}
          <div>
            <label
              htmlFor="tanggal_lahir"
              className="block text-sm font-medium text-gray-700"
            >
              Tanggal Lahir
            </label>
            <input
              id="tanggal_lahir"
              type="date"
              name="tanggal_lahir"
              // value={new Date(formData.tanggal_lahir.toLocaleString("id-ID"))}
              value={formData.tanggal_lahir}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Input Alamat */}
          <div>
            <label
              htmlFor="alamat"
              className="block text-sm font-medium text-gray-700"
            >
              Alamat
            </label>
            <input
              id="alamat"
              type="text"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Alamat Lengkap"
            />
          </div>

          {/* Input Jurusan */}
          <div>
            <label
              htmlFor="jurusan"
              className="block text-sm font-medium text-gray-700"
            >
              Jurusan
            </label>
            <input
              id="jurusan"
              type="text"
              name="jurusan"
              value={formData.jurusan}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Contoh: IPA/IPS"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 font-medium transition"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 font-medium shadow-md transition"
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

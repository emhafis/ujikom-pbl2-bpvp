import { useFetchListSiswa } from "../api/useFetchListSiswa";
import { useCreateSiswa } from "../api/useCreateSiswa";
import handleDeleteSiswa from "../api/useDeleteSiswa";
import formatDate from "../utils/formatDate";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ListSiswaPage() {
  const { listSiswa, fetchListSiswa } = useFetchListSiswa();
  const {
    setInputAlamat,
    setInputJurusan,
    setInputKodeSiswa,
    setInputNamaSiswa,
    setInputTanggalLahir,
    handleCreateSiswa,
  } = useCreateSiswa();

  useEffect(() => {
    fetchListSiswa();
  });

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex items-start justify-center">
      <div className="w-full w-3/4 mt-24 bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="flex flex-wrap items-center justify-between p-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b bg-white">
            Daftar Siswa Sekolah
          </h2>

          <button
            onClick={() => fetchListSiswa()}
            className="flex gap-2 items-center p-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition font-medium text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            <p>Refresh Data Siswa</p>
          </button>
        </div>

        {/* --- Table Section --- */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            <thead className="bg-gray-400 text-white uppercase text-xs tracking-wider">
              <tr>
                <th className="p-6">Kode</th>
                <th className="p-6">Nama Siswa</th>
                <th className="p-6">Alamat</th>
                <th className="p-6">Tgl. Lahir</th>
                <th className="p-6">Jurusan</th>
                <th className="p-6 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {listSiswa.map((siswa) => (
                <tr className="" key={siswa.id}>
                  <td className="px-4 py-3 border-b text-gray-700 font-medium">
                    {siswa.kode_siswa}
                  </td>
                  <td className="px-4 py-3 border-b text-gray-800">
                    {siswa.nama_siswa}
                  </td>
                  <td className="px-4 py-3 border-b text-gray-600">
                    {siswa.alamat}
                  </td>
                  <td className="px-4 py-3 border-b text-gray-600">
                    {formatDate(siswa.tanggal_lahir)}
                  </td>
                  <td className="px-4 py-3 border-b text-gray-800">
                    <span className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                      {siswa.jurusan}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleDeleteSiswa(siswa.id)}
                        className="bg-red-500 text-white px-3 py-1 text-xs rounded hover:bg-red-600 transition shadow-md"
                      >
                        Hapus
                      </button>
                      <button
                        onClick={() => handleEdit(siswa.id)}
                        className="bg-indigo-500 text-white px-3 py-1 text-xs rounded hover:bg-indigo-600 transition shadow-md"
                      >
                        Ubah
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- Form Section (Styling kept, functionality removed) --- */}
        <div className="p-6 border-t bg-gray-50">
          <h3 className="text-lg font-semibold mb-3 text-gray-700">
            Tambah Siswa Baru
          </h3>
          <div className="">
            <form
              action=""
              className="flex flex-wrap gap-4"
              onSubmit={() => handleCreateSiswa()}
            >
              <input
                className="p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 flex-1 min-w-[100px]"
                type="text"
                placeholder="Kode Siswa (ex: S-004)"
                onChange={(e) => setInputKodeSiswa(e.target.value)}
              />
              <input
                className="p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 flex-1 min-w-[150px]"
                type="text"
                placeholder="Nama Siswa"
                onChange={(e) => setInputNamaSiswa(e.target.value)}
              />
              <input
                className="p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 flex-1 min-w-[150px]"
                type="date"
                onChange={(e) => setInputTanggalLahir(e.target.value)}
              />
              <input
                className="p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 flex-1 min-w-[200px]"
                type="text"
                placeholder="Alamat"
                onChange={(e) => setInputAlamat(e.target.value)}
              />
              <input
                className="p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 flex-1 min-w-[100px]"
                type="text"
                placeholder="Jurusan"
                onChange={(e) => setInputJurusan(e.target.value)}
              />
              <button
                className="p-2 bg-green-500 text-white rounded hover:bg-green-600 transition font-medium shadow-md w-full md:w-auto"
                type="submit"
              >
                Simpan Siswa
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

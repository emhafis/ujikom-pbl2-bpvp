-- CreateTable
CREATE TABLE `Siswas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_siswa` VARCHAR(191) NOT NULL,
    `nama_siswa` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `tanggal_lahir` DATE NOT NULL,
    `jurusan` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Siswas_kode_siswa_key`(`kode_siswa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

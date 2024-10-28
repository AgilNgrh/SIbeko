// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    username: 'User',
    email: 'user@nextmail.com',
    password: '123456',
    role : 'admin'
  },
  {
    id: 'f218bca7-5c54-472e-a3e2-c24be8a1243b',
    username: 'JaneDoe',
    email: 'jane.doe@nextmail.com',
    password: 'password123',
    role: 'user'
  },
  {
    id: '81a2b08b-d41a-4d1c-83a1-09cfe8a70f2c',
    username: 'JohnSmith',
    email: 'john.smith@nextmail.com',
    password: 'securePass',
    role: 'admin'
  },
  {
    id: '7a6f8e13-c1c1-48ff-8f03-1a4c5a6b82c2',
    username: 'AliceW',
    email: 'alice.white@nextmail.com',
    password: 'alice2023',
    role: 'user'
  },
  {
    id: 'd5fa8a1f-98d2-439e-9f33-b9ed129c9e71',
    username: 'BobM',
    email: 'bob.marley@nextmail.com',
    password: 'reggaeLover',
    role: 'admin'
  },
  {
    id: '3f5c1a3f-6f8a-4189-97b9-f7d7f74d204a',
    username: 'CharlieP',
    email: 'charlie.peace@nextmail.com',
    password: 'peaceAndLove',
    role: 'user'
  },
  {
    id: '462ff2be-7132-4e1a-9380-4b610aa7b1c8',
    username: 'DanaR',
    email: 'dana.rose@nextmail.com',
    password: 'danaSecure',
    role: 'admin'
  },
  {
    id: '91153c88-5ed1-4b4a-94bc-3bb519b2a8df',
    username: 'EveM',
    email: 'eve.martin@nextmail.com',
    password: 'evePass987',
    role: 'user'
  },
  {
    id: 'ef8fda07-b421-4971-8c7a-57c9e7c0f34c',
    username: 'FrankT',
    email: 'frank.trent@nextmail.com',
    password: 'frank123',
    role: 'admin'
  },
  {
    id: '5c7dfbd8-9ed3-4458-8c2e-4d9f1e8d8d5f',
    username: 'GraceK',
    email: 'grace.king@nextmail.com',
    password: 'graceKing001',
    role: 'user'
  },
  {
    id: 'bd3df2a4-8153-4e7d-8e2d-39e4f4a6e3c4',
    username: 'HenryL',
    email: 'henry.lane@nextmail.com',
    password: 'henryLpassword',
    role: 'admin'
  }
];


const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

const transaksi_pembelian = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    tanggal_pembelian: '2021-10-12',
    nama_distributor: 'Savita Indonesia',
    produk: 'Gula Aren',
    total_harga: 100000,
    status_pembelian: 'complete'
  },
  {
    id: '51b45ab6-8e2e-4b49-8efb-7d8f3a1b6a2b',
    tanggal_pembelian: '2021-11-03',
    nama_distributor: 'PT Sumber Sejahtera',
    produk: 'Beras',
    total_harga: 250000,
    status_pembelian: 'complete'
  },
  {
    id: '702acb2e-3e8d-44ab-9e87-2d4e5b8d1234',
    tanggal_pembelian: '2021-12-15',
    nama_distributor: 'Surya Tani',
    produk: 'Minyak Kelapa',
    total_harga: 150000,
    status_pembelian: 'pending'
  },
  {
    id: '81de6a2b-0914-4e8b-bb65-19a7c8a6e2a7',
    tanggal_pembelian: '2022-01-10',
    nama_distributor: 'Agro Makmur',
    produk: 'Kopi Bubuk',
    total_harga: 300000,
    status_pembelian: 'complete'
  },
  {
    id: '93b1da3c-8f9a-4b34-bd75-c6b0f6c8e3f9',
    tanggal_pembelian: '2022-02-21',
    nama_distributor: 'Fresh Indo',
    produk: 'Tepung Terigu',
    total_harga: 120000,
    status_pembelian: 'cancelled'
  },
  {
    id: 'b2d83cae-7c3d-4a2a-924a-1d9f3e1b7e2c',
    tanggal_pembelian: '2022-03-15',
    nama_distributor: 'Mega Prima',
    produk: 'Garam',
    total_harga: 50000,
    status_pembelian: 'complete'
  },
  {
    id: 'c3f4b6d7-5f0e-4ab7-a1c1-2d9e4c6d8b9a',
    tanggal_pembelian: '2022-04-05',
    nama_distributor: 'Cahaya Sukses',
    produk: 'Gula Pasir',
    total_harga: 130000,
    status_pembelian: 'pending'
  },
  {
    id: 'd5c6f7b8-3a9b-4c4a-85b7-6d8f4b5c2e7a',
    tanggal_pembelian: '2022-05-30',
    nama_distributor: 'PT Sinar Terang',
    produk: 'Susu Bubuk',
    total_harga: 200000,
    status_pembelian: 'complete'
  },
  {
    id: 'e6a7b8c9-1d2f-4e5a-a7c3-7b9d2c3f1a4b',
    tanggal_pembelian: '2022-06-25',
    nama_distributor: 'Makmur Jaya',
    produk: 'Telur Ayam',
    total_harga: 80000,
    status_pembelian: 'complete'
  },
  {
    id: 'f7b8c9d0-2e1a-4b7a-b6d2-9a3b2e4f5c6d',
    tanggal_pembelian: '2022-07-14',
    nama_distributor: 'Tani Nusantara',
    produk: 'Jagung Pipil',
    total_harga: 60000,
    status_pembelian: 'pending'
  }
];

const transaksi_penjualan = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    tanggal_transaksi: '2021-10-12',
    pegawai: 'Michael',
    pelanggan: 'Agil',
    produk: 'Matcha Latte',
    total_harga: 25000,
    metode_pembayaran: 'cash'
  },
  {
    id: '51b45ab6-8e2e-4b49-8efb-7d8f3a1b6a2b',
    tanggal_transaksi: '2021-10-15',
    pegawai: 'Sara',
    pelanggan: 'Budi',
    produk: 'Espresso',
    total_harga: 20000,
    metode_pembayaran: 'credit'
  },
  {
    id: '702acb2e-3e8d-44ab-9e87-2d4e5b8d1234',
    tanggal_transaksi: '2021-10-17',
    pegawai: 'Alex',
    pelanggan: 'Citra',
    produk: 'Cappuccino',
    total_harga: 30000,
    metode_pembayaran: 'debit'
  },
  {
    id: '81de6a2b-0914-4e8b-bb65-19a7c8a6e2a7',
    tanggal_transaksi: '2021-10-19',
    pegawai: 'Rachel',
    pelanggan: 'Dedi',
    produk: 'Latte',
    total_harga: 27000,
    metode_pembayaran: 'cash'
  },
  {
    id: '93b1da3c-8f9a-4b34-bd75-c6b0f6c8e3f9',
    tanggal_transaksi: '2021-10-20',
    pegawai: 'John',
    pelanggan: 'Eka',
    produk: 'Mocha',
    total_harga: 32000,
    metode_pembayaran: 'credit'
  },
  {
    id: 'b2d83cae-7c3d-4a2a-924a-1d9f3e1b7e2c',
    tanggal_transaksi: '2021-10-22',
    pegawai: 'Lisa',
    pelanggan: 'Fajar',
    produk: 'Americano',
    total_harga: 22000,
    metode_pembayaran: 'debit'
  },
  {
    id: 'c3f4b6d7-5f0e-4ab7-a1c1-2d9e4c6d8b9a',
    tanggal_transaksi: '2021-10-25',
    pegawai: 'James',
    pelanggan: 'Gilang',
    produk: 'Caramel Macchiato',
    total_harga: 35000,
    metode_pembayaran: 'cash'
  },
  {
    id: 'd5c6f7b8-3a9b-4c4a-85b7-6d8f4b5c2e7a',
    tanggal_transaksi: '2021-10-27',
    pegawai: 'Emily',
    pelanggan: 'Hana',
    produk: 'Flat White',
    total_harga: 26000,
    metode_pembayaran: 'credit'
  },
  {
    id: 'e6a7b8c9-1d2f-4e5a-a7c3-7b9d2c3f1a4b',
    tanggal_transaksi: '2021-10-30',
    pegawai: 'David',
    pelanggan: 'Indra',
    produk: 'Iced Coffee',
    total_harga: 24000,
    metode_pembayaran: 'debit'
  },
  {
    id: 'f7b8c9d0-2e1a-4b7a-b6d2-9a3b2e4f5c6d',
    tanggal_transaksi: '2021-11-02',
    pegawai: 'Sophia',
    pelanggan: 'Joko',
    produk: 'Hot Chocolate',
    total_harga: 28000,
    metode_pembayaran: 'cash'
  }
];

const produk = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    nama_produk: 'Americano',
    image_url: 'balazs-orban.png',
    kategori: 'Minuman',
    harga: 25000
  },
  {
    id: '51b45ab6-8e2e-4b49-8efb-7d8f3a1b6a2b',
    nama_produk: 'Cappuccino',
    image_url: 'cappuccino.png',
    kategori: 'Minuman',
    harga: 30000
  },
  {
    id: '702acb2e-3e8d-44ab-9e87-2d4e5b8d1234',
    nama_produk: 'Latte',
    image_url: 'latte.png',
    kategori: 'Minuman',
    harga: 28000
  },
  {
    id: '81de6a2b-0914-4e8b-bb65-19a7c8a6e2a7',
    nama_produk: 'Mocha',
    image_url: 'mocha.png',
    kategori: 'Minuman',
    harga: 32000
  },
  {
    id: '93b1da3c-8f9a-4b34-bd75-c6b0f6c8e3f9',
    nama_produk: 'Espresso',
    image_url: 'espresso.png',
    kategori: 'Minuman',
    harga: 20000
  },
  {
    id: 'b2d83cae-7c3d-4a2a-924a-1d9f3e1b7e2c',
    nama_produk: 'Macchiato',
    image_url: 'macchiato.png',
    kategori: 'Minuman',
    harga: 35000
  },
  {
    id: 'c3f4b6d7-5f0e-4ab7-a1c1-2d9e4c6d8b9a',
    nama_produk: 'Matcha Latte',
    image_url: 'matcha-latte.png',
    kategori: 'Minuman',
    harga: 27000
  },
  {
    id: 'd5c6f7b8-3a9b-4c4a-85b7-6d8f4b5c2e7a',
    nama_produk: 'Flat White',
    image_url: 'flat-white.png',
    kategori: 'Minuman',
    harga: 26000
  },
  {
    id: 'e6a7b8c9-1d2f-4e5a-a7c3-7b9d2c3f1a4b',
    nama_produk: 'Hot Chocolate',
    image_url: 'hot-chocolate.png',
    kategori: 'Minuman',
    harga: 28000
  },
  {
    id: 'f7b8c9d0-2e1a-4b7a-b6d2-9a3b2e4f5c6d',
    nama_produk: 'Iced Coffee',
    image_url: 'iced-coffee.png',
    kategori: 'Minuman',
    harga: 24000
  }
];

const pelanggan = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    nama_pelanggan: 'Agil Nugroho',
    nomor_telepon: '0881857689343',
    alamat: 'Sleman Barat'
  },
  {
    id: '51b45ab6-8e2e-4b49-8efb-7d8f3a1b6a2b',
    nama_pelanggan: 'Budi Santoso',
    nomor_telepon: '081234567890',
    alamat: 'Bantul Timur'
  },
  {
    id: '702acb2e-3e8d-44ab-9e87-2d4e5b8d1234',
    nama_pelanggan: 'Citra Lestari',
    nomor_telepon: '082345678901',
    alamat: 'Sleman Utara'
  },
  {
    id: '81de6a2b-0914-4e8b-bb65-19a7c8a6e2a7',
    nama_pelanggan: 'Dedi Pratama',
    nomor_telepon: '083456789012',
    alamat: 'Yogyakarta Tengah'
  },
  {
    id: '93b1da3c-8f9a-4b34-bd75-c6b0f6c8e3f9',
    nama_pelanggan: 'Eka Wijaya',
    nomor_telepon: '084567890123',
    alamat: 'Sleman Selatan'
  },
  {
    id: 'b2d83cae-7c3d-4a2a-924a-1d9f3e1b7e2c',
    nama_pelanggan: 'Fajar Maulana',
    nomor_telepon: '085678901234',
    alamat: 'Gunung Kidul'
  },
  {
    id: 'c3f4b6d7-5f0e-4ab7-a1c1-2d9e4c6d8b9a',
    nama_pelanggan: 'Gilang Saputra',
    nomor_telepon: '086789012345',
    alamat: 'Bantul Barat'
  },
  {
    id: 'd5c6f7b8-3a9b-4c4a-85b7-6d8f4b5c2e7a',
    nama_pelanggan: 'Hana Permata',
    nomor_telepon: '087890123456',
    alamat: 'Kulon Progo'
  },
  {
    id: 'e6a7b8c9-1d2f-4e5a-a7c3-7b9d2c3f1a4b',
    nama_pelanggan: 'Indra Gunawan',
    nomor_telepon: '088901234567',
    alamat: 'Yogyakarta Selatan'
  },
  {
    id: 'f7b8c9d0-2e1a-4b7a-b6d2-9a3b2e4f5c6d',
    nama_pelanggan: 'Joko Santoso',
    nomor_telepon: '089012345678',
    alamat: 'Sleman Timur'
  }
];

const poin = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    username: 'Agil Nugroho',
    jumlah_poin: 200,
    tanggal_diperoleh: '2024-01-22'
  },
  {
    id: '51b45ab6-8e2e-4b49-8efb-7d8f3a1b6a2b',
    username: 'Budi Santoso',
    jumlah_poin: 150,
    tanggal_diperoleh: '2024-02-10'
  },
  {
    id: '702acb2e-3e8d-44ab-9e87-2d4e5b8d1234',
    username: 'Citra Lestari',
    jumlah_poin: 300,
    tanggal_diperoleh: '2024-03-15'
  },
  {
    id: '81de6a2b-0914-4e8b-bb65-19a7c8a6e2a7',
    username: 'Dedi Pratama',
    jumlah_poin: 120,
    tanggal_diperoleh: '2024-04-18'
  },
  {
    id: '93b1da3c-8f9a-4b34-bd75-c6b0f6c8e3f9',
    username: 'Eka Wijaya',
    jumlah_poin: 180,
    tanggal_diperoleh: '2024-05-20'
  },
  {
    id: 'b2d83cae-7c3d-4a2a-924a-1d9f3e1b7e2c',
    username: 'Fajar Maulana',
    jumlah_poin: 250,
    tanggal_diperoleh: '2024-06-22'
  },
  {
    id: 'c3f4b6d7-5f0e-4ab7-a1c1-2d9e4c6d8b9a',
    username: 'Gilang Saputra',
    jumlah_poin: 170,
    tanggal_diperoleh: '2024-07-25'
  },
  {
    id: 'd5c6f7b8-3a9b-4c4a-85b7-6d8f4b5c2e7a',
    username: 'Hana Permata',
    jumlah_poin: 220,
    tanggal_diperoleh: '2024-08-10'
  },
  {
    id: 'e6a7b8c9-1d2f-4e5a-a7c3-7b9d2c3f1a4b',
    username: 'Indra Gunawan',
    jumlah_poin: 140,
    tanggal_diperoleh: '2024-09-12'
  },
  {
    id: 'f7b8c9d0-2e1a-4b7a-b6d2-9a3b2e4f5c6d',
    username: 'Joko Santoso',
    jumlah_poin: 230,
    tanggal_diperoleh: '2024-10-15'
  }
];

const bahan = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    produk: 'Beras',
    kategori: 'Bahan Makanan',
    jumlah: 3
  },
  {
    id: '51b45ab6-8e2e-4b49-8efb-7d8f3a1b6a2b',
    produk: 'Gula Pasir',
    kategori: 'Bahan Makanan',
    jumlah: 5
  },
  {
    id: '702acb2e-3e8d-44ab-9e87-2d4e5b8d1234',
    produk: 'Kopi Bubuk',
    kategori: 'Bahan Minuman',
    jumlah: 10
  },
  {
    id: '81de6a2b-0914-4e8b-bb65-19a7c8a6e2a7',
    produk: 'Susu Kental Manis',
    kategori: 'Bahan Minuman',
    jumlah: 7
  },
  {
    id: '93b1da3c-8f9a-4b34-bd75-c6b0f6c8e3f9',
    produk: 'Tepung Terigu',
    kategori: 'Bahan Makanan',
    jumlah: 8
  },
  {
    id: 'b2d83cae-7c3d-4a2a-924a-1d9f3e1b7e2c',
    produk: 'Mentega',
    kategori: 'Bahan Makanan',
    jumlah: 4
  },
  {
    id: 'c3f4b6d7-5f0e-4ab7-a1c1-2d9e4c6d8b9a',
    produk: 'Sirup',
    kategori: 'Bahan Minuman',
    jumlah: 6
  },
  {
    id: 'd5c6f7b8-3a9b-4c4a-85b7-6d8f4b5c2e7a',
    produk: 'Telur Ayam',
    kategori: 'Bahan Makanan',
    jumlah: 12
  },
  {
    id: 'e6a7b8c9-1d2f-4e5a-a7c3-7b9d2c3f1a4b',
    produk: 'Garam',
    kategori: 'Bahan Makanan',
    jumlah: 15
  },
  {
    id: 'f7b8c9d0-2e1a-4b7a-b6d2-9a3b2e4f5c6d',
    produk: 'Kacang Almond',
    kategori: 'Bahan Makanan',
    jumlah: 2
  }
];


export { users, transaksi_pembelian, transaksi_penjualan, produk, pelanggan, poin, bahan, customers, invoices, revenue };

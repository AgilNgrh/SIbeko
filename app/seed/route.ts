import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { users, transaksi_pembelian, transaksi_penjualan, produk, pelanggan, poin, bahan, customers, invoices, revenue }  from 'app/lib/placeholder-data';

const client = await db.connect();

async function seedusers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      role VARCHAR(50) NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, username, email, password, role)
        VALUES (${user.id}, ${user.username}, ${user.email}, ${hashedPassword}, ${user.role})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedtransaksi_pembelian() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS transaksi_pembelian (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      tanggal_pembelian DATE NOT NULL,
      nama_distributor VARCHAR(255) NOT NULL,
      produk VARCHAR(255) NOT NULL,
      total_harga INT NOT NULL,
      status_pembelian VARCHAR(50) NOT NULL
    );
  `;

  const insertedPembelian = await Promise.all(
    transaksi_pembelian.map(async (item) => {
      return client.sql`
        INSERT INTO transaksi_pembelian (id, tanggal_pembelian, nama_distributor, produk, total_harga, status_pembelian)
        VALUES (${item.id}, ${item.tanggal_pembelian}, ${item.nama_distributor}, ${item.produk}, ${item.total_harga}, ${item.status_pembelian})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedPembelian;
}

async function seedtransaksi_penjualan() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS transaksi_penjualan (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      tanggal_transaksi DATE NOT NULL,
      pegawai VARCHAR(255) NOT NULL,
      pelanggan VARCHAR(255) NOT NULL,
      produk VARCHAR(255) NOT NULL,
      total_harga INT NOT NULL,
      metode_pembayaran VARCHAR(50) NOT NULL
    );
  `;

  const insertedPenjualan = await Promise.all(
    transaksi_penjualan.map(async (item) => {
      return client.sql`
        INSERT INTO transaksi_penjualan (id, tanggal_transaksi, pegawai, pelanggan, produk, total_harga, metode_pembayaran)
        VALUES (${item.id}, ${item.tanggal_transaksi}, ${item.pegawai}, ${item.pelanggan}, ${item.produk}, ${item.total_harga}, ${item.metode_pembayaran})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedPenjualan;
}

async function seedproduk() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS produk (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      nama_produk VARCHAR(255) NOT NULL,
      image_url TEXT NOT NULL,
      kategori VARCHAR(50) NOT NULL,
      harga INT NOT NULL
    );
  `;

  const insertedProduk = await Promise.all(
    produk.map(async (item) => {
      return client.sql`
        INSERT INTO produk (id, nama_produk, image_url, kategori, harga)
        VALUES (${item.id}, ${item.nama_produk}, ${item.image_url}, ${item.kategori}, ${item.harga})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedProduk;
}

async function seedPelanggan() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS pelanggan (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      nama_pelanggan VARCHAR(255) NOT NULL,
      nomor_telepon VARCHAR(20) NOT NULL,
      alamat TEXT NOT NULL
    );
  `;

  const insertedPelanggan = await Promise.all(
    pelanggan.map(async (item) => {
      return client.sql`
        INSERT INTO pelanggan (id, nama_pelanggan, nomor_telepon, alamat)
        VALUES (${item.id}, ${item.nama_pelanggan}, ${item.nomor_telepon}, ${item.alamat})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedPelanggan;
}

async function seedPoin() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS poin (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      jumlah_poin INT NOT NULL,
      tanggal_diperoleh DATE NOT NULL
    );
  `;

  const insertedPoin = await Promise.all(
    poin.map(async (item) => {
      return client.sql`
        INSERT INTO poin (id, username, jumlah_poin, tanggal_diperoleh)
        VALUES (${item.id}, ${item.username}, ${item.jumlah_poin}, ${item.tanggal_diperoleh})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedPoin;
}

async function seedBahan() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS bahan (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      produk VARCHAR(255) NOT NULL,
      kategori VARCHAR(50) NOT NULL,
      jumlah INT NOT NULL
    );
  `;

  const insertedBahan = await Promise.all(
    bahan.map(async (item) => {
      return client.sql`
        INSERT INTO bahan (id, produk, kategori, jumlah)
        VALUES (${item.id}, ${item.produk}, ${item.kategori}, ${item.jumlah})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedBahan;
}


// async function seedInvoices() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS invoices (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       customer_id UUID NOT NULL,
//       amount INT NOT NULL,
//       status VARCHAR(255) NOT NULL,
//       date DATE NOT NULL
//     );
//   `;

//   const insertedInvoices = await Promise.all(
//     invoices.map(
//       (invoice) => client.sql`
//         INSERT INTO invoices (customer_id, amount, status, date)
//         VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//     ),
//   );

//   return insertedInvoices;
// }

// async function seedCustomers() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS customers (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email VARCHAR(255) NOT NULL,
//       image_url VARCHAR(255) NOT NULL
//     );
//   `;

//   const insertedCustomers = await Promise.all(
//     customers.map(
//       (customer) => client.sql`
//         INSERT INTO customers (id, name, email, image_url)
//         VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//     ),
//   );

//   return insertedCustomers;
// }

// async function seedRevenue() {
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS revenue (
//       month VARCHAR(4) NOT NULL UNIQUE,
//       revenue INT NOT NULL
//     );
//   `;

//   const insertedRevenue = await Promise.all(
//     revenue.map(
//       (rev) => client.sql`
//         INSERT INTO revenue (month, revenue)
//         VALUES (${rev.month}, ${rev.revenue})
//         ON CONFLICT (month) DO NOTHING;
//       `,
//     ),
//   );

//   return insertedRevenue;
// }

export async function GET() {
  return Response.json({
   
  });
  try {
    await client.sql`BEGIN`;
    await seedusers();
    await seedtransaksi_pembelian();
    await seedtransaksi_penjualan();
    await seedproduk();
    await seedPelanggan();
    await seedPoin();
    await seedBahan();
    // await seedCustomers();
    // await seedInvoices();
    // await seedRevenue();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}

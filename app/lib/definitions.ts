// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type users = {
  id: string;
  username: string;
  email: string;
  password: string;
  role:string;
};

export type transaksi_pembelian = {
  id:string;
  tanggal_pembelian: string;
  nama_distributor: string;
  produk: string;
  total_harga: number;
  status_pembelian: string;
}

export type transaksi_penjualan = {
  id: string;
  tanggal_transaksi: string;
  pegawai: string;
  pelanggan: string;
  produk: string;
  total_harga: number;
  metode_pembayaran: string;
}

export type produk = {
  id: string;
  nama_produk: string;
  image_url: string;
  kategori: string;
  harga: number;
}

export type pelanggan = {
  id: string;
  nama_pelanggan: string;
  nomor_telepon: string;
  alamat: string;
}

export type poin = {
  id: string;
  username: string;
  jumlah_poin: number;
  tanggal_diperoleh: string;
}

export type bahan = {
  id: string;
  produk: string;
  kategori: string;
  jumlah: number;
}

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

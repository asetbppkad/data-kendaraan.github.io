const apiUrl =
  "https://script.google.com/macros/s/AKfycbzcCjDVkR0AWoTl_gHf1BiSt3mR1SvmFict2b7bKLLmKyChn8LcXdpSmCvXmuDl6qYhJw/exec"; // Ganti dengan URL Web App Google Apps Script Anda

// Fungsi untuk membaca data (GET request)
function readData() {
  // Tampilkan overlay dan loader saat data sedang di-load
  document.getElementById("loader").style.display = "block"; // Tampilkan loader
  document.getElementById("text-load").style.display = "block"; // Tampilkan loader
  document.getElementById("overlay").style.display = "block"; // Tampilkan overlay

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Data retrieved:", data);
      // Tampilkan data ke dalam tabel di halaman
      displayData(data);
    })
    .catch((error) => console.error("Error:", error))
    .finally(() => {
      // Sembunyikan loader dan overlay setelah data berhasil dimuat
      document.getElementById("loader").style.display = "none"; // Sembunyikan loader
      document.getElementById("text-load").style.display = "none"; // Tampilkan loader
      document.getElementById("overlay").style.display = "none"; // Sembunyikan overlay
    });
}

// Fungsi untuk menampilkan data ke tabel
function displayData(data) {
  const tableBody = $("#data-table"); // Menggunakan jQuery untuk memilih tbody
  tableBody.empty(); // Kosongkan tbody sebelum menambahkan baris baru

  data.forEach((row) => {
    const tr = $("<tr></tr>");
    tr.append(`
        <td>${row.No_}</td>
        <td>${row.NIBAR_atau_NO_REGISTER}</td>
        <td>${row.Kode_Barang_108}</td>
        <td>${row.Nama_Barang}</td>
        <td>${row.Spesifikasi_Barang_MERK}</td>
        <td>${row.Lokasi_Alamat_Barang}</td>
        <td>${row.Nama_Pemakai}</td>
        <td>${row.Status_Pemakai}</td>
        <td>${row.Jabatan}</td>
        <td>${row.Nomor_Identitas_Pemakai_atau_NIK}</td>
        <td>${row.Alamat_Domisili}</td>
        <td>${row.No_WA_Pemakai_Kendaraan}</td>
        <td>${row.Dokumen_Sumber_Penggunaan_NOMOR_BAST_PEMAKAIAN}</td>
        <td>${row.Dokumen_Sumber_Penggunaan_TANGGAL_BAST_PEMAKAIAN}</td>
        <td>${row.No_WA_Pengurus_Barang}</td>
        <td>${row.No_WA_KEPALA}</td>
        <td>${row.No_Pol}</td>
        <td>${row.No_Mesin}</td>
        <td>${row.No_Rangka}</td>
        <td>${row.No_BPKB}</td>
        <td>${row.Tanggal_Jatuh_Tempo}</td>
        <td>${row.No_Urut_di_BI}</td>
        <td>${row.SKPD}</td>
        `);
    tableBody.append(tr); // Tambahkan <tr> ke dalam <tbody>
  });

  // Setelah menambah data, panggil DataTable
  $("#myTable").DataTable(); // Menginisialisasi DataTable
}

// ######################
// function displayData(data) {
//   const table = document.querySelector(".data-table");
//   table.innerHTML = ""; // Kosongkan tabel
//   data.forEach((row) => {
//     const tr = document.createElement("tr");
//     // tr.innerHTML = `<td>${row.Name}</td><td>${row.Age}</td><td>${row.Email}</td>`;
//     tr.innerHTML = `
//   <td>${row.No_}</td>
//   <td>${row.NIBAR_atau_NO_REGISTER}</td>
//   <td>${row.Kode_Barang_108}</td>
//   <td>${row.Nama_Barang}</td>
//   <td>${row.Spesifikasi_Barang_MERK}</td>
//   <td>${row.Lokasi_Alamat_Barang}</td>
//   <td>${row.Nama_Pemakai}</td>
//   <td>${row.Status_Pemakai}</td>
//   <td>${row.Jabatan}</td>
//   <td>${row.Nomor_Identitas_Pemakai_atau_NIK}</td>
//   <td>${row.Alamat_Domisili}</td>
//   <td>${row.No_WA_Pemakai_Kendaraan}</td>
//   <td>${row.Dokumen_Sumber_Penggunaan_NOMOR_BAST_PEMAKAIAN}</td>
//   <td>${row.Dokumen_Sumber_Penggunaan_TANGGAL_BAST_PEMAKAIAN}</td>
//   <td>${row.No_WA_Pengurus_Barang}</td>
//   <td>${row.No_WA_KEPALA}</td>
//   <td>${row.No_Pol}</td>
//   <td>${row.No_Mesin}</td>
//   <td>${row.No_Rangka}</td>
//   <td>${row.No_BPKB}</td>
//   <td>${row.Tanggal_Jatuh_Tempo}</td>
//   <td>${row.No_Urut_di_BI}</td>
//   <td>${row.SKPD}</td>
//           `;
//     table.appendChild(tr);
//   });
// }

// Fungsi untuk menambahkan data baru (POST request)
function createData() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;

  fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Name: name, Age: age, Email: email }),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      // Segarkan data setelah menambahkan
      readData();
    })
    .catch((error) => console.error("Error:", error));
}

// Fungsi untuk memperbarui data (PUT request)
function updateData() {
  const id = document.getElementById("update-id").value;
  const name = document.getElementById("update-name").value;
  const age = document.getElementById("update-age").value;
  const email = document.getElementById("update-email").value;

  fetch(apiUrl, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ID: id, Name: name, Age: age, Email: email }),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      // Segarkan data setelah memperbarui
      readData();
    })
    .catch((error) => console.error("Error:", error));
}

// Fungsi untuk menghapus data (DELETE request)
function deleteData() {
  const id = document.getElementById("delete-id").value;

  fetch(apiUrl, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ID: id }),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      // Segarkan data setelah menghapus
      readData();
    })
    .catch((error) => console.error("Error:", error));
}

// Panggil fungsi untuk memuat data saat halaman di-load
window.onload = function () {
  readData();
};

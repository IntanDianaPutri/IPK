// Data Dummy Mahasiswa
const mahasiswa = [
    { "nim": 2105551025, "nama": "Yunita", "jurusan": "Teknologi Informasi" },
    { "nim": 2105551016, "nama": "Puja", "jurusan": "Teknologi Informasi" },
    { "nim": 2105551026, "nama": "Intan", "jurusan": "Teknologi Informasi" },
    { "nim": 2105551098, "nama": "Sintya", "jurusan": "Teknologi Informasi" },
    { "nim": 2105551022, "nama": "Dewi", "jurusan": "Teknologi Informasi" },
    { "nim": 2105551036, "nama": "Eca", "jurusan": "Teknologi Informasi" },
    { "nim": 2105551097, "nama": "Tami", "jurusan": "Teknologi Informasi" },
];

// Data Dummy Mata Kuliah
const mataKuliah = [
    { "kodeMk": "MK001", "namaMk": "Algoritma", "sks": 3 },
    { "kodeMk": "MK002", "namaMk": "Pengujian Perangkat Lunak", "sks": 2 },
    { "kodeMk": "MK003", "namaMk": "Bahasa Indonesia", "sks": 2 },
    { "kodeMk": "MK004", "namaMk": "Bahasa Inggris", "sks": 2 },
    { "kodeMk": "MK005", "namaMk": "Keamanan Informasi", "sks": 3 },
    { "kodeMk": "MK006", "namaMk": "Agama", "sks": 2 },
    { "kodeMk": "MK007", "namaMk": "Pancasila", "sks": 2 },
    { "kodeMk": "MK008", "namaMk": "Machine Learning", "sks": 3 },
    { "kodeMk": "MK009", "namaMk": "Big Data", "sks": 3 },
    { "kodeMk": "MK0010", "namaMk": "Basis Data", "sks": 3 },
];

// Data Dummy KRS (Mata Kuliah yang diambil oleh Mahasiswa)
const krs = [
    { "nim": 2105551025, "kodeMk": "MK001", "nilai": 78 },
    { "nim": 2105551025, "kodeMk": "MK002", "nilai": 88 },
    { "nim": 2105551025, "kodeMk": "MK003", "nilai": 67 },
    { "nim": 2105551025, "kodeMk": "MK004", "nilai": 70 },
    { "nim": 2105551025, "kodeMk": "MK005", "nilai": 80 },
    { "nim": 2105551025, "kodeMk": "MK006", "nilai": 65 },
    { "nim": 2105551016, "kodeMk": "MK001", "nilai": 50 },
    { "nim": 2105551016, "kodeMk": "MK002", "nilai": 80 },
    { "nim": 2105551016, "kodeMk": "MK003", "nilai": 90 },
    { "nim": 2105551016, "kodeMk": "MK004", "nilai": 71 },
    { "nim": 2105551016, "kodeMk": "MK005", "nilai": 65 },
    { "nim": 2105551026, "kodeMk": "MK001", "nilai": 82 },
    { "nim": 2105551026, "kodeMk": "MK002", "nilai": 80 },
    { "nim": 2105551026, "kodeMk": "MK003", "nilai": 88 },
    { "nim": 2105551026, "kodeMk": "MK004", "nilai": 78 },
    { "nim": 2105551026, "kodeMk": "MK005", "nilai": 89 },
    { "nim": 2105551098, "kodeMk": "MK001", "nilai": 78 },
    { "nim": 2105551098, "kodeMk": "MK002", "nilai": 74 },
    { "nim": 2105551098, "kodeMk": "MK003", "nilai": 67 },
    { "nim": 2105551098, "kodeMk": "MK004", "nilai": 85 },
    { "nim": 2105551022, "kodeMk": "MK001", "nilai": 76 },
    { "nim": 2105551022, "kodeMk": "MK002", "nilai": 90 },
    { "nim": 2105551022, "kodeMk": "MK003", "nilai": 98 },
    { "nim": 2105551022, "kodeMk": "MK004", "nilai": 79 },
];

// Fungsi untuk mengubah nilai numerik ke huruf
function getHuruf(nilai) {
    if (nilai >= 85) {
        return "A"; // A
    } else if (nilai >= 75) {
        return "B"; // B
    } else if (nilai >= 65) {
        return "C"; // C
    } else if (nilai >= 55) {
        return "D"; // D
    } else {
        return "E"; // E
    }
}

// Fungsi untuk mendapatkan bobot berdasarkan huruf
function getBobot(huruf) {
    switch (huruf) {
        case "A":
            return 4.0; // Bobot untuk nilai A
        case "B":
            return 3.0; // Bobot untuk nilai B
        case "C+":
            return 2.5; // Bobot untuk nilai C+
        case "C":
            return 2.0; // Bobot untuk nilai C
        case "D":
            return 1.0; // Bobot untuk nilai D
        case "E":
            return 0.0; // Bobot untuk nilai E
        default:
            return 0.0;
    }
}

// Definisikan fungsi untuk mengkonversi nilai ke huruf
function getHuruf(nilai) {
    if (nilai >= 85) {
        return "A"; // Nilai A
    } else if (nilai >= 75) {
        return "B"; // Nilai B
    } else if (nilai >= 65) {
        return "C"; // Nilai C
    } else if (nilai >= 55) {
        return "D"; // Nilai D
    } else {
        return "E"; // Nilai E
    }
}

// Fungsi untuk mendapatkan bobot berdasarkan huruf
function getBobot(huruf) {
    switch (huruf) {
        case "A":
            return 4.0; // Bobot untuk nilai A
        case "B":
            return 3.0; // Bobot untuk nilai B
        case "C+":
            return 2.5; // Bobot untuk nilai C+
        case "C":
            return 2.0; // Bobot untuk nilai C
        case "D":
            return 1.0; // Bobot untuk nilai D
        case "E":
            return 0.0; // Bobot untuk nilai E
        default:
            return 0.0;
    }
}

function hitungIPK() {
    const nimInput = parseInt(document.getElementById("nim").value);
    if (isNaN(nimInput)) {
        alert("Masukkan nomor mahasiswa yang valid.");
        return;
    }

    const mahasiswaTarget = mahasiswa.find(m => m.nim === nimInput);
    if (!mahasiswaTarget) {
        alert("Mahasiswa tidak ditemukan.");
        return;
    }

    const krsMahasiswa = krs.filter(k => k.nim === mahasiswaTarget.nim);
    if (krsMahasiswa.length === 0) {
        alert("Mahasiswa belum mengambil mata kuliah.");
        return;
    }

    let totalSKS = 0;
    let totalBobot = 0;

    krsMahasiswa.forEach(k => {
        const mataKuliahDetail = mataKuliah.find(mk => mk.kodeMk === k.kodeMk);
        const sks = mataKuliahDetail.sks;
        const huruf = getHuruf(k.nilai);
        const bobot = getBobot(huruf);

        totalSKS += sks;
        totalBobot += bobot * sks;
    });

    const ipk = totalBobot / totalSKS; // Hitung IPK

    const hasilIPKDiv = document.getElementById("hasil-ipk");
    hasilIPKDiv.innerHTML = ""; // Bersihkan hasil sebelumnya

    const infoMahasiswa = document.createElement("div");
    infoMahasiswa.innerHTML = `<p>Nama: ${mahasiswaTarget.nama}</p>
                               <p>Jurusan: ${mahasiswaTarget.jurusan}</p>
                               <p>IPK: ${ipk.toFixed(2)}</p>`;
    hasilIPKDiv.appendChild(infoMahasiswa);

    const tabel = document.createElement("table");
    const headerRow = document.createElement("tr");

    const headers = ["Kode MK", "Nama Mata Kuliah", "SKS", "Nilai", "Bobot"];
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });

    tabel.appendChild(headerRow);

    krsMahasiswa.forEach(k => {
        const row = document.createElement("tr");
        const mataKuliahDetail = mataKuliah.find(mk => mk.kodeMk === k.kodeMk);

        const values = [k.kodeMk, mataKuliahDetail.namaMk, mataKuliahDetail.sks, getHuruf(k.nilai), getBobot(getHuruf(k.nilai))];

        values.forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            row.appendChild(td);
        });

        tabel.appendChild(row);
    });

    hasilIPKDiv.appendChild(tabel); // Tambahkan tabel ke div hasil
}


function hitungIPKRataRata() {
    const hasilIPKDiv = document.getElementById("hasil-ipk");
    hasilIPKDiv.innerHTML = "";

    const tabel = document.createElement("table");
    const headerRow = document.createElement("tr");

    const headers = ["NIM", "Nama", "IPK"];
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });

    tabel.appendChild(headerRow);

    let totalIPK = 0;
    let jumlahMahasiswa = 0;

    mahasiswa.forEach(m => {
        const krsMahasiswa = krs.filter(k => k.nim === m.nim);

        if (krsMahasiswa.length > 0) {
            let totalSKS = 0;
            let totalBobot = 0;

            krsMahasiswa.forEach(k => {
                const mataKuliahDetail = mataKuliah.find(mk => mk.kodeMk === k.kodeMk);
                const sks = mataKuliahDetail.sks;
                const huruf = getHuruf(k.nilai);
                const bobot = getBobot(huruf);

                totalSKS += sks;
                totalBobot += bobot * sks;
            });

            if (totalSKS > 0) {
                const ipk = totalBobot / totalSKS;

                const row = document.createElement("tr");
                const values = [m.nim, m.nama, ipk.toFixed(2)];

                values.forEach(value => {
                    const td = document.createElement("td");
                    td.textContent = value;
                    row.appendChild(td);
                });

                tabel.appendChild(row);

                totalIPK += ipk;
                jumlahMahasiswa += 1;
            } else {
                console.error("Tidak dapat menghitung IPK: Total SKS adalah nol.");
            }
        } else {
            const row = document.createElement("tr");
            const values = [m.nim, m.nama, "Tidak ada mata kuliah"];

            values.forEach(value => {
                const td = document.createElement("td");
                td.textContent = value;
                row.appendChild(td);
            });

            tabel.appendChild(row);
        }
    });

    if (jumlahMahasiswa > 0) {
        const rataRataIPK = totalIPK / jumlahMahasiswa;

        const rataRataRow = document.createElement("tr");
        const rataRataCell = document.createElement("td");
        rataRataCell.colSpan = 3;
        rataRataCell.textContent = `Rata-rata IPK: ${rataRataIPK.toFixed(2)}`;
        rataRataRow.appendChild(rataRataCell);

        tabel.appendChild(rataRataRow);
    } else {
        console.warn("Tidak ada mahasiswa dengan data valid untuk menghitung rata-rata IPK.");
    }

    hasilIPKDiv.appendChild(tabel);
}

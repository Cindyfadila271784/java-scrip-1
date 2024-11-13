//daftarsiswa

const daftarSiswa = [
  {
    nama: "Rosa",
    jenkel: "p",
    umur: "17",
    wfavorit: "kuning",
    seragam: ["osis", "wearpack", "identitas", "pramuka", "olahraga"],
  },
  {
    nama: "Ambar",
    jenkel: "p",
    umur: "16",
    wfavorit: "merah",
    seragam: ["osis", "wearpack", "identitas", "pramuka", "olahraga"],
  },
  {
    nama: "Rizki",
    jenkel: "L",
    umur: "16",
    wfavorit: "ungu",
    seragam: ["osis", "wearpack", "identitas", "pramuka", "olahraga"],
  },
  {
    nama: "Mila",
    jenkel: "p",
    umur: "18",
    wfavorit: "biru",
    seragam: ["osis", "wearpack", "identitas", "pramuka", "olahraga"],
  },
  {
    nama: "Bagas",
    jenkel: "L",
    umur: "15",
    wfavorit: "coklat",
    seragam: ["osis", "wearpack", "identitas", "pramuka", "olahraga"],
  },
]

let mode = 'tambah'

const tampilkanSiswa = () => {
  // mengakses dom
  const tblSiswa = document.getElementById("tblSiswa");
  tblSiswa.innerHTML = `<tr><th>No</th><th>Nama</th><th>Jenis Kelamin</th><th>Umur</th><th>Warna Favorit</th><th>Edit</th><th>Hapus</th></tr>`;
  // menambh isi

  for (let idx in daftarSiswa) {
    console.log(`${parseInt(idx) + 1}. ${daftarSiswa[idx].nama} suka warna ${daftarSiswa[idx].wfavorit} jenis kelamin ${daftarSiswa[idx].jenkel} umur ${daftarSiswa[idx].umur}`);

    tblSiswa.innerHTML += `<tr><td>${parseInt(idx) + 1}</td><td>${daftarSiswa[idx].nama}</td><td>${daftarSiswa[idx].jenkel}</td><td>${daftarSiswa[idx].umur}</td><td>${daftarSiswa[idx].wfavorit}<td><button class="btn btn-warning" onclick="editSiswa('${daftarSiswa[idx].nama}')">Edit</button></td></td><td><buton class= "btn btn-danger" onclick="hapusSiswa('${daftarSiswa[idx].nama}')">Delete</button></td></tr>`;
  }
};

const tambahSiswa = () => {
  const nama = document.getElementById("textNama").value;
  const wfavorit = document.getElementById("textWarna").value;
  const jenkel = document.getElementById("textJenkel").value;
  const umur = document.getElementById("textUmur").value;

  const siswaBaru = {
    nama: nama,
    jenkel: jenkel,
    umur: umur,
    wfavorit: wfavorit,
    seragam: ["osis", "wearpack", "identitas", "pramuka", "olahraga"],
  };

  // jika tambah
  if (mode == "tambah") {
    daftarSiswa.push(siswaBaru);
  } else {
    // jik edit
    daftarSiswa[mode] = siswaBaru;
  }

  document.getElementById("textNama").value = "";
  document.getElementById("textWarna").value = "";
  document.getElementById("textJenkel").value = "";
  document.getElementById("textUmur").value = "";
  mode = "tambah";

  tampilkanSiswa();
};

const cariIndex = (nama) => {
  for (let i = 0; i < daftarSiswa.length; i++) {
    if (daftarSiswa[i].nama == nama) {
      return i
    }
  }
}

const hapusSiswa = (target) => {
  const indexDihapus = cariIndex(target);
  if (indexDihapus !== -1) {
    daftarSiswa.splice(indexDihapus, 1);
    tampilkanSiswa();
  }
};

const editSiswa = (target) => {
  const indexEdit = cariIndex(target)
 
  console.log(target)
  console.log(indexEdit)
  console.log(daftarSiswa[indexEdit])

  const siswaDiedit = daftarSiswa[indexEdit]

    document.getElementById('textNama').value = siswaDiedit.nama
    document.getElementById('textWarna').value = siswaDiedit.wfavorit
    document.getElementById('textJenkel').value = siswaDiedit.jenkel
    document.getElementById('textUmur').value = siswaDiedit.umur

    mode = indexEdit

  }

  const batalEdit = (target) => {
    document.getElementById('textNama').value = ""
    document.getElementById('textWarna').value = ""
    document.getElementById('textJenkel').value = ""
    document.getElementById('textUmur').value = ""
    
    mode = 'tambah'
  }

  


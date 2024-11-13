const daftarKaryawan = [
    {
      nama:"Devyn Ramirez",
      jenkel: "p",
      masa: "10",
      gaji: "Rp. 7.000.000"
    },
    {
      nama: "Harmony Duncan",
      jenkel: "p",
      masa: "5",
      gaji: "Rp. 4.000.000"
     
    },
    {
      nama:  "Clarissa Burgess",
      jenkel: "P",
      masa: "8",
      gaji: "Rp. 7.000.000"
     
    },
    {
      nama:  "Reilly Blanchard",
      jenkel: "p",
      masa: "7",
      gaji: "Rp. 7.000.000"
    },
    {
      nama: "Zion Brooks",
      jenkel: "L",
      masa: "4",
      gaji: "Rp. 4.000.000"
      
    },
    {
      nama:  "Kristin Mcdaniel",
      jenkel: "L",
      masa: "10",
      gaji: "Rp. 7.000.000"
        
    },  
    {
      nama:  "Cindy Chase",
      jenkel: "L",
      masa: "10",
      gaji: "Rp. 7.000.000"
      
    },
    {
      nama: "Kristin Mcdaniel",
      jenkel: "L",
      masa: "9",
      gaji: "Rp. 7.000.000"
       
    },
    {
      nama: "Macey Sanford",
      jenkel: "L",
      masa: "8",
      gaji: "Rp. 7.000.000"
    },
    {
      nama: "Alfredo Faulkner",
      jenkel: "L",
      masa: "7",
      gaji: "Rp. 7.000.000"
    },
  ]

let mode = 'tambah'

const tampilkanKaryawan = () => {
  // mengakses dom
  const tblKaryawan = document.getElementById("tblKaryawan");
  tblKaryawan.innerHTML = `<tr>
                              <th>No</th>
                              <th>Nama</th>
                              <th>Jenkel</th>
                              <th>Masa</th>
                              <th>Gaji</th>
                            </tr>`;
  // menambh isi

  for (let idx in daftarKaryawan) {
    console.log(`${parseInt(idx) + 1}. ${daftarKaryawan[idx].nama} masa kerja ${daftarKaryawan[idx].masa} jenis kelamin ${daftarKaryawan[idx].jenkel} gaji karyawan ${daftarKaryawan[idx].gaji}`);

    tblKaryawan.innerHTML += `<tr><td>${parseInt(idx) + 1}</td><td>${daftarKaryawan[idx].nama}</td><td>${daftarKaryawan[idx].jenkel}</td><td>${daftarKaryawan[idx].masa}</td><td>${daftarKaryawan[idx].gaji}<td><button class="btn btn-warning" onclick="editKaryawan('${daftarKaryawan[idx].nama}')">Edit</button></td></td><td><buton class= "btn btn-danger" onclick="hapusKaryawan('${daftarKaryawan[idx].nama}')">Delete</button></td></tr>`;
  }
};

const tambahKaryawan = () => {
  const nama = document.getElementById("textNama").value;
  const masa = document.getElementById("textMasa").value;
  const jenkel = document.getElementById("textJenkel").value;
  const gaji = document.getElementById("textGaji").value;

  const karyawanBaru = {
    nama: nama,
    jenkel: jenkel,
    masa: masa,
    gaji: gaji,
  };

  // jika tambah
  if (mode == "tambah") {
    daftarKaryawan.push(karyawanBaru);
  } else {
    // jik edit
    daftarKaryawan[mode] = karyawanBaru;
  }

  document.getElementById("textNama").value = "";
  document.getElementById("textMasa").value = "";
  document.getElementById("textJenkel").value = "";
  document.getElementById("textGaji").value = "";
  mode = "tambah";

  tampilkanKaryawan();
};

const cariIndex = (nama) => {
  for (let i = 0; i < daftarKaryawan.length; i++) {
    if (daftarKaryawan[i].nama == nama) {
      return i
    }
  }
}

const hapusKaryawan = (target) => {
  const indexDihapus = cariIndex(target);
  if (indexDihapus !== -1) {
    daftarKaryawan.splice(indexDihapus, 1);
    tampilkanKaryawan();
  }
};

const editKaryawan = (target) => {
  const indexEdit = cariIndex(target)
 
  console.log(target)
  console.log(indexEdit)
  console.log(daftarKaryawan[indexEdit])

  const karyawanDiedit = daftarKaryawan[indexEdit]

    document.getElementById('textNama').value = karyawanDiedit.nama
    document.getElementById('textMasa').value = karyawanDiedit.masa
    document.getElementById('textJenkel').value = karyawanDiedit.jenkel
    document.getElementById('textGaji').value = karyawanDiedit.gaji

    mode = indexEdit

  }

  const batalEdit = (target) => {
    document.getElementById('textNama').value = ""
    document.getElementById('textMasa').value = ""
    document.getElementById('textJenkel').value = ""
    document.getElementById('textGaji').value = ""
    
    mode = 'tambah'
  }

  


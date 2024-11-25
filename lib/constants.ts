import { User } from "next-auth";

type Role =
  | "Treasurer"
  | "Treasurer 2"
  | "vice chairman"
  | "Secretary"
  | "Class Leader"
  | "Cleanliness";

interface OutClass {
  class: number;
  semester: number;
}

export interface IStudents {
  name: string;
  instagram: string;
  absen: number;
  role?: Role; // Opsional, karena tidak semua siswa memiliki role
  out?: OutClass; // Opsional, karena tidak semua siswa keluar
}

type Schedule = {
  XII: DaySchedule[];
  XI: DaySchedule[];
};

type DaySchedule = {
  [day: string]: Lesson[]; // day adalah key seperti "senin", "selasa", dst.
};

type Lesson = {
  jamKe: number;
  waktu: string;
  mataPelajaran?: string; // Optional karena "aktivitas" tidak ada "mataPelajaran"
  aktivitas?: string; // Optional karena sebagian hanya ada "mataPelajaran"
  namaGuru: string;
  ruangan: string;
};

// Tipe untuk jurusan
interface Major {
  name: string;
  code: string;
}

// Tipe untuk data sekolah
interface School {
  name: string;
  address: string;
  major: Major[];
}

// Tipe untuk data jumlah siswa per kelas
interface StudentCount {
  class10: number;
  class11: number;
  class12: number;
}

// Tipe untuk data wali kelas
interface HomeroomTeachers {
  class10: string;
  class11: string;
  class12: string;
}

// Tipe untuk kegiatan paduan suara
interface Choir {
  date: string;
  time: string;
  location: string;
}

// Tipe untuk informasi kelas
interface ClassInfo {
  className: string;
  studentsCount: number;
  batch: string;
  batchASXII: string;
  graduationYear: string;
  studentCount: StudentCount;
  homeroomTeachers: HomeroomTeachers;
  choir: Choir;
}

// Tipe utama untuk classData
interface ClassData {
  school: School;
  major: string;
  classInfo: ClassInfo & {
    students: IStudents[]; // Tambahkan array siswa
    schedule: Schedule; // Tambahkan jadwal kelas
  };
}

export const students: IStudents[] = [
  {
    name: "Abbas",
    instagram: "",
    absen: 1,
  },
  {
    name: "Achmad Rum",
    instagram: "zyhmd_",
    absen: 2,
  },
  {
    name: "Addan Welianto",
    instagram: "adanwel",
    absen: 3,
  },
  {
    name: "Akmalul Hadi",
    instagram: "akmllhd",
    absen: 4,
  },
  {
    name: "Andi Suherman",
    instagram: "andiii_deii",
    absen: 5,
  },
  {
    name: "Arga Phurwanto",
    instagram: "argphu_042",
    absen: 6,
  },
  {
    name: "Bintang Saputra",
    instagram: "saputra.ra_",
    absen: 7,
  },
  {
    name: "Dafa Prasetyo",
    instagram: "dafp_tio",
    absen: 8,
  },
  {
    name: "Dhimas Zhidqi Fariz Achmad",
    instagram: "dhimszidqi_",
    absen: 9,
  },
  {
    name: "Fadli Putra Feriansyah",
    instagram: "feadlu",
    role: "Treasurer",
    absen: 10,
  },
  {
    name: "Fajar Ilham Irawan",
    instagram: "pjrilhmm",
    absen: 11,
  },
  {
    name: "Faris Nur Hakim",
    instagram: "farisnurhkim",
    absen: 12,
  },
  {
    name: "Gilang Angga Kusuma",
    instagram: "_varlacuy",
    absen: 13,
  },
  {
    name: "Ibnu Nuur Rosyad",
    instagram: "ibnuurosyad",
    absen: 14,
  },
  {
    name: "Iqbal Haniya",
    instagram: "ibalx666",
    absen: 15,
  },
  {
    name: "Khinan Zhakaria",
    instagram: "khinan.z_",
    role: "vice chairman",
    absen: 16,
  },
  {
    name: "Muhammad Fadhil",
    instagram: "fdhll0_",
    out: { class: 11, semester: 2 },
    absen: 17,
  },
  {
    name: "Muammar Ali Nafis",
    instagram: "linafss_",
    absen: 18,
  },
  {
    name: "Muhammad Amizola Rahmandani",
    instagram: "misolasido21",
    absen: 19,
  },
  {
    name: "Muhammad Bayu Adji",
    instagram: "bayuuadji__",
    absen: 20,
  },
  {
    name: "Muhammad Fallah Mumtaz",
    instagram: "falah_mz2005",
    absen: 21,
  },
  {
    name: "Muhammad Rafi",
    instagram: "eh.pii_",
    absen: 22,
  },
  {
    name: "Muhammad Sayid Alghifari",
    instagram: "_justfaryy",
    absen: 23,
  },
  {
    name: "Muhammad Ulul Azmi",
    instagram: "muhammad_azmi_2006",
    role: "Secretary",
    absen: 24,
  },
  {
    name: "Naufal Fauzian",
    instagram: "naufalfazn",
    absen: 25,
  },
  {
    name: "Nur Muhammad Hamizan",
    instagram: "",
    absen: 26,
  },
  {
    name: "Putra Pratama Hariyadi",
    instagram: "puutrraprtma",
    absen: 27,
  },
  {
    name: "Rafi Maulana",
    instagram: "rapii_maulanaa",
    absen: 28,
  },
  {
    name: "Rasyad Ripno Angoro",
    instagram: "brezexy_",
    role: "Class Leader",
    absen: 29,
  },
  {
    name: "Rifqi Rifai",
    instagram: "seojoo.n_c",
    role: "Cleanliness",
    absen: 30,
  },
  {
    name: "Surya Adi Maulana",
    instagram: "surya_adii06",
    absen: 31,
  },
  {
    name: "Zeam Indra Gunawan",
    instagram: "zeamindra29_",
    role: "Treasurer 2",
    absen: 32,
  },
];

const schedule: Schedule = {
  XII: [
    {
      senin: [
        {
          jamKe: 1,
          waktu: "07.00 - 07.40",
          aktivitas: "Upacara/Pembinaan",
          namaGuru: "-",
          ruangan: "-",
        },
        {
          jamKe: 2,
          waktu: "07.40 - 08.20",
          mataPelajaran: "Kewirausahaan",
          namaGuru: "Susida Sulastriwati, S.Pd.",
          ruangan: "223",
        },
        {
          jamKe: 3,
          waktu: "08.20 - 09.00",
          mataPelajaran: "Kewirausahaan",
          namaGuru: "Susida Sulastriwati, S.Pd.",
          ruangan: "223",
        },
        {
          jamKe: 4,
          waktu: "09.00 - 09.40",
          mataPelajaran: "Kewirausahaan",
          namaGuru: "Susida Sulastriwati, S.Pd.",
          ruangan: "223",
        },
        {
          jamKe: 6,
          waktu: "10.40 - 11.20",
          mataPelajaran: "B. Inggris",
          namaGuru: "Nurul Aeni, S.Pd.",
          ruangan: "223",
        },
        {
          jamKe: 7,
          waktu: "11.20 - 12.00",
          mataPelajaran: "B. Inggris",
          namaGuru: "Nurul Aeni, S.Pd.",
          ruangan: "223",
        },
        {
          jamKe: 8,
          waktu: "13.00 - 13.40",
          mataPelajaran: "PAI dan BP",
          namaGuru: "Edi Junaedi, S.Pd.I.",
          ruangan: "223",
        },
        {
          jamKe: 9,
          waktu: "13.40 - 14.20",
          mataPelajaran: "PAI dan BP",
          namaGuru: "Edi Junaedi, S.Pd.I.",
          ruangan: "223",
        },
        {
          jamKe: 10,
          waktu: "14.20 - 15.00",
          mataPelajaran: "PAI dan BP",
          namaGuru: "Edi Junaedi, S.Pd.I.",
          ruangan: "223",
        },
      ],
    },
    {
      selasa: [
        {
          jamKe: 1,
          waktu: "07.00 - 07.40",
          mataPelajaran: "IEC",
          namaGuru: "IEC-XII",
          ruangan: "225",
        },
        {
          jamKe: 2,
          waktu: "07.40 - 08.20",
          mataPelajaran: "IEC",
          namaGuru: "IEC-XII",
          ruangan: "225",
        },
        {
          jamKe: 3,
          waktu: "08.20 - 09.00",
          mataPelajaran: "B. Indo",
          namaGuru: "Yeva Purnama, S.Pd.",
          ruangan: "225",
        },
        {
          jamKe: 4,
          waktu: "09.00 - 09.40",
          mataPelajaran: "B. Indo",
          namaGuru: "Yeva Purnama, S.Pd.",
          ruangan: "225",
        },
        {
          jamKe: 6,
          waktu: "10.40 - 11.20",
          mataPelajaran: "B. Inggris",
          namaGuru: "Nurul Aeni, S.Pd.",
          ruangan: "225",
        },
        {
          jamKe: 7,
          waktu: "11.20 - 12.00",
          mataPelajaran: "B. Inggris",
          namaGuru: "Nurul Aeni, S.Pd.",
          ruangan: "225",
        },
        {
          jamKe: 8,
          waktu: "13.00 - 13.40",
          mataPelajaran: "PBO II",
          namaGuru: "Ade Irna Ikbaliah, S.Kom.",
          ruangan: "LAB 2",
        },
        {
          jamKe: 9,
          waktu: "13.40 - 14.20",
          mataPelajaran: "PBO II",
          namaGuru: "Ade Irna Ikbaliah, S.Kom.",
          ruangan: "LAB 2",
        },
      ],
    },
    {
      rabu: [
        {
          jamKe: 1,
          waktu: "07.00 - 07.40",
          mataPelajaran: "Basis Data 2",
          namaGuru: "Ade Irna Ikbaliah, S.Kom.",
          ruangan: "LAB 2",
        },
        {
          jamKe: 2,
          waktu: "07.40 - 08.20",
          mataPelajaran: "Basis Data 2",
          namaGuru: "Ade Irna Ikbaliah, S.Kom.",
          ruangan: "LAB 2",
        },
        {
          jamKe: 3,
          waktu: "08.20 - 09.00",
          mataPelajaran: "Basis Data 2",
          namaGuru: "Ade Irna Ikbaliah, S.Kom.",
          ruangan: "LAB 2",
        },
        {
          jamKe: 4,
          waktu: "09.00 - 09.40",
          mataPelajaran: "Basis Data 2",
          namaGuru: "Ade Irna Ikbaliah, S.Kom.",
          ruangan: "LAB 2",
        },
        {
          jamKe: 5,
          waktu: "10.00 - 10.40",
          mataPelajaran: "B. Indo",
          namaGuru: "Yeva Purnama, S.Pd.",
          ruangan: "226",
        },
        {
          jamKe: 6,
          waktu: "10.40 - 11.20",
          mataPelajaran: "B. Indo",
          namaGuru: "Yeva Purnama, S.Pd.",
          ruangan: "226",
        },
        {
          jamKe: 7,
          waktu: "11.20 - 12.00",
          mataPelajaran: "PPKN",
          namaGuru: "Kusmanto, S.Pd.",
          ruangan: "226",
        },
        {
          jamKe: 8,
          waktu: "13.00 - 13.40",
          mataPelajaran: "PPKN",
          namaGuru: "Kusmanto, S.Pd.",
          ruangan: "226",
        },
      ],
    },
    {
      kamis: [
        {
          jamKe: 1,
          waktu: "07.00 - 07.40",
          mataPelajaran: "P. WEB II",
          namaGuru: "Fiqri Noor Hadi, S.T.",
          ruangan: "LAB 1",
        },
        {
          jamKe: 2,
          waktu: "07.40 - 08.20",
          mataPelajaran: "P. WEB II",
          namaGuru: "Fiqri Noor Hadi, S.T.",
          ruangan: "LAB 1",
        },
        {
          jamKe: 3,
          waktu: "08.20 - 09.00",
          mataPelajaran: "P. WEB II",
          namaGuru: "Fiqri Noor Hadi, S.T.",
          ruangan: "LAB 1",
        },
        {
          jamKe: 4,
          waktu: "09.00 - 09.40",
          mataPelajaran: "P. WEB II",
          namaGuru: "Fiqri Noor Hadi, S.T.",
          ruangan: "LAB 1",
        },
        {
          jamKe: 5,
          waktu: "10.40 - 11.20",
          mataPelajaran: "P. WEB II",
          namaGuru: "Fiqri Noor Hadi, S.T.",
          ruangan: "LAB 1",
        },
        {
          jamKe: 6,
          waktu: "10.40 - 11.20",
          mataPelajaran: "P. WEB II",
          namaGuru: "Fiqri Noor Hadi, S.T.",
          ruangan: "LAB 1",
        },
        {
          jamKe: 7,
          waktu: "11.20 - 12.00",
          mataPelajaran: "P. WEB II",
          namaGuru: "Fiqri Noor Hadi, S.T.",
          ruangan: "LAB 1",
        },
        {
          jamKe: 8,
          waktu: "13.00 - 13.40",
          mataPelajaran: "P. WEB II",
          namaGuru: "Fiqri Noor Hadi, S.T.",
          ruangan: "LAB 1",
        },
        {
          jamKe: 9,
          waktu: "13.40 - 14.20",
          mataPelajaran: "P. WEB II",
          namaGuru: "Fiqri Noor Hadi, S.T.",
          ruangan: "LAB 1",
        },
      ],
    },
    {
      jumat: [
        {
          jamKe: 1,
          waktu: "07.00 - 07.40",
          mataPelajaran: "Matematika",
          namaGuru: "Slamet Turah, S.Pd.",
          ruangan: "227",
        },
        {
          jamKe: 2,
          waktu: "07.40 - 08.20",
          mataPelajaran: "Matematika",
          namaGuru: "Slamet Turah, S.Pd.",
          ruangan: "227",
        },
        {
          jamKe: 3,
          waktu: "08.20 - 09.00",
          mataPelajaran: "Matematika",
          namaGuru: "Slamet Turah, S.Pd.",
          ruangan: "227",
        },
        {
          jamKe: 4,
          waktu: "09.00 - 09.40",
          mataPelajaran: "Matematika",
          namaGuru: "Slamet Turah, S.Pd.",
          ruangan: "227",
        },
      ],
    },
    {
      sabtu: [
        {
          jamKe: 1,
          waktu: "07.00 - 07.40",
          mataPelajaran: "PKK",
          namaGuru: "Rico Chandra, S.Kom.",
          ruangan: "LAB 3",
        },
        {
          jamKe: 2,
          waktu: "07.40 - 08.20",
          mataPelajaran: "PKK",
          namaGuru: "Rico Chandra, S.Kom.",
          ruangan: "LAB 3",
        },
        {
          jamKe: 3,
          waktu: "08.20 - 09.00",
          mataPelajaran: "PKK",
          namaGuru: "Rico Chandra, S.Kom.",
          ruangan: "LAB 3",
        },
        {
          jamKe: 4,
          waktu: "09.00 - 09.40",
          mataPelajaran: "PKK",
          namaGuru: "Rico Chandra, S.Kom.",
          ruangan: "LAB 3",
        },
      ],
    },
  ],

  XI: [
    {
      senin: [
        {
          jamKe: 8,
          waktu: "13.00 - 14.20",
          mataPelajaran: "PBO/OOP 1",
          namaGuru: "Rio Dening Roso, S.Kom",
          ruangan: "LAB 3",
        },
        {
          jamKe: 9,
          waktu: "14.20 - 15.00",
          mataPelajaran: "PBO/OOP 1",
          namaGuru: "Rio Dening Roso, S.Kom",
          ruangan: "LAB 3",
        },
        {
          jamKe: 10,
          waktu: "15.00 - 15.40",
          mataPelajaran: "PBO/OOP 1",
          namaGuru: "Rio Dening Roso, S.Kom",
          ruangan: "LAB 3",
        },
        {
          jamKe: 11,
          waktu: "15.40 - 16.20",
          mataPelajaran: "PBO/OOP 1",
          namaGuru: "Rio Dening Roso, S.Kom",
          ruangan: "LAB 3",
        },
        {
          jamKe: 12,
          waktu: "16.20 - 17.00",
          mataPelajaran: "PBO/OOP 1",
          namaGuru: "Rio Dening Roso, S.Kom",
          ruangan: "LAB 3",
        },
      ],
    },
    {
      selasa: [
        {
          jamKe: 1,
          waktu: "07.00 - 07.40",
          mataPelajaran: "PPL",
          namaGuru: "Fatmawati, S.I.Kom",
          ruangan: "LAB 2",
        },
        {
          jamKe: 2,
          waktu: "07.40 - 08.20",
          mataPelajaran: "PPL",
          namaGuru: "Fatmawati, S.I.Kom",
          ruangan: "LAB 2",
        },
        {
          jamKe: 3,
          waktu: "08.20 - 09.00",
          mataPelajaran: "PPL",
          namaGuru: "Fatmawati, S.I.Kom",
          ruangan: "LAB 2",
        },
        {
          jamKe: 4,
          waktu: "09.00 - 09.40",
          mataPelajaran: "PPL",
          namaGuru: "Fatmawati, S.I.Kom",
          ruangan: "LAB 2",
        },
        {
          jamKe: 6,
          waktu: "10.00 - 10.40",
          mataPelajaran: "PAI & BP",
          namaGuru: "Edi Junaedi, S.Pd.I.",
          ruangan: "222",
        },
        {
          jamKe: 7,
          waktu: "10.40 - 11.20",
          mataPelajaran: "PAI & BP",
          namaGuru: "Edi Junaedi, S.Pd.I.",
          ruangan: "222",
        },
        {
          jamKe: 8,
          waktu: "11.20 - 12.00",
          mataPelajaran: "PAI & BP",
          namaGuru: "Edi Junaedi, S.Pd.I.",
          ruangan: "222",
        },
        {
          jamKe: 9,
          waktu: "13.00 - 13.40",
          mataPelajaran: "P. WEB & PB",
          namaGuru: "Hardiyanto, S.Kom.",
          ruangan: "LAB 3",
        },
        {
          jamKe: 10,
          waktu: "13.40 - 14.20",
          mataPelajaran: "P. WEB & PB",
          namaGuru: "Hardiyanto, S.Kom.",
          ruangan: "LAB 3",
        },
        {
          jamKe: 11,
          waktu: "14.20 - 15.00",
          mataPelajaran: "P. WEB & PB",
          namaGuru: "Hardiyanto, S.Kom.",
          ruangan: "LAB 3",
        },
        {
          jamKe: 12,
          waktu: "15.00 - 15.40",
          mataPelajaran: "P. WEB & PB",
          namaGuru: "Hardiyanto, S.Kom.",
          ruangan: "LAB 3",
        },
        {
          jamKe: 13,
          waktu: "15.40 - 16.20",
          mataPelajaran: "P. WEB & PB",
          namaGuru: "Hardiyanto, S.Kom.",
          ruangan: "LAB 3",
        },
        {
          jamKe: 9,
          waktu: "16.20 - 17.00",
          mataPelajaran: "P. WEB & PB",
          namaGuru: "Hardiyanto, S.Kom.",
          ruangan: "LAB 3",
        },
      ],
    },
    {
      rabu: [
        {
          jamKe: 1,
          waktu: "07.00 - 07.40",
          mataPelajaran: "MULOK",
          namaGuru: "Ade Irna Ikbaliah, S.Kom.",
          ruangan: "LAB 2",
        },
        {
          jamKe: 2,
          waktu: "07.40 - 08.20",
          mataPelajaran: "MULOK",
          namaGuru: "Ade Irna Ikbaliah, S.Kom.",
          ruangan: "LAB 2",
        },
        {
          jamKe: 3,
          waktu: "08.20 - 09.00",
          mataPelajaran: "MULOK",
          namaGuru: "Ade Irna Ikbaliah, S.Kom.",
          ruangan: "LAB 2",
        },
        {
          jamKe: 4,
          waktu: "09.00 - 09.40",
          mataPelajaran: "MULOK",
          namaGuru: "Ade Irna Ikbaliah, S.Kom.",
          ruangan: "LAB 2",
        },
        {
          jamKe: 5,
          waktu: "10.00 - 10.40",
          mataPelajaran: "MULOK",
          namaGuru: "Ade Irna Ikbaliah, S.Kom.",
          ruangan: "LAB 2",
        },
        {
          jamKe: 6,
          waktu: "10.40 - 11.20",
          mataPelajaran: "B. Ing",
          namaGuru: "Imas Ferdiansyah, S.Pd.",
          ruangan: "107",
        },
        {
          jamKe: 7,
          waktu: "11.20 - 12.00",
          mataPelajaran: "B. Ing",
          namaGuru: "Imas Ferdiansyah, S.Pd.",
          ruangan: "107",
        },
        {
          jamKe: 8,
          waktu: "13.00 - 13.40",
          mataPelajaran: "Matematika",
          namaGuru: "Lutfiha, S.Pd.",
          ruangan: "107",
        },
        {
          jamKe: 9,
          waktu: "13.40 - 14.20",
          mataPelajaran: "Matematika",
          namaGuru: "Lutfiha, S.Pd.",
          ruangan: "107",
        },
        {
          jamKe: 10,
          waktu: "14.20 - 15.00",
          mataPelajaran: "IEC",
          namaGuru: "Rico Chandra, S.Kom.",
          ruangan: "107",
        },
        {
          jamKe: 11,
          waktu: "15.00 - 15.40",
          mataPelajaran: "IEC",
          namaGuru: "Rico Chandra, S.Kom.",
          ruangan: "107",
        },
      ],
    },
    {
      kamis: [
        {
          jamKe: 1,
          waktu: "07.00 - 07.40",
          mataPelajaran: "B. Indo",
          namaGuru: "Drs. Wahyu Sriyatun",
          ruangan: "220",
        },
        {
          jamKe: 2,
          waktu: "07.40 - 08.20",
          mataPelajaran: "B. Indo",
          namaGuru: "Drs. Wahyu Sriyatun",
          ruangan: "220",
        },
        {
          jamKe: 3,
          waktu: "08.20 - 09.00",
          mataPelajaran: "Penjas",
          namaGuru: "Hanif",
          ruangan: "Lapangan/220",
        },
        {
          jamKe: 4,
          waktu: "09.00 - 09.40",
          mataPelajaran: "Penjas",
          namaGuru: "Hanif",
          ruangan: "Lapangan/220",
        },
        {
          jamKe: 5,
          waktu: "10.40 - 11.20",
          mataPelajaran: "PKK (Teori)",
          namaGuru: "Surahman, S.Pd.",
          ruangan: "220",
        },
        {
          jamKe: 6,
          waktu: "10.40 - 11.20",
          mataPelajaran: "PKK (Teori)",
          namaGuru: "Surahman, S.Pd.",
          ruangan: "220",
        },
        {
          jamKe: 7,
          waktu: "11.20 - 12.00",
          mataPelajaran: "PKK (Teori)",
          namaGuru: "Surahman, S.Pd.",
          ruangan: "220",
        },
        {
          jamKe: 8,
          waktu: "13.00 - 13.40",
          mataPelajaran: "Matematika",
          namaGuru: "Lutfiha, S.Pd.",
          ruangan: "220",
        },
        {
          jamKe: 9,
          waktu: "13.40 - 14.20",
          mataPelajaran: "Matematika",
          namaGuru: "Lutfiha, S.Pd.",
          ruangan: "220",
        },
      ],
    },
    {
      jumat: [
        {
          jamKe: 1,
          waktu: "07.00 - 07.40",
          mataPelajaran: "B. Ing",
          namaGuru: "Imas Ferdiansyah, S.Pd.",
          ruangan: "107",
        },
        {
          jamKe: 2,
          waktu: "07.40 - 08.20",
          mataPelajaran: "PPKN",
          namaGuru: "Kusmanto, S.Pd.",
          ruangan: "107",
        },
        {
          jamKe: 3,
          waktu: "08.20 - 09.00",
          mataPelajaran: "PPKN",
          namaGuru: "Kusmanto, S.Pd.",
          ruangan: "107",
        },
        {
          jamKe: 4,
          waktu: "09.00 - 09.40",
          mataPelajaran: "B. Indo",
          namaGuru: "Drs. Wahyu Sriyatun",
          ruangan: "107",
        },
        {
          jamKe: 5,
          waktu: "10.00 - 10.40",
          mataPelajaran: "Basis Data",
          namaGuru: "Ade Irna Ikbaliah, S.Kom.",
          ruangan: "LAB 3",
        },
        {
          jamKe: 4,
          waktu: "13.00 - 13.40",
          mataPelajaran: "Basis Data",
          namaGuru: "Ade Irna Ikbaliah, S.Kom.",
          ruangan: "LAB 3",
        },
      ],
    },
  ],
};

export const classData: ClassData = {
  school: {
    name: "SMK Taruna Bangsa Kota Bekasi",
    address:
      "Jl. Kali Abang Tengah, Perwira, Kec. Bekasi Utara, Kota Bks, Jawa Barat 17122",
    major: [
      { name: "Rekayasa Perangkat Lunak", code: "RPL" },
      { name: "Teknik Audio Video", code: "TAV" },
      { name: "Teknik Kendaraan Ringan", code: "TKR" },
      { name: "Teknik Instalasi Tenaga Listrik", code: "TITL" },
    ],
  },
  major: "Rekayasa Perangkat Lunak",
  classInfo: {
    className: "RPL 1",
    studentsCount: 32,
    batch: "21",
    batchASXII: "24",
    graduationYear: "15 Mei 2024",
    studentCount: {
      class10: 32,
      class11: 31,
      class12: 31,
    },
    homeroomTeachers: {
      class10: "Ibu Wulan Nafesa, S.Kom",
      class11: "Ibu Yeva Purnama, S.Pd",
      class12: "Ibu Yeva Purnama, S.Pd",
    },
    choir: {
      date: "Rabu, 8 Juni 2022",
      time: "07:00 - 12:00",
      location: "-",
    },
    students, // Move students here
    schedule, // Move schedule here
  },
};

export function getInformasi(user: User | null | undefined, prompt: string) {
  const data = classData;
  const siswa = data.classInfo.students.map((student) => {
    return `
    Nama : ${student.name}
    Role : ${student?.role || ""}
    Absen : ${student?.absen || ""}
    Keluar : ${
      student.out
        ? `di Kelas ${student.out.class || "No"}, Semester ${
            student.out.semester
          }`
        : "No"
    }  
    Instagram : ${student?.instagram || ""}
    -----------------------------------------
    `;
  });

  let result = "";
  for (const kelas in schedule) {
    result += `
Jadwal untuk kelas ${kelas}:\n`;
    schedule[kelas as keyof Schedule].forEach((daySchedule) => {
      for (const day in daySchedule) {
        result += `
  --------------------------------------------------------------------------------------------------------------- 
  Hari: ${day}\n`;

        daySchedule[day].forEach((lesson) => {
          result += `
    Jam ke-${lesson.jamKe}:
      Waktu        : ${lesson.waktu}
      ${
        lesson.mataPelajaran
          ? `Mata Pelajaran: ${lesson.mataPelajaran}`
          : `Aktivitas     : ${lesson.aktivitas}`
      }
      Guru         : ${lesson.namaGuru}
      Ruangan      : ${lesson.ruangan}\n`;
        });
      }
    });
  }

  const date = new Date();

  const timestamp = date.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const template = `
  RPL ONE
  Kamu adalah chatbot AI asisten kelas RPL 1 angkatan ke 21 di SMK Taruna Bangsa Kota Bekasi yang ramah, perhatian, dan humoris. kamu saat ini berada di website kelas RPL 1 angkatan ke 21 SMK Taruna Bangsa Kota Bekasi https://smktarunabangsa.rpl1.xyz/. Kamu selalu berusaha memberikan informasi tentang jadwal pelajaran, nama guru, lokasi ruangan, aktivitas kelas dan lain-lain dengan cara yang santai tetapi jelas. Jika ada pertanyaan yang tidak relevan atau tidak kamu ketahui, tanggapi dengan sopan dan arahkan kembali ke topik yang kamu pahami (*Jika pertanyaanya hanya terkait tentang sekolah SMK Taruna Bangsa kota Bekasi (bukan seputar kelas) kamu boleh explore memberikan informasi seputar SMK Taruna bangsa dengan kecerdasan mu yang kamu ketahui walau bukan dari data dibawah ini). Ingat, kamu di sini untuk membantu, jadi tunjukkan perhatianmu pada pengguna dan buat mereka merasa nyaman saat berbicara denganmu. *Kemungkinan mayoritas yang mengunjungi web ini adalah siswa kelas RPL 1 angkatan ke 21 SMK Taruna Bangsa dan wali kelasnya.


  Berikut adalah informasi tentang kelas ${data.major} angkatan ${
    data.classInfo.batch
  } (Angkatan sebagai kelas XII ${data.classInfo.batchASXII}) di ${
    data.school.name
  }:
  (angkatan ke 21 karena tahun masuk 2021, dan sebagi XII RPL 1 angkatan ke 24 karena lulus di tahun 2024)
  Informasi Sekolah:
  Sekolah: ${data.school.name}
  Panggilan: TB atau Thebe atau Taruna Bangsa
  Jurusan: ${data.school.major
    .map((major) => `${major.name} (${major.code})`)
    .join(", ")}
  Siswa terbaik di jurusan RPL: Fadli Putra Feriansyah
  Alamat: ${data.school.address}

  Sosial Media Sekolah:
  Instagram: @smktarunabangsabekasiofficial (https://instagram.com/smktarunabangsabekasiofficial)
  Tiktok: @smktarunabangsabekasi (https://tiktok.com/@smktarunabangsabekasi)
  
  ================================================================================================================
  Informasi Kelas RPL 1 angkatan ${
    data.classInfo.batch
  } (Angkatan sebagai kelas XII ${data.classInfo.batchASXII}):
  Jurusan: ${data.major}
  Kelas: ${data.classInfo.className}
  Tahun Masuk: 2021
  Jumlah Siswa: ${data.classInfo.studentsCount}
  Angkatan ke: ${data.classInfo.batch}
  Angkatan ke Sebagai Kelas XII : ${data.classInfo.batchASXII}
  Tahun Lulus: ${data.classInfo.graduationYear}
  Pelepasan : ${data.classInfo.graduationYear}
  Tempat Pelepasan: Gedung Serbaguna Mahkamah Konstitusi, alamat: ${
    data.classInfo.choir.location
  }
  
  Kegiatan Paduan Suara Tanggal: ${data.classInfo.choir.date}
  Kegiatan Paduan Suara Waktu: ${data.classInfo.choir.time}
  Kegiatan Paduan Suara Lokasi: Gedung Serbaguna Mahkamah Konstitusi, alamat: ${
    data.classInfo.choir.location
  }

  Resmi telah lulus per tanggal: ${data.classInfo.graduationYear}

  Wali Kelas X: ${data.classInfo.homeroomTeachers.class10}
  Wali Kelas XI: ${data.classInfo.homeroomTeachers.class11}
  Wali Kelas XII: ${data.classInfo.homeroomTeachers.class12}

  Alasan ganti wali kelas: adalah karena wali kelas rpl 1 di kelas 10 yaitu ${
    data.classInfo.homeroomTeachers.class10
  } pindah mengajar ke sekolah lain.

  Sosial Media Kelas:
  Instagram: @informatics_one (https://instagram.com/informatics_one) -> berisi informasi tentang struktur kelas, aktivitas, foto dan video.

  Website: https://smktarunabangsa.rpl1.xyz -> web ini hanya one page/1 halaman ada 5 menu link (Home, Structure, Students, Gallery, Chat). dihalaman home berisi informasi tentang instagram kelas (terdapat button yang mengarah ke instagram kelas) dan juga logo Rekayasa Perangkat Lunak dan informasi wali kelas. di halaman Structure berisi informasi tentang struktur kelas, Students berisi informasi Siswa, dihalaman Gallery berisi Foto dan video,di halaman Chats berisi Chat realtime. lalu ada button yang posisinya fixed bottom yang akan men triger modal Ai (chatbot asisten kelas xii rpl 1). lalu ada footer yang menampilkan informasi tentang sekolah, usefull Links, instagram kelas. Lalu ada juga button yang posisinya fixed bottom sebelah kiri yang akan men triger modal yang namanya Thank You, Teacher. Tapi jika di hari guru nasional maka namanya berubah jadi National Teachers Day dan ketika web di mount maka akan show modalnya, isinya ialah ada 4 foto + kalimat ucapan terimakasih kepada guru. Dan terdapat sebuah Audio yang dapat di play dengan control ui nya mirip spotify dengan lagu (Guruku Tersayang).

  fitur di website ini adalah, pencarian siswa dan menampilkan username instagram siswa pada card siswa, Gallery foto dan video,  chat realtime yang dapat reply pesan dan hapus pesan (sebelum menggunakan fitur chat realtime dan AI harus Login menggunakan google terlebih dahulu), dan Ai (chatbot asisten kelas xii rpl 1) yang dapat menjawab terkait seputar informasi kelas RPL 1 angkatan ke 21, untuk aksesnya bisa klik button berwarna biru dengan logo robot di bawah sebelah kanan yang posisinya melayang atau fixed.
  ----------------------------------------------------------------------------------------------------------------
  Pemotretan (Foto ijazah): Jum'at, 22 September 2023, Pukul 08.00 - selesai. Ruang Perpustakaan SMK Taruna Bangsa.
  Cap 3 Jari Ijazah: Jum'at, 28 Juni 2024, Pukul 08.00 - 09.00 WIB. Ruang tata usaha, SMK Taruna Bangsa.
  Ambil Ijazah : Rabu, 14 Agustus 2024, pukul 10.00 - 11.00 WIB. Ruang tata usaha, SMK Taruna Bangsa.
  -------------------------------------------------------------------------------------------------------------
  Ujikom (Uji kompetensi keahlian):
  Tanggal Ujian: 23 Februari 2024 - 9 Maret 2024
  terdapat 7 Gelombang, setiap gelombang terdiri dari 2 hari dan siswanya di gabung antara kelas XII RPL 1 sampai XII RPL 4.

  Ruangan : Lab 1
  
  Project Ujikom:
  siswa hanya boleh milih 1 project nya dan bebas mau mulih mengerjakan di pemrograman web, desktop, atau mobile
  website: Wajib menggunakan Laravel
  desktop: menggunakan VB (visual basic)
  mobile: bebas

    project:
    1. Gallery Foto,
    2. Kasir
    3. Perpustakaan digital

  -------------------------------------------------------------------------------------------------------------
  Healing
    Pantai Pal Anyer: Sabtu, 11 November 2023 - Minggu, 12 November 2023. Berangkat habis pulang sekolah, Transportasi motor -> stasiun Bekasi KRL -> stasiun Rangkasbitung kereta lokal  -> stasiun Merak -> angkot pantai. (Patungan Rp. 94.000) [peserta: (10 orang) Faris, Surya Adi, Khinan, Fadli Putra, Amizola, Ali Nafis, Putra Pratama, Achmad Rum, Abbas]

    Curug Bogor: Sabtu, 07 Oktober 2023. Berangkat Pagi, Transportasi Mobil Naufal (Pajero) [peserta: (7 orang) Faris, Naufal, Surya Adi, Khinan, Fadli Putra, Dafa Prasetyo, Achmad Rum]

    Villa Bogor (Liburan terakhir) : Rabu, 5 Juni 2024 - Jum'at, 7 Juni 2024. Berangkat pagi, Transportasi Motor pribadi, alamat: Barkah Villas's, Jl. Siliwangi, RT.02/RW.02, Cisarua, Kec. Cisarua, Kabupaten Bogor, Jawa Barat 16750 [peserta: (20 orang) Naufal, Nafis, Fajar, Rifqi Rifai, Sayid, Rasyad, Dafa, Muhammad Rafi, Abbas, Addan, Bintang, Ulul Azmi, Achmad Rum, Arga, Andi, Putra Pratama, Gilang, Iqbal, Bayu, Surya Adi]
  ----------------------------------------------------------------------------------------------------------------
  Julukan siswa (sebagian)
    Putra Pratama Hariyadi -> Babeh,
    Muhammad Ulul Azmi -> Bob,
    Rasyad Ripno Angoro -> Yaman,
    Rifqi Rifai -> Paijo,
    Muhammad Sayid Alghifari -> Engkong
    Fajar Ilham Irawan -> Kukang
  ----------------------------------------------------------------------------------------------------------------
  Suasana kelas:
    Berisik, ceria, asik, kadang susah di atur wkwk😄, solid., suka teriak "aaaa" layaknya monyet di hutan wkwk dan pencetus teriak "aaaa" adalah Arga Purwanto karena arga purwanto setiap dipanggil suka nyaut "aaa" mangkanya semua temannya pada sarkas teriak "aaa" hingga jadi kebiasaan di kelas, bisa di sebut juga "aaaa" adalah karakterisitik kelas rpl 1 wkwkwk walauupun ada guru tetap aja ada yang teriak itu kecuali gurunya galak wkwk pokoknya dimana-mana suka teriak "aaa". 

    sebenarnya ga cuman teriak "aaa" tapi ada lagi yaitu teriak "jol" "jol", btw jol adalah nama panggilan Amizola karena Amizola ga suka di teriaki itu ("jol") jadi dia sampai ribut dengan salah satu temannya kejadian ini di kelas 12 pada hari rabu di istirahat pertama yaitu Muhammad Sayid Alghifari, Sayid di lempar kursi lalu Bob (Azmi) ikut melerai tetapi dia ikut kena dorong oleh Amizola hingga dilerai oleh Addan Absen 3. sebenarnya faktor ributnya Amizola dan Sayid bukan hanya amizola kesal terhadap kelas yang teriak "jol" pada saat itu tetapi juga karena bercandanya Sayid dan Amizola waktu di lab 2. setelah kejadian berantemnya itu, kelas sudah tidak teriak "jol" lagi.
    
    ada lagi suasana kelas yang berisik/ricuh sampai di hukum oleh guru kejadian ini di kelas 12 yaitu pada hari senin ketika jam kosong semua siswa pada main lempar lemparan botol air, sapu, dll (yang ringan) hingga kelas ricuh. hinnga obe kelas melaporkan kejadian ricuhnya kelas ini ke guru. akhirnya dihukum lari putari lapangan dan skot jump.

  ----------------------------------------------------------------------------------------------------------------
  
  Siswa: 
    ${siswa.join("")}

  ----------------------------------------------------------------------------------------------------------------
  Kelas pulang di mata pelajaran terakhir sesuai di jadwalnya pada jam/waktu tersebut, istirahat pertama di pukul 09.40 - 10.00, dan istirahat kedua di pukul 12.00 - 13.00. ketika hari jumat di jam ke 10.40 maka semua siswa segera siap siap menuju aula parkir sekolah untuk melaksanakan sholat jum'at.
  
  code mapel
    -MULOK -> Muatan Lokal biasanya belajar Pemrograman desktop dengan vb.net
    -B. Ing -> Bahasa Inggris
    -IEC atau Iec -> intensive English course
    -B. Indo -> Bahasa Indonesia
    -MATEMATIKA -> Matematika
    -PPKN atau PKN -> Pendidikan Kewarganegaraan
    -P. WEB atau PB -> Pemrograman Web atau Pemrograman Bergerak, di kelas 11 baru hanya HTML dan CSS. Dan di kelas 12 baru PHP di (semester 1) dengan framework laravel di (semester 2).
    -PBO atau OOP -> Pemrograman Berorientasi Objek atau Object Oriented Programming, semester pertama belajar eclips, semester kedua belajar java, materi java ada di oracle
    -Basis Data atau Basis Data 2 -> belajar database Mysql.
    -PPL -> Pemrograman Perangkat Lunak, lebih ke belajar membuat use case diagram dll
    -PKK atau Kewirausahaan -> Kewirausahaan, di kelas 11 baru hanya teori kewirausahaan, dan di kelas 12. ada teori di hari senin dan praktek nya di hari Sabtu, kadang yang teori ada praktek nya juga. praktek kewiraushaan di hari sabtu di kelas 12 lebih ke jurusan yaitu sesuai dengan jurusan RPL seperti membuat web/app/desktop yang dapat dijual dll.

    informasi lebih:
    kelas RPL 1 angkatan ke 21 belajar bahasa pemrograman pertamanya ialah bahasa pascal di kelas 10 pada mapel Pemrograman dasar, dan di kelas 11 belajar bahasa pemrograman desktop VB(visual basic), Java, Mysql, HTML dan css. lalu di kelas 12 nya belajar bahasa pemrograman web PHP dengan framework laravel.
  ------------------------------------------------------------------------------------------------------------
    ${result}

  ------------------------------------------------------------------------------------------------------------
  Jawab pertanyaan user berikut ini: 
  Tanggal per hari ini: ${timestamp}
  User dan pertanyaan user: 
    Info user : 
      Name: ${user?.name}
      Email: ${user?.email}
  
    Pertanyaan : ${prompt}


  `;

  return template;
}


export interface IGallery {
  category:
    | "All"
    | "graduation"
    | "nsc"
    | "choir"
    | "random"
    | "task"
    | "main"
    | "bukber"
    | "healing"
    | "reunion, Mrs. Wulan"
    | "year book";
  images?: string[];
}

export const imagesData: IGallery[] = [
  {
    category: "All",
  },
  {
    category: "graduation",
    images: Array.from(
      { length: 14 },
      (_, i) => `/gallery/images/wisuda/wisuda(${i + 1}).jpg`
    ),
  },
  {
    category: "bukber",
    images: Array.from(
      { length: 4 },
      (_, i) => `/gallery/images/bukber/bukber(${i + 1}).jpg`
    ),
  },
  {
    category: "healing",
    images: Array.from(
      { length: 18 },
      (_, i) => `/gallery/images/healing/healing(${i + 1}).jpg`
    ),
  },
  {
    category: "main",
    images: Array.from(
      { length: 5 },
      (_, i) => `/gallery/images/main/main(${i + 1}).jpg`
    ),
  },
  {
    category: "nsc",
    images: Array.from(
      { length: 9 },
      (_, i) => `/gallery/images/nsc/nsc(${i + 1}).jpg`
    ),
  },
  {
    category: "choir",
    images: Array.from(
      { length: 4 },
      (_, i) => `/gallery/images/paduanS/paduan(${i + 1}).jpg`
    ),
  },
  {
    category: "random",
    images: Array.from(
      { length: 69 },
      (_, i) => `/gallery/images/random/random(${i + 1}).jpg`
    ),
  },
  {
    category: "task",
    images: Array.from(
      { length: 13 },
      (_, i) => `/gallery/images/tugas/tugas(${i + 1}).jpg`
    ),
  },
  {
    category: "reunion, Mrs. Wulan",
    images: Array.from(
      { length: 13 },
      (_, i) => `/gallery/images/reuni_buWulan/reunibuWulan(${i + 1}).jpg`
    ),
  },
  {
    category: "year book",
    images: Array.from(
      { length: 2 },
      (_, i) => `/gallery/images/bukuTahunan/bukuTahunan(${i + 1}).jpg`
    ),
  },
];

interface IVideos {
  videos: {
    video: string;
    thumbnail: string;
  }[];
}

export const videosData: IVideos = {
  videos: Array.from({ length: 25 }, (_, i) => ({
    video: `/gallery/video/random(${i + 1}).mp4`,
    thumbnail: `/gallery/video/thumb/${i + 1}.png`,
  })),
};


// type chats = [
//   {
//     id: string;
//     username: string;
//     message: string;
//     replyTo: string; // reply to adalah id chat yang ingin di balas 
//   }
// ]
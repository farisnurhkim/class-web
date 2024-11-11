export interface IStudents {
  name: string;
  instagram: string;
  role?: string;
}

export const students: IStudents[] = [
  {
    name: "Abbas",
    instagram: "",
  },
  {
    name: "Achmad Rum",
    instagram: "zyhmd_",
  },
  {
    name: "Addan Welianto",
    instagram: "adanwel",
  },
  {
    name: "Akmalul Hadi",
    instagram: "akmllhd",
  },
  {
    name: "Andi Suherman",
    instagram: "andiii_deii",
  },
  {
    name: "Arga Phurwanto",
    instagram: "argphu_042",
  },
  {
    name: "Bintang Saputra",
    instagram: "saputra.ra_",
  },
  {
    name: "Dafa Prasetyo",
    instagram: "dafp_tio",
  },
  {
    name: "Dhimas Zhidqi Fariz Achmad",
    instagram: "dhimszidqi_",
  },
  {
    name: "Fadli Putra Feriansyah",
    instagram: "feadlu",
    role: "Treasurer",
  },
  {
    name: "Fajar Ilham Irawan",
    instagram: "pjrilhmm",
  },
  {
    name: "Faris Nur Hakim",
    instagram: "farisnurhkim",
  },
  {
    name: "Gilang Angga Kusuma",
    instagram: "_varlacuy",
  },
  {
    name: "Ibnu Nuur Rosyad",
    instagram: "ibnuurosyad",
  },
  {
    name: "Iqbal Haniya",
    instagram: "ibalx666",
  },
  {
    name: "Khinan Zhakaria",
    instagram: "khinan.z_",
    role: "vice chairman",
  },
  {
    name: "Muhammad Fadhil",
    instagram: "fdhll0_",
  },
  {
    name: "Muammar Ali Nafis",
    instagram: "linafss_",
  },
  {
    name: "Muhammad Amizola Rahmandani",
    instagram: "misolasido21",
  },
  {
    name: "Muhammad Bayu Adji",
    instagram: "bayuuadji__",
  },
  {
    name: "Muhammad Fallah Mumtaz",
    instagram: "falah_mz2005",
  },
  {
    name: "Muhammad Rafi",
    instagram: "eh.pii_",
  },
  {
    name: "Muhammad Sayid Alghifari",
    instagram: "_justfaryy",
  },
  {
    name: "Muhammad Ulul Azmi",
    instagram: "muhammad_azmi_2006",
    role: "Secretary",
  },
  {
    name: "Naufal Fauzian",
    instagram: "naufalfazn",
  },
  {
    name: "Nur Muhammad Hamizan",
    instagram: "",
  },
  {
    name: "Putra Pratama Hariyadi",
    instagram: "puutrraprtma",
  },
  {
    name: "Rafi Maulana",
    instagram: "rapii_maulanaa",
  },
  {
    name: "Rasyad Ripno Angoro",
    instagram: "brezexy_",
    role: "Class Leader",
  },
  {
    name: "Rifqi Rifai",
    instagram: "seojoo.n_c",
    role: "Cleanliness",
  },
  {
    name: "Surya Adi Maulana",
    instagram: "surya_adii06",
  },
  {
    name: "Zeam Indra Gunawan",
    instagram: "zeamindra29_",
    role: "Treasurer 2",
  },
];

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
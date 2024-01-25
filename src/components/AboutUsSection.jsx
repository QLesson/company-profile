import { Image } from "react-bootstrap";

const AboutUsSection = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <h2 className="mt-5 fw-bold">About Us</h2>
          <div className="row align-items-center mt-4">
            <div className="col-md-6 text-center">
              <Image
                src="assets/images/illustration-about.svg"
                alt="illustration-aboutUs"
              />
            </div>
            <div className="col-md-6">
              <p className="d-flex flex-column mt-3 gap-3">
                <span>
                  Qlesson merupakan komunitas di bidang teknologi yang bertujuan
                  untuk bersama sama mempelajari teknologi dan informasi serta
                  lebih aware terhadap perkembangan digital di era masa kini.
                </span>
                <span>
                  Qlesson berdiri pada tanggal 13 Oktober 2023 dengan jumlah 16
                  participant didalamnya. Adapun mengenai makna Qlesson itu
                  sendiri yaitu,
                </span>
                <span>
                  Qlesson = Alphabet Q yang diambil dalam kamus Bahasa inggris
                  yang artinya (Queue = Antrian) yang dimana disempurnakan
                  kembali menjadi “Antrian” pelajar. Jadi pada kata
                  &quot;antrian&quot; bermakna proses karna akan ada proses
                  dalam belajar.
                </span>
                <span>
                  Qlesson = Q(Queue) adalah antrian dan Lesson adalah pelajaran
                  bisa diartikan sebagai antrian pelajaran pelajaran yang harus
                  dipelajari.
                </span>
              </p>
            </div>
          </div>
          <h2 className="visi my-4">Visi Kami</h2>
          <p>
            Menjadikan Forum sebagai media belajar untuk menciptakan suatu
            inovasi
          </p>
          <h2 className="misi my-4">Misi Kami</h2>
          <div className="row mt-4">
            <div className="col-md-6 text-center">
              <Image
                src="assets/images/illustration-misi1.svg"
                alt="illustration-aboutUs"
                width={400}
              />
              <p className="mt-3">
                1. Mengembangkan keahlian serta membangun kreatifitas dan
                kolaborasi
              </p>
            </div>
            <div className="col-md-6 text-center">
              <Image
                src="assets/images/illustration-misi2.svg"
                alt="illustration-aboutUs"
                width={400}
              />
              <p className="mt-3">
                2. Mampu mengimplementasikan keahlian dibidang IT
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;

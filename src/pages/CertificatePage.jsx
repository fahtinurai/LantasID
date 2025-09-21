// src/pages/CertificatePage.jsx
import { useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function CertificatePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const certificateRef = useRef(); // Ref untuk elemen sertifikat

  // Dummy data sertifikat
  const certificateData = {
    nama: "Asep Sunandar",
    pelatihan: "Menjadi Design Grafis Profesional",
    kompetensi: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Branding",
      "Typography",
    ],
    tanggal: "28 Juli 2025",
    idSertifikat: "LTS-20250728-002",
  };

  // Fungsi untuk unduh sertifikat sebagai PDF
  const handleDownloadPDF = () => {
    const input = certificateRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape", "pt", [canvas.width, canvas.height]);
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`Sertifikat-${certificateData.nama}.pdf`);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-8 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-sm text-gray-700 hover:text-gray-900 appearance-none bg-transparent border-none p-0 cursor-pointer"
        >
          ← Kembali
        </button>

        <button
          onClick={handleDownloadPDF}
          className="flex items-center text-sm text-gray-700 hover:text-gray-900 appearance-none bg-transparent border-none p-0 cursor-pointer"
        >
          ⬇ Unduh
        </button>
      </div>

      {/* Sertifikat */}
      <div className="flex-1 flex justify-center items-center px-4">
        <div
          ref={certificateRef}
          className="bg-white w-[700px] h-[500px] shadow-xl p-10 flex flex-col items-center justify-center relative border border-blue-400"
        >
          {/* Logo */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-2 mb-2">
  <img
    src="/images/LogoLantasID.png" // Atau gambar baru kamu
    alt="Logo LantasID"
    className="w-10 h-10 object-contain"
  />
  <span className="text-lg font-bold text-gray-800">LantasID</span>
</div>

          </div>

          <p className="text-xs tracking-wide text-gray-500 mb-6">
            SERTIFIKAT KELULUSAN
          </p>

          <p className="text-sm text-gray-600 mb-1">
            Dengan ini menyatakan bahwa:
          </p>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            {certificateData.nama}
          </h2>
          <p className="text-sm text-gray-600 mb-2">
            Telah berhasil menyelesaikan pelatihan:
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            {certificateData.pelatihan}
          </h3>

          <p className="font-semibold text-sm text-gray-700 mb-2">
            Kompetensi yang Dicapai:
          </p>
          <ul className="text-sm text-gray-600 list-disc list-inside mb-6">
            {certificateData.kompetensi.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <p className="text-xs text-gray-500 mb-2">
            Diberikan pada tanggal {certificateData.tanggal}
          </p>
          <p className="text-[10px] text-gray-400">
            ID Sertifikat {certificateData.idSertifikat}
          </p>
        </div>
      </div>
    </div>
  );
}

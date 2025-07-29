import { useState } from "react";

const locations = [
  {
    id: "bandung",
    title: "Bandung",
    potensi: "Industri kreatif, digital, fashion",
    pelatihan: "Desain grafis, media sosial, fashion",
  },
  {
    id: "sukabumi",
    title: "Sukabumi & Cianjur",
    potensi: "Pertanian, perkebunan",
    pelatihan: "Pertanian modern, digitalisasi tani",
  },
  {
    id: "bogor",
    title: "Bogor & Depok",
    potensi: "Teknologi, jasa",
    pelatihan: "Digital marketing, coding dasar",
  },
  {
    id: "garut",
    title: "Garut & Tasikmalaya",
    potensi: "UMKM, kerajinan tangan",
    pelatihan: "Pemasaran online, produk lokal",
  },
];

const LocationSelector = () => {
  const [selected, setSelected] = useState("bandung");

  const handleSelect = (id) => {
    setSelected(id);
    console.log("Lokasi dipilih:", id);
  };

  return (
    <section className="bg-[#f2ebe5] py-20" id="pelatihan">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-12">
          Pilih Wilayah Anda
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className={`location-card ${
                selected === loc.id ? "selected" : ""
              } cursor-pointer bg-white rounded-xl shadow p-6 transition hover:shadow-lg`}
              onClick={() => handleSelect(loc.id)}
            >
              <h3 className="text-lg font-bold text-green-700 mb-3">
                {loc.title}
              </h3>
              <p className="text-sm mb-1 text-gray-700">
                <strong>Potensi:</strong> {loc.potensi}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Pelatihan:</strong> {loc.pelatihan}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSelector;

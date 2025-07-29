const Dashboard = () => {
  const dummyProgress = [
    { course: "Desain Grafis", progress: "100%", sertifikat: true },
    { course: "Pertanian Modern", progress: "60%", sertifikat: false },
  ];

  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-10">Dashboard Saya</h2>

        <div className="space-y-6">
          {dummyProgress.map((item, i) => {
            const isComplete = item.progress === "100%";
            return (
              <div
                key={i}
                className="border rounded-xl shadow p-6 bg-white hover:shadow-md transition duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{item.course}</h3>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      item.sertifikat
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {item.sertifikat ? "Sertifikat Tersedia" : "Belum Selesai"}
                  </span>
                </div>

                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden mb-3">
                  <div
                    className={`h-full ${
                      isComplete ? "bg-green-500" : "bg-yellow-400"
                    }`}
                    style={{ width: item.progress }}
                  />
                </div>

                <div className="text-sm text-gray-600 flex justify-between">
                  <span>Progres</span>
                  <span>{item.progress}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
  
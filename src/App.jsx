import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [active, setActive] = useState("home");

  const projects = [
    {
      title: "Website Portfolio",
      desc: "Website personal dengan React & Tailwind",
    },
    {
      title: "Aplikasi Android",
      desc: "Aplikasi mobile sederhana menggunakan Kotlin",
    },
    {
      title: "Sistem Database",
      desc: "Perancangan database untuk sistem akademik kampus",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 backdrop-blur-md bg-white/10 sticky top-0">
        <h1 className="text-xl font-bold">Profil Saya</h1>
        <div className="space-x-6">
          <button onClick={() => setActive("home")} className="hover:text-blue-400">Home</button>
          <button onClick={() => setActive("about")} className="hover:text-blue-400">About</button>
          <button onClick={() => setActive("portfolio")} className="hover:text-blue-400">Portfolio</button>
        </div>
      </nav>

      {/* Content */}
      <div className="px-6 py-10 w-full flex-1">

        {active === "home" && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 min-h-[60vh]"
          >
            <img
              src="/src/assets/foto.jpg"
              alt="profile"
              className="w-40 h-60 rounded-3xl border-4 border-gray-600 shadow-lg object-cover"
            />

            <div className="text-center md:text-left md:pl-6 md:border-l border-white/20 pt-4 md:pt-0 border-t md:border-t-0">
              <h2 className="text-3xl font-bold mb-2">Armadhan Fithra</h2>
              <p className="text-gray-300 mb-2">Mahasiswa Teknik Informatika</p>
              <p className="text-gray-400 max-w-md">
                Saya adalah Mahasiswa Teknik Informatika Universitas Islam Negeri
                 Sultan Syarif Kasim Riau Angkatan 2024.
              </p>
              <p className="text-gray-400 max-w-md">
                Saya tertarik pengembangan aplikasi berbasis website dan mobile
                serta bidang hardware komputer.
                
              </p>
            </div>
          </motion.section>
        )}

        {active === "about" && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold mb-4">Tentang Saya</h2>
            <p className="text-gray-300 leading-relaxed">
              Saya adalah mahasiswa yang memiliki minat di bidang pengembangan web dan mobile. Terbiasa menggunakan React, Tailwind CSS, dan Kotlin untuk membangun aplikasi yang sederhana namun efektif.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-xl">
                <h3 className="font-semibold mb-2">Data Diri</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>Nama: Armadhan Fithra</li>
                  <li>Email: armadhanfithra24@gmail.com</li>
                  <li>No HP: 085392055702</li>
                  <li>Alamat: Pekanbaru, Riau</li>
                </ul>
              </div>

              <div className="bg-white/10 p-4 rounded-xl">
                <h3 className="font-semibold mb-2">Skill</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>MySQL</li>
                  <li>Java</li>
                  <li>HTML</li>
                  <li>Kotlin</li>
                  
                </ul>
              </div>
            </div>
          </motion.section>
        )}

        {active === "portfolio" && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold mb-6">Portfolio</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <div
                  key={i}
                  className="bg-white/10 p-5 rounded-2xl shadow-lg hover:scale-105 transition"
                >
                  <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-gray-300 text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

      </div>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-400 text-sm border-t border-white/10">
        © 2026 Armadhan Fithra
      </footer>
    </div>
  );
}

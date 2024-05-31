import React from "react";

export default function Navbar() {
  return (
    <nav className="flex h-fit w-screen bg-orange-600 font-medium text-white justify-center ">
      <ul className="flex flex-row uppercase justify-around w-full">
        <li className="p-3">Beranda</li>
        <li className="p-3">Profil</li>
        <li className="p-3">Layanan</li>
        <li className="p-3">Produk Hukum</li>
        <li className="p-3">Galeri</li>
      </ul>
    </nav>
  );
}

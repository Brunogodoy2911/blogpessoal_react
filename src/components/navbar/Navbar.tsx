import React from "react";

export default function Navbar() {
  return (
    <header className="flex w-full h-[4.875rem] px-[4.68rem] bg-indigo-900 ">
      <nav className="flex flex-1 justify-between items-center">
        <h1 className="uppercase text-white font-bold text-2xl">
          Blog Pessoal
        </h1>
        <ul className="flex gap-4 text-white">
          <li className="text-[1.125rem] hover:underline hover:cursor-pointer">
            Postagens
          </li>
          <li className="text-lg hover:underline hover:cursor-pointer">
            Temas
          </li>
          <li className="text-lg hover:underline hover:cursor-pointer">
            Cadastrar Tema
          </li>
          <li className="text-lg hover:underline hover:cursor-pointer">
            Perfil
          </li>
          <li className="text-lg hover:underline hover:cursor-pointer">Sair</li>
        </ul>
      </nav>
    </header>
  );
}

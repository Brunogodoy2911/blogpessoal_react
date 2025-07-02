import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();

  const { handleLogout } = React.useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O usuário foi desconectado com sucesso!");
    navigate("/");
  }

  return (
    <header className="flex w-full h-[4.875rem] px-[4.68rem] bg-indigo-900 ">
      <nav className="flex flex-1 justify-between items-center">
        <h1 className="uppercase text-white font-bold text-2xl">
          <Link to="/home">Blog Pessoal</Link>
        </h1>
        <ul className="flex gap-4 text-white">
          <li className="text-[1.125rem] hover:underline hover:cursor-pointer">
            Postagens
          </li>
          <li className="text-lg hover:underline hover:cursor-pointer">
            <NavLink to="/temas">Temas</NavLink>
          </li>
          <li className="text-lg hover:underline hover:cursor-pointer">
            <NavLink to="/cadastrartema">
            Cadastrar Tema

              </NavLink>
          </li>
          <li className="text-lg hover:underline hover:cursor-pointer">
            Perfil
          </li>
          <li
            className="text-lg hover:underline hover:cursor-pointer"
            onClick={logout}
          >
            Sair
          </li>
        </ul>
      </nav>
    </header>
  );
}

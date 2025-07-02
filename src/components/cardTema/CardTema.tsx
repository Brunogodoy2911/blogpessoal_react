import { NavLink } from "react-router";
import Button from "../buttons/Button";
import type Tema from "../../models/Tema";

interface CardTemasProps {
  tema: Tema;
}

export default function CardTema({ tema }: CardTemasProps) {
  return (
    <div className="w-[28.125rem] h-[12.875rem] flex flex-col rounded-lg border-solid border-b-black border-1 overflow-hidden">
      <div className="flex items-center w-full h-12 bg-indigo-800 px-4.5">
        <h1 className="font-bold text-white text-2xl">Tema</h1>
      </div>

      <div className="flex flex-col flex-1 justify-center px-4.5 py-6 gap-1">
        <h1 className="font-semibold text-3xl">{tema.descricao}</h1>
      </div>

      <div className="flex w-full h-12">
        <NavLink to={`/editartema/${tema.id}`}>
          <Button>
            <p className="text-base text-white">Editar</p>
          </Button>
        </NavLink>

        <NavLink to={`/deletartema/${tema.id}`}>
          <Button variant="cancel">
            <p className="text-base text-white">Deletar</p>
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

import { NavLink } from "react-router";
import Button from "../buttons/Button";

export default function CardPostagem() {
  return (
    <div className="w-[28.125rem] h-[11.875rem] flex flex-col rounded-lg border-solid border-b-black border-1 overflow-hidden">
      <div className="flex items-center w-full h-12 bg-indigo-800 px-4.5">
        <h1 className="font-bold text-white text-2xl">Postagem</h1>
      </div>

      <div className="flex flex-col flex-1 justify-center px-4.5 py-6 gap-1">
        <h1 className="font-bold text-xl">POSTAGEM 01</h1>
        <p className="text-base">Texto da Postagem 01</p>
      </div>

      <div className="flex w-full h-12">
        <Button>
          <p className="text-base text-white">Editar</p>
        </Button>
        <Button variant="cancel">
          <p className="text-base text-white">Deletar</p>
        </Button>
      </div>
    </div>
  );
}

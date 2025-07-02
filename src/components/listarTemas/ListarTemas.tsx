import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import type Tema from "../../models/Tema";
import { AuthContext } from "../../contexts/AuthContext";
import { buscar } from "../../services/Service";
import { DNA } from "react-loader-spinner";
import CardTema from "../cardTema/CardTema";

export default function ListarTemas() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(false);

  const [temas, setTemas] = React.useState<Tema[]>([]);

  const { usuario, handleLogout } = React.useContext(AuthContext);
  const token = usuario.token;

  async function buscarTemas() {
    try {
      setIsLoading(true);

      await buscar("/temas", setTemas, {
        headers: {
          Authorization: token,
        },
      });
    } catch (e: any) {
      if (e.toString().includes("401")) {
        handleLogout();
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado!");
      navigate("/");
    }
  });

  React.useEffect(() => {
    buscarTemas();
  }, [temas.length]);

  return (
    <>
      {isLoading && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col mx-2">
          {!isLoading && temas.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhum tema foi encontrado!
            </span>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temas.map((tema) => (
              <CardTema key={tema.id} tema={tema} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

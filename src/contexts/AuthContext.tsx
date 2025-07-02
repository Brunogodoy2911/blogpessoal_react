import React from "react";

import type UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";

interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = React.createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = React.useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleLogin(usuarioLogin: UsuarioLogin) {
    try {
      setIsLoading(true);

      await login("/usuarios/logar", usuarioLogin, setUsuario);
      alert("Usuário logado com sucesso!");
    } catch (e) {
      alert("Erro ao logar, tente novamente!");
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
    });
  }

  return (
    <AuthContext.Provider
      value={{ usuario, handleLogin, handleLogout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

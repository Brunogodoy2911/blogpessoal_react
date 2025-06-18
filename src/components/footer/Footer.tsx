import React from "react";

import {
  LinkedinLogoIcon,
  InstagramLogoIcon,
  FacebookLogoIcon,
} from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 flex w-full h-[8.125rem] flex-col justify-center items-center bg-indigo-900 gap-1">
      <h1 className="font-bold text-white text-xl">
        Blog Pessoal Generation | Copyright: 2025
      </h1>
      <p className="font-bold text-white font-semibold text-base">
        Acesse nossas Redes Sociais
      </p>

      <div className="flex text-white gap-0.5">
        <LinkedinLogoIcon
          size={34}
          className="hover:cursor-pointer hover:text-gray-400 transition ease-in"
        />
        <InstagramLogoIcon
          size={34}
          className="hover:cursor-pointer hover:text-gray-400 transition ease-in"
        />
        <FacebookLogoIcon
          size={34}
          className="hover:cursor-pointer hover:text-gray-400 transition ease-in"
        />
      </div>
    </footer>
  );
}

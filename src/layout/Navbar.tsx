"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Activity, useState } from "react";

export default function Navbar() {
  const [statusMenu, setStatusMenu] = useState(false);

  const toggleMenu = () => {
    setStatusMenu((prev) => !prev);
  };

  const classLink = clsx(
    "block",
    "py-2",
    "px-3",
    "text-heading",
    "rounded",
    " hover:bg-neutral-tertiary",
    " md:hover:bg-transparent",
    " md:border-0",
    " md:hover:text-fg-brand",
    " md:p-0",
    "md:dark:hover:bg-transparent",
  );
  return (
    <header className="w-full top-2 bg-setup-black text-white border-b border-[#39a7ff]">
      <nav>
        <div className="w-full flex flex-wrap items-center justify-between h-20 px-10">
          <Link
            href={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={`https://flowbite.com/docs/images/logo.svg`}
              className="h-7"
              alt="Flowbite Logo"
              width={30}
              height={30}
            />
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
              Vaiperlio Tech
            </span>
          </Link>
          <Activity mode={!statusMenu ? "visible" : "hidden"}>
            <button
              type="button"
              className="block md:hidden w-6 h-6"
              onClick={toggleMenu}
            >
              <i className="fa-solid fa-bars text-lg"></i>
            </button>
          </Activity>

          <div
            className={`${statusMenu ? "block " : "hidden"} z-30 top-0 right-0 md:static fixed w-72 md:block md:w-auto`}
          >
            <ul
              className={` bg-setup-black h-screen md:h-auto opacity-90 md:bg-transparent font-medium flex flex-col justify-center items-center p-4 md:p-0 border-l border-[#39a7ff] rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary`}
            >
              <Activity mode={statusMenu ? "visible" : "hidden"}>
                <button
                  type="button"
                  className="block md:hidden w-6 h-6 fixed top-7 right-10"
                  onClick={toggleMenu}
                >
                  <i className="fa-solid fa-x text-lg"></i>
                </button>
              </Activity>
              <li>
                <Link
                  href={"#"}
                  className={classLink}
                  aria-current="page"
                  onClick={toggleMenu}
                >
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={classLink}
                  aria-current="page"
                  onClick={toggleMenu}
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={classLink}
                  aria-current="page"
                  onClick={toggleMenu}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

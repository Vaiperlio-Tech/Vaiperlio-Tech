"use client";

import Link from "next/link";
import { useState } from "react";
import { Riple } from "react-loading-indicators";
import InputContact from "@/components/InputContact";

interface contactProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  // const [captchaPassed, setCaptchaPassed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendEmailStatus, setSendEmailStatus] = useState(false);
  const [contact, setContact] = useState<contactProps>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const instagram = process.env.NEXT_PUBLIC_LINK_INSTAGRAM || "";
  const github = process.env.NEXT_PUBLIC_LINK_GITHUB || "";
  const whatsapp = process.env.NEXT_PUBLIC_LINK_WHATSAPP || "";

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contact),
    })
      .then((res) => {
        setLoading(false);
        setContact({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setSendEmailStatus(true);
        setTimeout(() => {
          setSendEmailStatus(false);
        }, 3000);
      })
      .catch(() => {
        console.log("error");
      });
    //
  };

  // useEffect(() => {}, [loading]);

  return (
    <section
      className="bg-setup-primary min-h-screen text-white p-10 flex flex-col justify-center items-center"
      id="contact"
    >
      <div className="w-full flex flex-col justify-center items-center mb-8">
        <h2 className="font-bold mb-4 text-xl">Conecte-se ao Futuro</h2>
        <p className="text-sm">
          Entre em contato com nossa equipe e acelere o desenvolvimento do seu
          próximo projeto.
        </p>
      </div>
      <div className="mb-8 flex flex-col justify-center items-center sm:flex-row sm:h-92 w-full">
        <form
          onSubmit={sendEmail}
          className="bg-setup-base flex flex-col justify-center items-center p-4 rounded-md mb-4 w-full sm:mr-4 sm:mb-0 sm:h-full"
        >
          <InputContact
            name="name"
            id="name"
            value={contact.name}
            type="text"
            placeholder="Seu nome"
            onChange={(e) =>
              setContact({
                ...contact,
                name: e.target.value,
              })
            }
          />
          <InputContact
            name="email"
            value={contact.email}
            id="email"
            type="email"
            placeholder="Seu email"
            onChange={(e) =>
              setContact({
                ...contact,
                email: e.target.value,
              })
            }
          />
          <InputContact
            name="phone"
            id="phone"
            type="text"
            value={contact.phone}
            placeholder="Telefone ( Opcional )"
            required={false}
            onChange={(e) =>
              setContact({
                ...contact,
                phone: e.target.value,
              })
            }
          />
          <textarea
            name="message"
            value={contact.message}
            onChange={(e) =>
              setContact({
                ...contact,
                message: e.target.value,
              })
            }
            id="message"
            placeholder="Descreva seu projeto ou solicitação"
            className="border-2 border-setup-secundary px-4 py-2 rounded-md mb-4 w-full min-h-20 text-sm"
            required
          ></textarea>
          <button
            type="submit"
            className={`${loading || sendEmailStatus ? "" : "hover:bg-[#6488EA]"} bg-setup-secundary px-4 py-2 h-10 rounded-md w-full text-sm cursor-pointer`}
            disabled={loading || sendEmailStatus}
          >
            {loading ? (
              <span
                style={{
                  display: "inline-block",
                  transform: "scale(0.3)",
                  transformOrigin: "center",
                  lineHeight: 0,
                  position: "relative",
                  top: -35,
                }}
              >
                <Riple color="#fff" size="large" text="" textColor="" />
              </span>
            ) : sendEmailStatus ? (
              <i className="fa-regular fa-circle-check"></i>
            ) : (
              <>
                Enviar Mensagem
                <i className="fa-regular fa-paper-plane ml-2"></i>
              </>
            )}
          </button>
        </form>
        <div className="flex flex-col items-center justify-center w-full sm:h-full">
          <div className="bg-setup-base w-full rounded-md p-4 mb-4 sm:h-1/2 ">
            <h3 className="text-center mb-4 font-extrabold">
              Informações de Contato
            </h3>
            <ul className="w-full">
              <li className="w-full text-sm text-center mb-2">
                <i className="fa-regular fa-envelope mr-2 text-lg"></i>
                contact@vaiperliotech.com
              </li>
            </ul>
          </div>
          <div className="bg-setup-base w-full p-4 rounded-md flex  sm:h-1/2 flex-col justify-center items-center">
            <h3 className="mb-4 font-extrabold">Redes Sociais</h3>
            <Link
              href={instagram}
              className="mb-2 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram mr-2 text-lg"></i>
              Instagram
            </Link>
            <Link
              href={github}
              className="mb-2 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github mr-2 text-lg"></i>
              Github
            </Link>
          </div>
        </div>
      </div>
      <h2 className="text-center mb-4 font-extrabold text-xl">
        Pronto para construir algo extraordinário?
      </h2>
      <p className="mb-4 text-sm">
        Estamos aqui para transformar sua ideia em uma experiência digital de
        outro nível!.
      </p>
      <Link
        href={whatsapp}
        rel="noopener noreferrer"
        className="bg-setup-green hover:bg-setup-green-hover px-4 py-2 w-64 rounded-md flex justify-center items-center"
        target="_blank"
      >
        <i className="fa-brands fa-whatsapp mr-2 text-lg"></i>
        Falar no Whatsapp
      </Link>
    </section>
  );
}

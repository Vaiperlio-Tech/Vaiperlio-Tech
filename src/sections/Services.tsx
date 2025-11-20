import clsx from "clsx";
import Image from "next/image";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

export default function Services() {
  const scrollItens = {
    card: {
      cardClass: clsx(
        "bg-setup-base flex flex-col w-82 items-center justify-center h-[32rem] sm:flex-row sm:w-full sm:h-64 lg:w-[64rem] border border-white",
      ),
      figureClass: clsx("flex justify-center items-center mb-4 w-64 sm:mr-8"),
      image: clsx("w-64 sm:w-52"),
      div: clsx("w-full sm:w-3/4"),
      h2: clsx("font-bold text-center mb-4"),
      p: clsx("text-sm"),
    },
  };

  const services = [
    {
      title: "Desenvolvimento de Sites",
      description: `Criamos experiências digitais modernas, rápidas e totalmente
        responsivas. Do institucional ao e-commerce, desenvolvemos sites
        que elevam sua presença online e convertem de verdade.`,
      image: {
        src: "/website-creator.svg",
        alt: "criação de website",
      },
    },
    {
      title: "Sistemas e Aplicações Web",
      description: `Transformamos ideias em sistemas robustos e escaláveis.
        Dashboards, plataformas personalizadas, automações e integrações
        — tudo pensado para facilitar o seu dia a dia e impulsionar
        resultados.`,
      image: {
        src: "/dashboard.svg",
        alt: "criação de website",
      },
    },
    {
      title: "Desenvolvimento de Bots & Automação",
      description: `Automatize processos, economize tempo e aumente a produtividade.
        Criamos bots inteligentes para Discord, WhatsApp, Telegram, atendimento,
        moderação e integrações com APIs.`,
      image: {
        src: "/automization.svg",
        alt: "criação de website",
      },
    },
    {
      title: "Design UI/UX",
      description: `Interface bonita não é suficiente — precisa ser funcional.
        Desenhamos layouts modernos, intuitivos e focados na experiência
        do usuário, do protótipo ao design final.`,
      image: {
        src: "/design.svg",
        alt: "criação de website",
      },
    },
    {
      title: "Manutenção, Suporte & Hospedagem",
      description: `Cuidamos do seu projeto para que você cuide do seu negócio.
        Monitoramento, atualizações, otimização de performance e suporte
        contínuo.`,
      image: {
        src: "/suport.svg",
        alt: "criação de website",
      },
    },
    {
      title: "SEO & Performance",
      description: `Mais velocidade, mais alcance, mais clientes. Otimização
        completa para mecanismos de busca, melhorias de performance e
        estrutura pensada para ranquear bem no Google.`,
      image: {
        src: "/seo.svg",
        alt: "criação de website",
      },
    },
  ];
  return (
    <section className="bg-setup-primary h-[50rem] sm:h-[32rem] lg:h-[36rem] text-white pt-8">
      <div className="flex justify-center items-center flex-col h-[14%]">
        <h2 className="text-xl">Nossos Serviços</h2>
        <p className="px-4 mt-2 text-sm">
          Soluções digitais modernas: design, desenvolvimento e automação
          pensados para crescimento e resultado.
        </p>
      </div>
      <ScrollStack
        className="w-full h-[86%] flex flex-col justify-start items-center"
        itemDistance={200}
        itemStackDistance={0}
        baseScale={0.75}
      >
        {services.map((service) => {
          return (
            <ScrollStackItem
              itemClassName={scrollItens.card.cardClass}
              key={service.title}
            >
              <figure className={scrollItens.card.figureClass}>
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  className={scrollItens.card.image}
                  width={100}
                  height={100}
                />
              </figure>
              <div className={scrollItens.card.div}>
                <h2 className={scrollItens.card.h2}>{service.title}</h2>
                <p className={scrollItens.card.p}>{service.description}</p>
              </div>
            </ScrollStackItem>
          );
        })}
      </ScrollStack>
    </section>
  );
}

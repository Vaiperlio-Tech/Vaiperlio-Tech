import Image from "next/image";

export default function AbountUs() {
  return (
    <section className="bg-setup-base min-h-screen text-white py-10 flex flex-col justify-start items-center p-10">
      <h2 className="text-xl mb-10">Quem Somos ?</h2>
      <div className="w-full flex flex-col justify-center items-center">
        <figure className="mb-10 rounded-full">
          <Image
            src={"/about_us.svg"}
            width={100}
            height={100}
            alt="image"
            className="w-64 rounded-full border-2 border-secundary"
          />
        </figure>
        <p className="text-justify">
          Na Vaiperlio Tech, transformamos suas ideias em soluções digitais e
          inteligentes. Somos uma empresa de tecnologia focada em
          desenvolvimento de sites, sistemas, automações e plataformas que
          impulsionam negócios para o futuro.
          <br />
          <br />
          Acreditamos que tecnologia não é apenas código, é experiência,
          inovação e resultado. Por isso, trabalhamos unindo design moderno,
          performance e estratégias digitais para criar produtos que realmente
          fazem diferença no dia a dia dos nossos clientes.
          <br />
          <br />
          Com uma equipe apaixonada por tecnologia, buscamos sempre entregar
          projetos sólidos, escaláveis e alinhados às necessidades de cada
          empresa. Nosso compromisso é simplificar processos, aumentar
          eficiência e ajudar marcas a crescerem de forma consistente no
          ambiente digital.
          <br />
          <br />
          Seja você autônomo, empresa privada ou startup em ascensão, estamos
          aqui para construir a sua presença digital com qualidade,
          transparência e criatividade.
          <br />
          <br />
          <strong className="text-start">
            Tecnologia é o nosso trabalho. <br />
            Resultados são o nosso propósito
          </strong>
        </p>
      </div>
    </section>
  );
}

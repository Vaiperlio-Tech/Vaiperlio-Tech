import { GridScan } from "@/components/GridScan";
import TextType from "@/components/TextType";

export default function Header() {
  return (
    <section className="h-screen flex flex-col justify-center items-start w-full relative">
      <GridScan
        // className="bg-white"
        sensitivity={0.55}
        lineThickness={1}
        linesColor="#173854"
        gridScale={0.1}
        scanColor="#39a7ff"
        scanOpacity={0.4}
        enablePost
        bloomIntensity={0.6}
        chromaticAberration={0.002}
        noiseIntensity={0.01}
        className="h-full"
      />
      <div className="absolute left-0 flex flex-col justify-center items-center w-full">
        <h1 className="mb-4 text-3xl font-bold text-heading md:text-5xl lg:text-6xl emer">
          <TextType
            text="VaiperlioTech()"
            typingSpeed={75}
            pauseDuration={5000}
            className="text-white"
            loop={true}
            cursorCharacter="_"
          />
        </h1>
        <p className=" text-xs md:text-sm lg:text-md font-normal text-center text-body text-[#39a7ff] bg-[#173854] w-52 md:w-64 lg:w-80 px-2 lg:px-4 py-2 rounded-full">
          Soluções de Tecnologia para você!
        </p>
      </div>
    </section>
  );
}

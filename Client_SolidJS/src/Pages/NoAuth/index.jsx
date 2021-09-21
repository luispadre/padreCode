import { CardCourse } from "../../ComponentsUI/CardCourse";
import { useNavigate } from "solid-app-router";
import { For } from "solid-js";
export default function () {
  return (
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
const Section1 = () => {
  const navigate = useNavigate();
  const register = () => {
    navigate("/register");
  };

  return (
    <div class="pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-28 z-10">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 bg-white">
        <div class="text-center flex flex-col items-center">
          <h2 class="text-5xl   tracking-tight leading-tight font-semibold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Clone Startups.
            <br />
            <span class="text-blue-600">Learn to code.</span>
          </h2>
          <p class="mt-3 max-w-md mx-auto lg:mx-0 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl w-8/12">
            <span>¡Codificar es hacer algo real!</span>
            <br />
            <span>
            Codificar mientras se realiza el servicio que realmente se implementa uno por uno 
                Aprender.
            </span>
          </p>
          <div class="mt-10 max-w-md mx-auto lg:mx-0 flex flex-col w-full md:flex-row md:justify-around lg:justify-center md:mt-10">
            <div class="rounded-md shadow ">
              <button
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 rounded-md text-white bg-blue-600  hover:bg-blue-500 focus:outline-none focus:ring  focus:ring-blue-400  transition duration-150 ease-in-out md:text-lg md:px-10"
                onClick={()=>register()}
              >
                Registrate →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Section2 = () => {
  const MejoresCursos = [
    {
      img: "https://d1telmomo28umc.cloudfront.net/media/public/avatars/ytThumbnail_rtMv4Du.jpg",
      nombre: "Udeler",
      Tecnologias: "",
    },
    {
      img: "https://d1telmomo28umc.cloudfront.net/media/public/avatars/ytThumbnail_rtMv4Du.jpg",
      nombre: "Udeler",
      Tecnologias: "",
    },
    {
      img: "https://d1telmomo28umc.cloudfront.net/media/public/avatars/ytThumbnail_rtMv4Du.jpg",
      nombre: "Udeler",
      Tecnologias: "",
    },
    {
      img: "https://d1telmomo28umc.cloudfront.net/media/public/avatars/ytThumbnail_rtMv4Du.jpg",
      nombre: "Udeler",
      Tecnologias: "",
    },
    {
      img: "https://d1telmomo28umc.cloudfront.net/media/public/avatars/ytThumbnail_rtMv4Du.jpg",
      nombre: "Udeler",
      Tecnologias: "",
    },
    {
      img: "https://d1telmomo28umc.cloudfront.net/media/public/avatars/ytThumbnail_rtMv4Du.jpg",
      nombre: "Udeler",
      Tecnologias: "",
    },
  ];
  return (
    <div class="mt-32 relative">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 gap-x-10 pb-10">
        <For each={MejoresCursos}>
          {(item, i) => {
            return <CardCourse />;
          }}
        </For>
      </div>

      <p class="font-serif text-1xl text-center">ver todos los cursos</p>
    </div>
  );
};
const Section3 = () => {
  return <>¿Desafios?</>;
};

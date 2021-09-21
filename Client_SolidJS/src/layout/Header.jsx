import { useLocation, useNavigate } from "solid-app-router";
import { createSignal, Show } from "solid-js";

export default function ({ children }) {
  // const navigate = useNavigate();
  // const register = () => {
  //     navigate("/register");
  // }
  const location = useLocation();

  console.log(location.pathname, "location");
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  const [toggleMenu, setToggleMenu] = createSignal(false);

  const handleToggle = () => setToggleMenu(!toggleMenu());

  return (
    <>
      <nav
        class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
          shadow-md
        "
      >
        <div onClick={() => home()}>PADRECODE</div>

        <svg
          onClick={handleToggle}
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          class="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          class={`${
            toggleMenu()
              ? "md:flex  md:pt-0 pt-10 w-full md:w-auto"
              : "hidden md:flex"
          }`}
          id="menu"
        >
          <ul
            class="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            {location.pathname === "/register" ? (
              <>
                <></>
                <li>
                  <a class="md:p-4 py-2 block hover:text-purple-400">Login</a>
                </li>
                <li>
                  <a class="md:p-4 py-2 block hover:text-purple-400">Join</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a class="md:p-4 py-2 block hover:text-purple-400">Cursos</a>
                </li>
                <li>
                  <a class="md:p-4 py-2 block hover:text-purple-400">
                    Desafios
                  </a>
                </li>
                <li>
                  <a class="md:p-4 py-2 block hover:text-purple-400">
                    Comunidad
                  </a>
                </li>
                <li>
                  <a class="md:p-4 py-2 block hover:text-purple-400">
                    Preguntas mas frecuentes
                  </a>
                </li>
                <li>
                  <a class="md:p-4 py-2 block hover:text-purple-400 text-purple-500">
                    Roadmap
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      {children}
    </>
  );
}

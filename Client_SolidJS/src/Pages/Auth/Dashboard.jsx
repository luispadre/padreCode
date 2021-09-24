export default function () {
  return (
    <>
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="pt-20 pb-56">
          <h2 class="text-2xl font-medium mb-8">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">Tablero</font>
            </font>
          </h2>
          <div class="flex flex-col items-center xl:flex-row justify-between xl:items-start">
            <div class=" w-full md:w-1/2 ">
              <CardProfile />
              {/* <div class=" bg-white shadow-md rounded-md p-5 max-w-screen-sm mt-5 flex items-center col-span-2">
                <div class="mr-5">
                  <img src="/badges/shield_1.svg" class="w-16" />
                </div>
                <div class="flex flex-col">
                  <span class="mb-2 text-gray-800 text-lg font-medium leading-4">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">eres nivel </font>
                    </font>
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">1</font>
                    </font>
                  </span>
                  <span class=" text-sm text-gray-800 font-normal leading-4">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">
                        ¡Únete a más cursos y completa desafíos para desbloquear
                        el siguiente nivel!
                      </font>
                    </font>
                  </span>
                </div>
              </div> */}
            </div>
            <div class="mt-10 xl:mt-0">
              <div class="grid grid-cols-5 gap-2 ">
                <div class="flex flex-col items-center relative">
                  <img
                    src="https://d1telmomo28umc.cloudfront.net/media/public/badges/es6.png"
                    class="w-16 h-16  border-4 border-white rounded-full shadow-md opacity-50"
                  />
                  <div class="bg-cool-gray-800 shadow-sm p-1 absolute z-10 rounded-full bottom-4">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span class=" bg-gray-100 text-gray-500 mt-1 shadow text-sm font-medium px-2 py-x rounded-md">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">ES6</font>
                    </font>
                  </span>
                </div>
                <div class="flex flex-col items-center relative">
                  <img
                    src="https://d1telmomo28umc.cloudfront.net/media/public/badges/JS.png"
                    class="w-16 h-16 
                                                   border-4 border-white rounded-full shadow-md opacity-50"
                  />
                  <div class="bg-cool-gray-800 shadow-sm p-1 absolute z-10 rounded-full bottom-4">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span class=" bg-gray-100 text-gray-500 mt-1 shadow text-sm font-medium px-2 py-x rounded-md">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">Javascript</font>
                    </font>
                  </span>
                </div>
                <div class="flex flex-col items-center relative">
                  <img
                    src="https://d1telmomo28umc.cloudfront.net/media/public/badges/python_l9Src2C_CyOJ4MD.png"
                    class="w-16 h-16  border-4 border-white rounded-full shadow-md opacity-50"
                  />
                  <div class="bg-cool-gray-800 shadow-sm p-1 absolute z-10 rounded-full bottom-4">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span class=" bg-gray-100 text-gray-500 mt-1 shadow text-sm font-medium px-2 py-x rounded-md">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">Pitón</font>
                    </font>
                  </span>
                </div>
                <div class="flex flex-col items-center relative">
                  <img
                    src="https://d1telmomo28umc.cloudfront.net/media/public/badges/html5_1IJr1hb.png"
                    class="w-16 h-16  border-4 border-white rounded-full shadow-md opacity-50"
                  />
                  <div class="bg-cool-gray-800 shadow-sm p-1 absolute z-10 rounded-full bottom-4">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span class=" bg-gray-100 text-gray-500 mt-1 shadow text-sm font-medium px-2 py-x rounded-md">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">HTML5</font>
                    </font>
                  </span>
                </div>
                <div class="flex flex-col items-center relative">
                  <img
                    src="https://d1telmomo28umc.cloudfront.net/media/public/badges/css3.png"
                    class="w-16 h-16  border-4 border-white rounded-full shadow-md opacity-50"
                  />
                  <div class="bg-cool-gray-800 shadow-sm p-1 absolute z-10 rounded-full bottom-4">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span class=" bg-gray-100 text-gray-500 mt-1 shadow text-sm font-medium px-2 py-x rounded-md">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">CSS3</font>
                    </font>
                  </span>
                </div>
                <div class="flex flex-col items-center relative">
                  <img
                    src="https://d1telmomo28umc.cloudfront.net/media/public/badges/JS_Node.png"
                    class="w-16 h-16  border-4 border-white 
                                                            rounded-full shadow-md opacity-50"
                  />
                  <div class="bg-cool-gray-800 shadow-sm p-1 absolute z-10 rounded-full bottom-4">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span class=" bg-gray-100 text-gray-500 mt-1 shadow text-sm font-medium px-2 py-x rounded-md">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">NodeJS</font>
                    </font>
                  </span>
                </div>
                <div class="flex flex-col items-center relative">
                  <img
                    src="https://d1telmomo28umc.cloudfront.net/media/public/badges/React_Z6rkrgv.png"
                    class="w-16 h-16  border-4 border-white rounded-full shadow-md opacity-50"
                  />
                  <div class="bg-cool-gray-800 shadow-sm p-1 absolute z-10 rounded-full bottom-4">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span class=" bg-gray-100 text-gray-500 mt-1 shadow text-sm font-medium px-2 py-x rounded-md">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">Reaccionar</font>
                    </font>
                  </span>
                </div>
                <div class="flex flex-col items-center relative">
                  <img
                    src="https://d1telmomo28umc.cloudfront.net/media/public/badges/Graph_QL.png"
                    class="w-16 h-16  border-4 border-white rounded-full shadow-md opacity-50"
                  />
                  <div class="bg-cool-gray-800 shadow-sm p-1 absolute z-10 rounded-full bottom-4">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span class=" bg-gray-100 text-gray-500 mt-1 shadow text-sm font-medium px-2 py-x rounded-md">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">GraphQL</font>
                    </font>
                  </span>
                </div>
                <div class="flex flex-col items-center relative">
                  <img
                    src="https://d1telmomo28umc.cloudfront.net/media/public/badges/typescript_psOTuYC.png"
                    class="w-16 h-16  border-4 border-white rounded-full shadow-md opacity-50"
                  />
                  <div class="bg-cool-gray-800 shadow-sm p-1 absolute z-10 rounded-full bottom-4">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span class=" bg-gray-100 text-gray-500 mt-1 shadow text-sm font-medium px-2 py-x rounded-md">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">
                        Mecanografiado
                      </font>
                    </font>
                  </span>
                </div>
                <div class="flex flex-col items-center relative">
                  <img
                    src="https://d1telmomo28umc.cloudfront.net/media/public/badges/Pug_TAaOtzg.png"
                    class="w-16 h-16  border-4 border-white rounded-full shadow-md opacity-50"
                  />
                  <div class="bg-cool-gray-800 shadow-sm p-1 absolute z-10 rounded-full bottom-4">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span class=" bg-gray-100 text-gray-500 mt-1 shadow text-sm font-medium px-2 py-x rounded-md">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">Doguillo</font>
                    </font>
                  </span>
                </div>
                <div class="flex flex-col items-center relative">
                  <img
                    src="https://d1telmomo28umc.cloudfront.net/media/public/badges/MongoDB_XriFIJg.png"
                    class="w-16 h-16  border-4 border-white rounded-full shadow-md opacity-50"
                  />
                  <div class="bg-cool-gray-800 shadow-sm p-1 absolute z-10 rounded-full bottom-4">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span class=" bg-gray-100 text-gray-500 mt-1 shadow text-sm font-medium px-2 py-x rounded-md">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">MongoDB</font>
                    </font>
                  </span>
                </div>
                <div class="flex flex-col items-center relative">
                  <img
                    src="https://d1telmomo28umc.cloudfront.net/media/public/badges/grid_Yj1ThwX.png"
                    class="w-16 h-16  border-4 border-white rounded-full shadow-md opacity-50"
                  />
                  <div class="bg-cool-gray-800 shadow-sm p-1 absolute z-10 rounded-full bottom-4">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span class=" bg-gray-100 text-gray-500 mt-1 shadow text-sm font-medium px-2 py-x rounded-md">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">Diseño CSS</font>
                    </font>
                  </span>
                </div>
                <div class="flex flex-col items-center relative">
                  <img
                    src="https://d1telmomo28umc.cloudfront.net/media/public/badges/dj.png"
                    class="w-16 h-16  border-4 border-white rounded-full shadow-md opacity-50"
                  />
                  <div class="bg-cool-gray-800 shadow-sm p-1 absolute z-10 rounded-full bottom-4">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span class=" bg-gray-100 text-gray-500 mt-1 shadow text-sm font-medium px-2 py-x rounded-md">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">Django</font>
                    </font>
                  </span>
                </div>
                <div class="flex flex-col items-center relative">
                  <img
                    src="https://d1telmomo28umc.cloudfront.net/media/public/badges/Nest_JS.png"
                    class="w-16 h-16  border-4 border-white rounded-full shadow-md opacity-50"
                  />
                  <div class="bg-cool-gray-800 shadow-sm p-1 absolute z-10 rounded-full bottom-4">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span class=" bg-gray-100 text-gray-500 mt-1 shadow text-sm font-medium px-2 py-x rounded-md">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">NestJS</font>
                    </font>
                  </span>
                </div>
                <div class="flex flex-col items-center relative">
                  <img
                    src="https://d1telmomo28umc.cloudfront.net/media/public/badges/React_Native_w3nl6hs.png"
                    class="w-16 h-16  border-4 border-white rounded-full shadow-md opacity-50"
                  />
                  <div class="bg-cool-gray-800 shadow-sm p-1 absolute z-10 rounded-full bottom-4">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span class=" bg-gray-100 text-gray-500 mt-1 shadow text-sm font-medium px-2 py-x rounded-md">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">
                        Reaccionar nativo
                      </font>
                    </font>
                  </span>
                </div>
              </div>
              <div class="mt-10  shadow-inner bg-gray-100 p-3 text-center rounded  text-gray-500 text-sm">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">¡Únete a más </font>
                  <a class="hover:underline font-medium" href="/challenges">
                    <font style="vertical-align: inherit;">desafíos</font>
                  </a>
                  <font style="vertical-align: inherit;">
                    {" "}
                    para desbloquear todas las insignias!
                  </font>
                </font>{" "}
                <a class="hover:underline font-medium" href="/challenges">
                  <font style="vertical-align: inherit;"></font>
                </a>{" "}
                <font style="vertical-align: inherit;"></font>
              </div>
            </div>
          </div>
          {/* --------------------------------- */}
          <div class="mt-28">
            {/* <div class="sm:hidden">
              <select class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:ring  focus:border-blue-300 sm:text-sm sm:leading-5 transition ease-in-out duration-150">
                <option value="0">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Mis cursos</font>
                  </font>
                </option>
                <option value="1">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Mis Desafíos</font>
                  </font>
                </option>
                <option value="2">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Mis problemas</font>
                  </font>
                </option>
                <option value="3">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Mis notas</font>
                  </font>
                </option>
                <option value="4">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Mis cupones</font>
                  </font>
                </option>
                <option value="5">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">
                      Mi historial de pagos
                    </font>
                  </font>
                </option>
              </select>
            </div>
            <div class="hidden sm:block">
              <nav class="flex justify-center">
                <span class=" cursor-pointer mr-4 px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:bg-gray-200 bg-gray-200">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Mis cursos</font>
                  </font>
                </span>
                <span class=" cursor-pointer mr-4 px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:bg-gray-200 ">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Mis Desafíos</font>
                  </font>
                </span>
                <span class=" cursor-pointer mr-4 px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:bg-gray-200 ">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Mis problemas</font>
                  </font>
                </span>
                <span class=" cursor-pointer mr-4 px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:bg-gray-200 ">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Mis notas</font>
                  </font>
                </span>
                <span class=" cursor-pointer mr-4 px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:bg-gray-200 ">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Mis cupones</font>
                  </font>
                </span>
                <span class=" cursor-pointer mr-4 px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:bg-gray-200 ">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">
                      Mi historial de pagos
                    </font>
                  </font>
                </span>
              </nav>
            </div>
          </div>
          <div class="mt-20">
            <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 gap-x-10 pb-10">
              <div class="sc-bdfBwQ znekp flex flex-col items-center">
                <div
                  class="overflow-hidden bg rounded-lg relative bg-white shadow-lg"
                  style="transition: transform 0.2s ease-in-out 0s;"
                >
                  <span
                    class="inline-flex items-center px-3 py-0.5 z-10 rounded-full text-sm font-medium leading-5  
            bg-yellow-100 text-yellow-600 shadow"
                    style="position: absolute; top: 10px; left: 10px;"
                  >
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">principiante</font>
                    </font>
                  </span>
                  <img
                    src="https://d1telmomo28umc.cloudfront.net/media/public/thumbnails/mini-zoom-min.jpeg"
                    class="w-full"
                    style="transition: transform 0.2s ease-in-out 0s;"
                  />
                </div>
                <div
                  class="text-center info shadow-xl flex flex-col w-11/12 justify-center  
                relative bg-white -top-14 rounded-lg z-0 py-5 px-2"
                  style="transition: transform 0.2s ease-in-out 0s; text-overflow: ellipsis; max-height: 106px;"
                >
                  <a class="px-4" href="/noom/lobby">
                    <h3
                      class="text-xl overflow-hidden mb-5 w-full"
                      style="text-overflow: ellipsis; white-space: nowrap;"
                    >
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          Codificación de clonación de zoom
                        </font>
                      </font>
                    </h3>
                    <div class="h-3 w-full bg-blue-200 rounded-full relative">
                      <div
                        class="h-3 bg-blue-700 rounded-full"
                        style="width: 2%;"
                      ></div>
                    </div>
                    <span class="mt-3 text-md font-medium block">
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">2 </font>
                      </font>
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">% completo</font>
                      </font>
                    </span>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

const CardProfile = () => {
  return (
    <div class="bg-white shadow-md rounded-md p-5 max-w-screen-sm w-full">
      <div class="flex flex-col items-center  md:items-start md:flex-row">
        <div class="w-40 relative">
          <div class="w-full h-full rounded-full overflow-hidden flex items-center  justify-center bg-gray-100 ">
            <svg
              class="w-full h-full text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </div>
        </div>
        <div class="md:ml-10 w-full">
          <div class="mb-2 md:mb-4">
            <span class="text-xs text-gray-500 -mb-1 block">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">Nombre</font>
              </font>
            </span>
            <h3 class="font-medium text-3xl leading-8">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">
                  Luis Antonio Padre García
                </font>
              </font>
            </h3>
          </div>
          <div class=" items-center grid grid-cols-2 mt-1">
            <div>
              <span class="text-xs text-gray-500 block">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">
                    Nombre de usuario
                  </font>
                </font>
              </span>
              <h4>
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">luisgarcia.lapg</font>
                </font>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 flex justify-center w-full md:w-1/2 ">
        <button class="inline-flex w-full items-center justify-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring  focus:ring-blue-400  active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Editar perfil</font>
          </font>
        </button>
        <button class="ml-3 inline-flex w-full justify-center items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring  focus:ring-blue-400  active:bg-blue-700 transition ease-in-out duration-150">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Ver el perfil</font>
          </font>
        </button>
      </div>
    </div>
  );
};

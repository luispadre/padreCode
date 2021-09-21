import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

export default function Register() {
  const [store, setStore] = createStore({});
  const [showMessage, setShowMessage] = createSignal({
    show: false,
    type: undefined,
  });

  const updateField = (e) => {
    setStore({
      ...store,
      [e.target.name]: e.target.value,
    });
  };

  const submitData = () => {
    if (store?.name && store?.email) {
      setShowMessage({ show: true, type: "success" });
    } else {
      setShowMessage({ show: true, type: "error" });
    }
  };

  return (
    <>
      <div
        class="bg-gray-50 flex flex-col py-12 sm:px-6 lg:px-8"
        style="min-height: calc(100vh - 70px);"
      >
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 class="mt-6 text-center text-3xl leading-9 font-semibold text-gray-900">
            Unete a PadreCode
          </h2>
        </div>
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div>
              <Message showMessage={showMessage} />
            </div>
            <form>
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >
                  Name
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required=""
                    onChange={updateField}
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring  focus:ring-blue-400  focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div class="mt-6">
                <label
                  for="email"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >
                  Email address
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required=""
                    onchange={(e) => {
                      updateField(e);
                    }}
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring  focus:ring-blue-400  focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div class="mt-6 flex items-center justify-between">
                <div class="flex">
                  <input
                    id="terms"
                    type="checkbox"
                    name="agreeTerms"
                    class="form-checkbox mt-px h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                  />
                  <label
                    for="terms"
                    class="ml-3 block text-sm leading-5 text-gray-900"
                  >
                    I agree to the
                    <button
                      class="text-blue-500"
                      href="/policies/terms-and-conditions"
                    >
                      Terms &amp; Conditions
                    </button>{" "}
                    and
                    <button
                      class="text-blue-500"
                      href="/policies/privacy-policy"
                    >
                      Privacy Policy
                    </button>
                  </label>
                </div>
              </div>
              <div class="mt-2 flex items-center justify-between">
                <div class="flex">
                  <input
                    id="marketing_emails"
                    type="checkbox"
                    name="agreeEmail"
                    class="form-checkbox mt-px h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                  />
                  <label
                    for="marketing_emails"
                    class="ml-3 block text-sm leading-5 text-gray-900"
                  >
                    I agree to the{" "}
                    <button
                      class="text-blue-500"
                      href="/policies/email-permission"
                    >
                      Email Marketing Policy
                    </button>
                    <span class="text-gray-400">(optional)</span>
                  </label>
                </div>
              </div>
              <div class="mt-6">
                <span class="block w-full rounded-md shadow-sm">
                  <button
                    type="button"
                    onClick={() => {
                      submitData();
                    }}
                    class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 transition duration-150 ease-in-out hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring  focus:ring-blue-400  active:bg-blue-700"
                  >
                    Crear una cuenta
                  </button>
                </span>
              </div>
            </form>
          </div>
          <div class="md:hidden mt-10 text-center text-gray-700">
            ¿Ya tienes una cuenta?
            <button class="text-blue-600 font-medium" /*href="/login"*/>
              Iniciar sesión→
            </button>
          </div>
          <div class="mx-4 md:mx-0 flex flex-col items-center">
            <div class="my-10  flex w-full items-center">
              <div class="flex-1 border-t-2 border-gray-200"></div>
              <span class=" text-sm uppercase mx-5 font-medium text-gray-600">
                Or
              </span>
              <div class="flex-1 border-t-2 border-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Message = ({ showMessage }) => {
  let color=showMessage().type==='success'?'green':'red';


  return (
    <>
      <div
        class={`bg-${showMessage().type==='success'?'green':'red'}-100 border border-${showMessage().type==='success'?'green':'red'}-400 text-${showMessage().type==='success'?'green':'red'}-700 px-4 py-3 rounded relative my-3`}
        role="alert"
      >
        <strong class="font-bold">
          ¡Error!
        </strong>
        <span class="block sm:inline">
          Parece que el correo utilizado ya esta siendo utilizado.
        </span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            class="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    </>
  );
};

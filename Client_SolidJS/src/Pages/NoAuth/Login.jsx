export default function () {
  return (
    <>
      <div
        class="bg-gray-50 flex flex-col py-12 sm:px-6 lg:px-8"
        style="min-height: calc(100vh - 70px);"
      >
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 class="mt-6 text-center text-3xl leading-9 font-semibold text-gray-900">
            Log in to Nomad Coders
          </h2>
          <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form>
                <div>
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
                      class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring  focus:ring-blue-400  focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>
                <div class="mt-6">
                  <span class="block w-full rounded-md shadow-sm">
                    <button
                      type="button"
                      class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 transition duration-150 ease-in-out hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring  focus:ring-blue-400  active:bg-blue-700"
                    >
                      Continue
                    </button>
                  </span>
                </div>
                <div class="text-xs mt-3 text-right">
                  -
                </div>
              </form>
            </div>
          </div>
          <div class="md:hidden mt-10 text-center text-gray-700">
            Don't have an account?{" "}
            <a class="text-blue-600 font-medium" href="/join">
              Create One →
            </a>
          </div>
          <div class="mx-4 md:mx-0 flex flex-col items-center">
            <div class="my-10  flex w-full items-center">
              <div class="flex-1 border-t-2 border-gray-200"></div>
              <span class=" text-sm uppercase mx-5 font-medium text-gray-600">
                Or
              </span>
              <div class="flex-1 border-t-2 border-gray-200"></div>
            </div>
            <div class="w-full">
              <div class="my-5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

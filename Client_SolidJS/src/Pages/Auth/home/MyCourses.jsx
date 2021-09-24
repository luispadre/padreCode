export default function () {
  return (
    <>
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="pt-20 pb-56">
          <p class="leading-4 font-extralight	text-2xl">React Custom Hooks</p>
          <strong class="leading-4 ">UseEffect</strong>
          <video
            id="my_video_1"
            class="video-js vjs-default-skin"
            width="100%"
            height="267px"
            controls
            preload="none"
            poster="http://video-js.zencoder.com/oceans-clip.jpg"
            data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'
          >
            <source
              src="https://vjs.zencdn.net/v/oceans.mp4"
              type="video/mp4"
            />
            <source
              src="https://vjs.zencdn.net/v/oceans.webm"
              type="video/webm"
            />
          </video>
          <div class="bg-white">
            <nav class="flex flex-col sm:flex-row">
              <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
                Comentarios
              </button>
              <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                Problemas
              </button>
              <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                Mis Notas
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

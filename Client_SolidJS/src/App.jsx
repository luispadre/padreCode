// import { useNetwork } from "./hooks/useNetwork.jsx";
import Application from "./store/index.jsx";
// import {VideoJsPlayer} from 'video.js'
function App() {
  // const networkState=useNetwork()
  // const {online,sice}=useNetwork();
  // console.log(networkState(),'online,sice');

  return (
    <div>
      {/* <VideoJsPlayer/> */}

      {/* <video id="my_video_1" class="video-js vjs-default-skin" width="640px" height="267px"
        controls preload="none" poster='http://video-js.zencoder.com/oceans-clip.jpg'
        data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'>
        <source src="https://vjs.zencdn.net/v/oceans.mp4" type='video/mp4' />
        <source src="https://vjs.zencdn.net/v/oceans.webm" type='video/webm' />
      </video> */}

      <Application/>
    </div>
  );
}

export default App;

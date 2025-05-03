import { videoContainer, videoStyle, gradientOverlay } from "./BackgroundVideo.css";


const BackgroundVideo = () => {
  return (
    <div className={videoContainer}>
      <video
        className={videoStyle}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={gradientOverlay} />
    </div>
  );

}

export default BackgroundVideo;
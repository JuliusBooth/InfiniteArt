/* eslint-disable react/prop-types */
import "../styles/gifFrame.css";

function GifFrame({gifUrl}) {
  return (
    <div className="frame-container">
      <img src="/frame.png" alt="Frame" className="frame-image" />
      <img src={gifUrl || "/donald.gif"} alt="Gif" className="gif-image" />
    </div>
  );
}

export default GifFrame;

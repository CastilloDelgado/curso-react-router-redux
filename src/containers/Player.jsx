import React from "react";
import "../assets/styles/components/Player.scss";

const Player = () => {
  return (
    <div className="Player">
      <video controls autoplay>
        <source src="" type="video/mp4" />
        <div className="Player-black">
          <button type="button">Regresar</button>
        </div>
      </video>
    </div>
  );
};

export default Player;

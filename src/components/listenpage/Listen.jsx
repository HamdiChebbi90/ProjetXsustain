import React from "react";
import live from "../../assets/images/live.png";
import player from "../../assets/images/player.png";
import album from "../../assets/images/album.png";
import { FaVolumeUp } from "react-icons/fa";
const Listen = () => {
  return (
    <div className="listen">
      <div className="container__player">
        <img
          src={live}
          alt="live"
          className="img_song"
         
        />

        <div className="image_up"></div>

        <div className="content_player">
          <div
            className="info_song"
          >
            <p>By j.cole</p>
            <h1>MIDDLE CHILD</h1>
          </div>

          <FaVolumeUp
            className="volume_up_icon"
          />
          <progress
            value={0.7}
            className="progress_style"
          />

          <img
            src={album}
            alt="album"
            className="album"
            
          />
        </div>
      </div>
      <img src={player} alt="player" className="player" />
    </div>
  );
};

export default Listen;

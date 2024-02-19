import cartoon from "../../assets/images/cartoon.png";
import anime from "../../assets/images/anime.png";
import qr from "../../assets/images/qr.png";

const GetApp = () => {
  return (
    <div className="getapp">
      <div className="getapp__left__img">
        <img src={cartoon} alt="cartoon" />
      
      
        <div className="right_side">
          <img
            src={anime}
            alt="anime"
            className="anime_img"
            
          />



          <div className="getapp_left_pos">
            <p>GET YOUR APP!</p>
            <h1>APP STORE</h1>
          </div>

          
          <img
            src={qr}
            alt="qr"
            className="qr"
         
          />
        </div>
      </div>
    </div>
  );
};
export default GetApp;

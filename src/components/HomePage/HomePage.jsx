import bg from "../../assets/images/bg.png";
import logo from "../../assets/images/logo.png";
import right from "../../assets/images/right.png";
import Banner from "../banner/Banner";
import HomePage from "./Home";
import { useMediaQuery } from "react-responsive";



const HomePag = () => {
  
  const isMobile = useMediaQuery({ query: "(width> 500px)" });
  

  return (
    <div className="container">
      <Banner />
      <img src={bg} className="bg" alt="bg" />
      <img src={logo} className="logo" alt="Logo" />
      {isMobile && <div >
      <img src={right} className="right" alt="Image" />
      <div className=" rotated-text">
        <h1 className="firstline">We are one people but we live as if </h1>
        <h1 className="secondline">Divided … everything is connected</h1>
      </div>
      </div>}
      <div className="flex">
        <div className="text">
          <HomePage/>
        </div>
      </div>
    </div>
  );
};

export default HomePag;

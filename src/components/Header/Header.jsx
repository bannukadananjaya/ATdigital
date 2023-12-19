import "./Header.css";
import header_img from "../../assets/header.png";
const Header = () => {
  return (
    <header>
      <div className=" header-content">
        <div className="header-img">
          <img src={header_img} alt="" className="img-responsive" />
        </div>
        <div className="header-text">
          <h1 className="header-title  wrapper">
            We crush your competitors, goals, and sales records - without the
            B.S.
            <button >GET FREE CONSULTATION</button>
          </h1>
          
        </div>
      </div>
    </header>
  );
};

export default Header;

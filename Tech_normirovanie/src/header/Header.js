import "./header.css";
import logo from "./img/titleimage.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="logo__box position-relative">
      <Link to="/">
        <h1 className="text-left position-absolute titlelocation">
          ТЕХНИЧЕСКОЕ <br /> НОРМИРОВАНИЕ
        </h1>
      </Link>
      <img src={logo} alt="Техническое нормирование" className="logo__img" />
    </div>
  );
}

export default Header;

import "./Header.scss";
import logo from "../../assets/images/logo-with-text.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="text-center flex flex-col gap-2 mb-2 sm:mb-4 md:gap-10 md:mb-8">
      <Link to="/">
        <img className="alx-logo mx-auto" src={logo} alt="ALX header" />
      </Link>
      <div className="alx-divider w-3/5 mx-auto"></div>
    </nav>
  );
};
export default Header;

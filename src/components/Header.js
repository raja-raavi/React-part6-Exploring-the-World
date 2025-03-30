import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img alt="logo image" src={LOGO_URL} />
      </div>
      <div>
        <h3 style={{ color: "red" }}>Foodie App</h3>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

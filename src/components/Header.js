import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

export const Header = () => {
  const [buttonName, setButtonName] = useState("Login");

  //TO know whether the component is renered or not
  console.log("component rendered");
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
          <button
            className="loginBtn"
            onClick={() => {
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

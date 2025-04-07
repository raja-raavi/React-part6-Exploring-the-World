import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router";

export const Header = () => {
  const [buttonName, setButtonName] = useState("Login");

  //TO know whether the component is renered or not & testing the useState and useEffect cases
  //console.log("component rendered");

  //If no dependency arry => useEffect is called on every render => whwn a useState variable changes => useEffect called.
  //If the dependency array is empty = [] => useEffect will call on only initial render (just once)
  //If dependency array is [btnNameReact] => called every time btnNameReact is updated

  useEffect(() => {
    //console.log("useEffect called");
  }, []);

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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="contact">Contact us</Link>
          </li>
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

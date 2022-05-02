import "./Demo.css";

import logo from "../../images/assets/logo.png";

const Demo = ({ onDemo }) => {
  return (
    <div className="demo demo_open">
      <div className="demo__container">
        <img className="demo__logo" src={logo} alt="logo"></img>
        <p className="demo__text">View a Demo version or login</p>

        <div className="demo__buttons-container">
          <button
            type="button"
            className="demo__button demo__button_type_demo"
            onClick={onDemo}
          >
            View as Demo
          </button>
          {/* 
          <button
            type="button"
            className="demo__button demo__button_type_login"
          >
            click to login
          </button>
          */}
        </div>
      </div>
    </div>
  );
};
export default Demo;

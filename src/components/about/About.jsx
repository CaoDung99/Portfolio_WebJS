import "./about.css";
import Javascript  from "../../img/javascript-logo@2x.png";
import Css  from "../../img/css-logo@2x.png";
import Google  from "../../img/google-logo@2x.png";
import Sequence  from "../../img/sequence-logo.png";
import Html  from "../../img/html-logo@2x.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="a-award">
          <ul className="a-award-ItemList">
            <li className="a-award-item">
              <img src={Javascript} alt="" className="a-award-icon" />
              <span className="a-award-Text">JavaScript ( React...)</span>
            </li>
            <li className="a-award-item">
              <img src={Html} alt="" className="a-award-icon" />
              <span className="a-award-Text">Semantic HTML</span>
            </li>
            <li className="a-award-item">
              <img src={Css} alt="" className="a-award-icon" />
              <span className="a-award-Text">Responsive CSS</span>
            </li>
            <li className="a-award-item">
              <img src={Sequence} alt="" className="a-award-icon" />
              <span className="a-award-Text">Animation</span>
            </li>
            <li className="a-award-item">
              <img src={Google} alt="" className="a-award-icon" />
              <span className="a-award-Text">SEO</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

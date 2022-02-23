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
          Front-End developer is an adventure for a website.
        </p>
        <p className="a-desc">
          Passionate about front-end development. I put a lot of effort into teaching myself about web design. Self-study and self-study.
 Virtues such as pointing, being careful, meticulous, focusing on observing and listening will help me a lot in the process of personal development.
          <br/>I know about BEM and some of the languages that I use:
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

import "./styles.css";
import bg from "./images/bg.png";
import html from "./images/html.png";
import ml from "./images/ml.png";
import grad from "./images/grad.png";
// import linkedin from "./images/linkedin.png"
import Typed from "typed.js";
import React from "react";
// import resume from "./resources/resume.pdf";

export default function App() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web developer", "Software Engineer", "AI/ML developer"],
      typeSpeed: 100
      // backDelay: 150
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  });

  return (
    <>
      <header>
        <nav>
          <div className="left">Talha's Portfolio</div>
          <div className="right">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="mailto:talhasajid58@gmail.com">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section className="firstSection">
          <div className="leftSection">
            Hi, my name is <span className="color">Talha</span>
            <div>and I am a passionate</div>
            <span className="element " ref={el}></span>
            <div className="buttons">
              {/* <a href={resume} download="talhasResume" target="_blank">
                <button>Download Resume</button>
              </a> */}
              <a href="https://github.com/talhah11" target="_blank">
                <button>Visit Github</button>
              </a>
              <a href="https://www.linkedin.com/in/talha-sajid-44649025b" target="_blank">
              <button>Visit Linkedin</button>
              </a>
            </div>
          </div>
          <div className="rightSection">
            <img src={bg} alt="Avatar" />
          </div>
        </section>
        <hr />
        <section className="secondSection">
          <span className="text-gray">What I have done so far</span>
          <h1>Past Experience</h1>
          <div className="box">
            <div className="vertical">
              <img className="image-top" src={html} alt="alt" />
              <div className="vertical-title">
                Freelance - HTML development (2020-2021)
              </div>
              <div className="vertical-desc">
                Provided freelance services for web development using HTML and CSS.
              </div>
            </div>
            <div className="vertical">
              <img className="image-top" src={ml} alt="alt" />
              <div className="vertical-title">
                Project - ML development (2022-2023)
              </div>
              <div className="vertical-desc">
                Fine-tuned a ML model to come up with a model that maintains the internal conditions of a cold storage and minimizes energy consumption while doing so.
                Also developed a web app on angular to provide as a dashboard for the admin of the storage facility.
              </div>
            </div>
            <div className="vertical">
              <img className="image-top" src={grad} alt="alt" />
              <div className="vertical-title">
                Graduated in BS Computer Science (2019 - 2023)
              </div>
              <div className="vertical-desc">
                
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer">
          <div className="footer-first">
            <h3>Talha's Portfolio</h3>
          </div>
          <div className="footer-second">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="mailto:talhasajid58@gmail.com">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-third">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="mailto:talhasajid58@gmail.com">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-fourth">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="mailto:talhasajid58@gmail.com">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-rights">
          Copyright &copy; www.TalhasPortfolio.com | All rights reserved
        </div>
      </footer>
    </>
  );
}

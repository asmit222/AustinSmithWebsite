import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="leftSide">
        {" "}
        <h1 className="NameHeader1">
          <a className="AustinSmith">Austin Smith</a>
        </h1>
        <h2 className="h2Softwareengineer">
          Lead Software Engineer at State Farm
        </h2>
        <p className="pdescription">
          I build elegant solutions to complex problems.
        </p>
        <div className="sectionsDiv">
          <a href="#about" className="group flex items-center py-3 active">
            <div className="nav-text ">
              <span className="nav-indicator"></span>
              ABOUT
            </div>
          </a>
          <a href="#experience" className="group flex items-center py-3 active">
            <div className="nav-text ">
              <span className="nav-indicator"></span>
              EXPERIENCE
            </div>
          </a>
          <a href="#projects" className="group flex items-center py-3 active">
            <div className="nav-text ">
              <span className="nav-indicator"></span>
              PROJECTS
            </div>
          </a>
        </div>
        <a href="https://github.com/asmit222" rel="noreferrer" target="_blank">
          <i className="fab fa-github "></i>
        </a>
        <a
          href="https://www.instagram.com/austinfroob/"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/asmit222/"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        {/* <a href="/Austin-Smith-Resume.pdf" download="Austin-Smith-Resume.pdf">
          <span className="resumeDOwnloadContainer">
            <i className="fa fa-download" aria-hidden="true"></i>
            <span className="resumeText">RESUME</span>
          </span>
        </a> */}
      </header>
      <main className="rightSide" id="about">
        <h4 className="experienceText">ABOUT</h4>
        <p className="backgroundp">
          As a full-stack software engineer, I am constantly seeking new
          opportunities to apply my diverse skill set and continue growing. I
          love solving complex problems, and I'm passionate about developing
          both front-end and back-end solutions.
        </p>
        <p className="backgroundp">
          My experience as a Naval Aviator has instilled in me the values of
          teamwork, collaboration, leadership, and self-discipline, which have
          all proven invaluable in my transition to software engineering.
        </p>
        <p className="backgroundp">
          When I'm not at the computer, I enjoy traveling, reading, photography,
          and hanging out with my wife and pets. 🐱🐶🐱
        </p>

        <div id="experience"></div>
        <h4 className="experienceText">EXPERIENCE</h4>

        <div className="experienceDiv">
          <div className="experienceDate">2020 — PRESENT</div>
          <div>
            <div className="experienceDesc">
              Lead Software Engineer · State Farm
            </div>
            <div className="experiencedescunder">
              Deliver high-quality, robust production code for a diverse array
              of products and APIs. Provide leadership within engineering
              department through close collaboration, knowledge shares, and
              mentorship.
            </div>
            <div className="technologiesDiv">
              <span className="text-teal-300">Java</span>
              <span className="text-teal-300">Gosu</span>
              <span className="text-teal-300">OracleDB</span>
              <span className="text-teal-300">Policy Center</span>
            </div>
          </div>
        </div>

        <a
          className="viewResumeAnchor"
          href="/Austin-Smith-Resume.pdf"
          download="Austin-Smith-Resume.pdf"
        >
          <span className="resumeDOwnloadContainer">
            <span className="resumeText">View Full Resume</span>
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </a>

        <div id="projects"></div>
        <h4 className="experienceText">PROJECTS</h4>

        <a href="https://froobsbooks.com" rel="noreferrer" target="_blank">
          <div className="experienceDiv">
            <div className="experienceDate">
              <div className="projectPreviewImage froobsbooksimage"></div>
            </div>
            <div>
              <div className="experienceDesc">Kindle Books App</div>
              <div className="experiencedescunder">
                Progressive web application which allows you to freely download
                books to your Kindle device with just a single click.
              </div>
              <div className="technologiesDiv">
                <span className="text-teal-300">TypeScript</span>
                <span className="text-teal-300">React</span>
                <span className="text-teal-300">Auth0</span>
                <span className="text-teal-300">AWS S3</span>
                <span className="text-teal-300">Firebase</span>
              </div>
            </div>
          </div>
        </a>

        <a
          href="https://regal-malasada-21578a.netlify.app/#/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="experienceDiv">
            <div className="experienceDate">
              <div className="projectPreviewImage t6BrieferImage"></div>
            </div>
            <div>
              <div className="experienceDesc">T6Briefer</div>
              <div className="experiencedescunder">
                Progressive web application built for naval flight students to
                assist in flight brief preparation.
              </div>
              <div className="technologiesDiv">
                <span className="text-teal-300">JavaScript</span>
                <span className="text-teal-300">React</span>
              </div>
            </div>
          </div>
        </a>

        <a
          href="https://effervescent-pothos-2864f7.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="experienceDiv">
            <div className="experienceDate">
              <div className="projectPreviewImage froobleImage"></div>
            </div>
            <div>
              <div className="experienceDesc">Frooble</div>
              <div className="experiencedescunder">
                Wordle clone that lets you play as much as you want!
              </div>
              <div className="technologiesDiv">
                <span className="text-teal-300">TypeScript</span>
                <span className="text-teal-300">React</span>
              </div>
            </div>
          </div>
        </a>
        <a href="https://floatbook.xyz/" rel="noreferrer" target="_blank">
          <div className="experienceDiv">
            <div className="experienceDate">
              <div className="projectPreviewImage floatBookImage"></div>
            </div>
            <div>
              <div className="experienceDesc">Hospital Float Book</div>
              <div className="experiencedescunder">
                Hospital unit scheduling assistant. This was a project for my
                wife and her coworkers :)
              </div>
              <div className="technologiesDiv">
                <span className="text-teal-300">JavaScript</span>
                <span className="text-teal-300">React</span>
                <span className="text-teal-300">Twilio</span>
                <span className="text-teal-300">Firebase</span>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/asmit222/trading-bot"
          rel="noreferrer"
          target="_blank"
        >
          <div className="experienceDiv">
            <div className="experienceDate">
              <div className="projectPreviewImage stockBotImage"></div>
            </div>
            <div>
              <div className="experienceDesc">Stock Trading Bot</div>
              <div className="experiencedescunder">
                Automatically buys and sells stocks based off technical
                indicators and trends.
              </div>
              <div className="technologiesDiv">
                <span className="text-teal-300">Node.js</span>
                <span className="text-teal-300">AWS EventBridge</span>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://655cdf85eb857b10285e0db0--deluxe-kitsune-005a80.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="experienceDiv">
            <div className="experienceDate">
              <div className="projectPreviewImage leetcodeCloneImage"></div>
            </div>
            <div>
              <div className="experienceDesc">LeetCode Clone</div>
              <div className="experiencedescunder">
                Platform to practice LeetCode type coding problems.
              </div>
              <div className="technologiesDiv">
                <span className="text-teal-300">TypeScript</span>
                <span className="text-teal-300">React</span>
              </div>
            </div>
          </div>
        </a>
      </main>
    </div>
  );
}

export default App;

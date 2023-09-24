import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="leftSide">
        {" "}
        <h1 className="NameHeader1">
          <a className="AustinSmith">Austin Smith</a>
        </h1>
        <h2 className="h2Softwareengineer">Software Engineer at State Farm</h2>
        <p className="pdescription">
          I build elegant solutions and digital functionalities for backend
          systems and server-side operations.
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
        <a>
          <i className="fab fa-twitter"></i>
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
        <p className="backgroundp">
          As a full-stack software engineer, I am constantly seeking new
          opportunities to apply my diverse skill set and continue growing.
          Problem-solving is my forte, and I'm passionate about developing both
          front-end and back-end solutions.
        </p>
        <p className="backgroundp">
          My experience as a Naval Officer has instilled in me the values of
          teamwork, collaboration, leadership, and self-discipline, which have
          all proven invaluable in my transition to software engineering.
        </p>
        <p className="backgroundp">
          When I'm not coding, I enjoy traveling, reading, photography,
          learning, movies, games, and spending time with loved ones.
        </p>

        <div id="experience"></div>

        <div className="experienceDiv">
          <div className="experienceDate">2020 — PRESENT</div>
          <div>
            <div className="experienceDesc">Software Engineer · State Farm</div>
            <div className="experiencedescunder">
              Deliver high-quality, robust production code for a diverse array
              of products and APIs. Provide leadership within engineering
              department through close collaboration, knowledge shares, and
              mentorship.
            </div>
            <div className="technologiesDiv">
              <span class="text-teal-300">Java</span>
              <span class="text-teal-300">Gosu</span>
              <span class="text-teal-300">OracleDB</span>
              <span class="text-teal-300">Policy Center</span>
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

        <a href="https://froobsbooks.com" rel="noreferrer" target="_blank">
          <div className="experienceDiv">
            <div className="experienceDate">
              <div className="projectPreviewImage froobsbooksimage"></div>
            </div>
            <div>
              <div className="experienceDesc">Kindle Books App</div>
              <div className="experiencedescunder">
                Progressive web pplication which allows you to freely download
                books to your Kindle device with just a single click.
              </div>
              <div className="technologiesDiv">
                <span class="text-teal-300">TypeScript</span>
                <span class="text-teal-300">React</span>
                <span class="text-teal-300">Auth0</span>
                <span class="text-teal-300">AWS S3</span>
                <span class="text-teal-300">Firebase</span>
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
                <span class="text-teal-300">JavaScript</span>
                <span class="text-teal-300">React</span>
                <span class="text-teal-300">HTML</span>
                <span class="text-teal-300">CSS</span>
              </div>
            </div>
          </div>
        </a>

        <p className="backgroundp2"></p>

        <p className="backgroundp2"></p>
        <p className="backgroundp"></p>
      </main>
    </div>
  );
}

export default App;

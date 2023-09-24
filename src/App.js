import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="leftSide">
        {" "}
        <h1 className="NameHeader1">
          <a className="AustinSmith" href="/">
            Austin Smith
          </a>
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
        <a href="https://github.com/asmit222" target="_blank">
          <i className="fab fa-github "></i>
        </a>
        <a href="https://www.instagram.com/austinfroob/" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a>
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/asmit222/" target="_blank">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="/Austin-Smith-Resume.pdf" download="Austin-Smith-Resume.pdf">
          <span className="resumeDOwnloadContainer">
            <i className="fa fa-download" aria-hidden="true"></i>
            <span className="resumeText">RESUME</span>
          </span>
        </a>
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
        <p className="backgroundp" id="about">
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
              <span class="text-teal-300">PolicyCenter</span>
            </div>
          </div>
        </div>

        <p className="backgroundp2">
          My maaaaaaaaaaaaaaain focus these days is building products and
          leading projects for our clients at Upstatement. In my free time I've
          also released an online video course that covers everything you need
          to know to build a web app with the Spotify API. When I’m not at the
          computer, I’m usually rock climbing, hanging out with my wife and two
          cats, or running around Hyrule searching for Korok seeds K o r o k s e
          e d s .
        </p>

        <p className="backgroundp2" id="about">
          Back in 2012, I decided to try my hand at creating custom Tumblr
          themes and tumbled head first into the rabbit hole of coding and web
          development. Fast-forward to today, and I’ve had the privilege of
          building software for an advertising agency, a start-up, a student-led
          design studio, and a huge corporation.{" "}
        </p>
        <p className="backgroundp">
          My main focus these days is building products and leading projects for
          our clients at Upstatement. In my free time I've also released an
          online video course that covers everything you need to know to build a
          web app with the Spotify API. When I’m not at the computer, I’m
          usually rock climbing, hanging out with my wife and two cats, or
          running around Hyrule searching for Korok seeds K o r o k s e e d s .
        </p>
      </main>
    </div>
  );
}

export default App;

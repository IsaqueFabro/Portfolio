"use client";
"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [ messageInput, setMessageInput ] = useState('');

  const [messages, setMessages] = useState([
		{
			role: 'assistant',
			content: 'How can I help you learn more about Adrian and his Resume?'
		}
  ]);

  const submitForm = async (e) => {
    e.preventDefault();
    let newMessages = [...messages, { role: 'user', content: messageInput }]
    setMessages(newMessages);
    setMessageInput('');
    const apiMessage = await fetch(
      '/api',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMessages })
      }
    ).then(res => res.json());
    setMessages([...newMessages, { role: 'assistant', content: apiMessage.message }]);
  }

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <body>
        <header> 
          <a href="#" class="logo-holder"> 
            <div class="logo">L</div> 
            <div class="logo-text">Responsive Portfolio</div> 
          </a>
          <nav> 
            <ul id="menu"> 
              <li><a href="#">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="mailto:isaquefabro04@gmail.com" class="button">Contact Me</a></li> 
            </ul>
            <a href="#" class="mobile-toggle" onclick="togglemobilemenu();"> 
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/> 
              </svg>
            </a>
          </nav>
        </header>
        <main>
          <section class="hero container"> 
            <div class="hero-blue"> 
              <div>
                <h1><small>Hi, I'm</small> Isaque Fabro</h1>
                <p>
                  A Computer Engineering student passionate about technology and software development. 
                  <span>I enjoy solving problems, learning new technologies, and building efficient and scalable solutions.</span>
                </p>
                <div class="call-to-action"> 
                  <a href="./imgs/resume/Curriculo 2025.1.pdf" class="button black">View Resume</a>
                  <a href="mailto:isaquefabro04@gmail.com" class="button white">Contact Me</a>
                </div>
                <div class="social-links"> 
                  <a href="https://github.com/IsaqueFabro"><img src="./imgs/techs/github.png" alt="GitHub" width="48" /></a>
                  <a href="https://www.linkedin.com/in/isaque-fabro/"><img src="./imgs/techs/linkedin.png" alt="LinkedIn" width="48" /></a>
                </div>
              </div>
            </div>
            <div class="hero-yellow"> 
              <img src="./imgs/profile/Design sem nome (1).png" alt="Isaque Fabro" width="100%"/>
            </div>
          </section>
          <section class="logos container"> 
            <div class="marquee">
              <div class="track"> 
                <img src="./imgs/techs/html.png" alt="HTML" width="128" />
                <img src="./imgs/techs/css.png" alt="CSS" width="128" />
                <img src="imgs/techs/node-js.png" alt="Node JS"  width="128" />
                <img src="imgs/techs/java.png" alt="Java" width="128" />
                <img src="imgs/techs/sql.png" alt="SQL" width="128" />
                <img src="./imgs/techs/javascript.png" alt="JS" width="128" />
                <img src="./imgs/techs/react.png" width="128" alt="React" />
                <img src="./imgs/techs/nextjs.png" width="128" alt="Next JS" />
                <img src="./imgs/techs/azure.png" width="128" alt="Azure" />
                <img src="./imgs/techs/vscode.png" width="128" alt="VS Code" />
                <img src="./imgs/techs/python.png" width="128" alt="Python" />
                <img src="./imgs/techs/html.png" alt="HTML" width="128" />
                <img src="./imgs/techs/css.png" alt="CSS" width="128" />
                <img src="imgs/techs/node.png" alt="Node JS" width="128" />
                <img src="imgs/techs/java.png" alt="Java" width="128" />
                <img src="imgs/techs/sql2.png" alt="SQL" width="128" />
                <img src="./imgs/techs/javascript.png" alt="JS" width="128" />
                <img src="./imgs/techs/react.png" width="128" alt="React" />
                <img src="./imgs/techs/nextjs.png" width="128" alt="Next JS" />
                <img src="./imgs/techs/azure.png" width="128" alt="Azure" />
                <img src="./imgs/techs/vscode.png" width="128" alt="VS Code" />
                <img src="./imgs/techs/python.png" width="128" alt="Python" />
              </div>
            </div>
          </section>
          <section id="skills" class="skills container"> 
            <h2><small>About Me</small>Skills</h2>
            <div class="holder-blue"> 
              <div class="left-column"> 
                <h3>Frontend</h3>
                <ul> 
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>SpringBoot</li>
                  <li>HTML/CSS</li>
                </ul>
                <h3>Backend</h3> 
                <ul> 
                  <li>Python</li>
                  <li>Java</li>
                  <li>SQL</li>
                  <li>Node.js</li>
                  <li>C</li>
                </ul>
              </div>
              <div class="right-column"> 
                <h3>A bit about me</h3>
                <p>Hi, I'm Isaque.</p>
                <p>A Computer Engineering and Software Engineering student with a strong foundation in programming. I’ve worked on real-world projects with companies through DNC, gaining hands-on experience.</p>
                <p>Earlier this year, I started the Software program at DNC to apply my technical skills in real projects. I'm fluent in English and passionate about growing in the tech industry.</p>
                <p>Recently, I developed an academic project in Java for managing tool loans, integrating it with an SQL database. This gave me experience in system development, programming logic, Git, and teamwork.</p>
                <p>I’m looking for an opportunity in tech to deepen my software development skills and contribute to innovative solutions.</p>
              </div>
            </div>
          </section>
          <section class="work-experience container">
            <h2>
              <small>Recent</small>
              Work Experience
            </h2>
            <div class="jobs">
              <article>
                <figure> 
                  <div>
                    <img src="./imgs/work/uniprf1.png" alt="Ti Intern" width="100%" />
                    <figcaption>
                      Ti Intern
                    </figcaption>
                  </div>
                </figure>
                <h3><img src="./imgs/work/prf-logo.jpg" alt="Prf" width="28px"> Ti Intern <h3>
                <div>2024-current</div>
                <p>Currently, I am an intern at the Superintendence of the Federal Highway Police, where I contribute in the construction of a database for the Health Unit of the PRF in Santa Catarina. My responsibilities include organizing and maintaining data, as well as developing and modifying spreadsheets and dashboards. Additionally, I assist in computer maintenance. Through this experience, I've been enhancing my technical skills while gaining a strategic perspective on data organization, teamwork, and communication.</p>
              <article>
              <article>
                <figure>
                  <div>
                    <img src="./imgs/work/igreja.png" alt="Web Developer" width="100%" />
                    <figcaption>
                      Web Developer
                    </figcaption>
                  </div>
                </figure>
                <h3>
                  <a href="https://adfloripa.com.br/">
                    <img src="./imgs/work/adfloripa.png" alt="Ad Floripa" width="48px" />
                  </a>
                  <a href="https://adfloripa.com.br/" class="role-link">Web Developer</a>
                </h3>
                <div>2024</div>
                <p>I participated in a volunteer project to build the website of the church I am part of. I assisted in the development of features, code maintenance, and collaboration with the team to ensure the site met the needs of the community. During the project, I used Git for version control, which allowed me to significantly improve my skills in versioning and branch management. Additionally, the experience was enriching for developing good coding practices, such as project organization, clear documentation, and the application of coding standards. Team communication was essential to align expectations and ensure all members were on the same page, which contributed to the success of the project. This experience not only strengthened my technical skills but also reinforced the importance of collaborative work and clear communication.</p>
              </article>
            <div>
          <section>
          <section id="projects" class="bento container">
            <h2>
              <small>Previous</small>
              Completed Projects
            </h2>
            <div class="bento-grid">
              <a href="https://github.com/davijr28/gerenciador_emprestimo_A3" class="bento-item">
                <figure>
                  <img src="imgs/projects/tool-project.jpg" alt="Error" />
                  <figcaption>Gerenciador de Empréstimos</figcaption>
                </figure>
              </a>
              <a href="https://github.com/IsaqueFabro/Vehicle-Consume" class="bento-item">
                <figure>
                  <img src="imgs/projects/consume-project.jpg" alt="Error" />
                  <figcaption>Vehicle Consume</figcaption>
                </figure>
              </a>
              <a href="https://github.com/IsaqueFabro/South-s-Destination-Page" class="bento-item">
                <figure>
                  <img src="imgs/projects/travel-agency.avif" alt="Error" />
                  <figcaption>South's Destination Page</figcaption>
                </figure>
              </a>
              <a href="https://github.com/IsaqueFabro/Desafios-Python" class="bento-item">
                <figure>
                  <img src="imgs/projects/fibonacci.jpg" alt="Error" />
                  <figcaption>Desafios Python</figcaption>
                </figure>
              </a>
              <a href="https://github.com/IsaqueFabro/School-Landing-Page" class="bento-item">
                <figure>
                  <img src="imgs/projects/landing-page.png" alt="Error" />
                  <figcaption>School Landing Page</figcaption>
                </figure>
              </a>
            </div>
          </section>
          <section class="chatbot container"> 
            <h2>
              <small>
                Talk to me
              </small>
              Chatbot
            </h2>
            <div class="chatbot-blue"> 
              <div class="chat-info"> 
                <h3>Azure AI Chatbot</h3>
                <p>I've put together a chatbot here which knows all my skills, work experience and has a copy of my CV/Resume. You can use it to ask questions about me to get a better idea of who I am and what I've done.</p>
                <p>You can also download my resume here if you want to take a look at it.  I'm currently looking for new opportunities!</p>
                <a href="imgs/resume/Curriculo 2025.1.pdf" class="button black">Download Resume</a>
              </div>
              <div class="chat-box">
                <div class="scroll-area"> 
                  <ul id="chat-log">
                    <li>
                      <span class="avatar bot">AI</span> 
                      <div class="message">
                        Hi, I'm a friendly chatbot that lets you interactive with this portfolio and CV. How can I help?
                      </div>
                    </li>
                    <li>
                      <span class="avatar user">User</span>
                      <div class="message">
                        I have a question to ask you about this resume
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="chat-message">
                  <input type="text" placeholder="Hey Isaque, what skills are you best at?">
                  <button class="button black">Send</button>
                <div>
              </div>
            <div>
          <section>
          <section> 
            <footer class="footer">
              <p>Copyright@IsaqueFabro</p>
            <footer>
          <section>
        <main>
      <body>
    </>
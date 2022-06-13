import { faBootstrap, faCss3Alt, faHtml5, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ContactMe from "./ContactMe";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <div class="hero my-28 bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse p-0">
          <img
            src="https://i.ibb.co/cb3C6T7/Whats-App-Image-2022-06-09-at-11-26-22-PM-removebg-preview-3.png"
            class="rounded-lg mt-[-72px]"
          />
          <div className="m-5">
            <h1 class="text-4xl font-bold">Hello! I'm</h1>
            <h1 class="text-5xl font-bold animate-pulse">Md. Hasan Ahamed</h1>
            <p class="py-6">Junior Web Developer</p>

            <a
              href="https://drive.google.com/file/d/1vnAlSE-uULj01pE0o7HkYf42pVpD2rU2/view?usp=sharing"
              target="_blank"
              class="btn"
            >
              Get Resume
            </a>
          </div>
        </div>
      </div>
      {/* <div className="m-10 py-10">
        <h1 className="text-4xl text-center mb-6">Service Provide For My Clients</h1>
        <div className="">
        <div class="text-primary-content grid justify-items-center">
          
            <h2 class="">Development</h2>
            <ul className="list-disc">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node JS</li>
                <li>React</li>
            </ul>
          
        </div>
        </div>
      </div> */}
      <div className="m-10">
          <h1 className="text-4xl text-center pb-8">My Skills</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5 lg:py-10">
            <div className="flex items-center gap-2 mb-2 lg:mb-5">
                <FontAwesomeIcon icon={faHtml5} className="lg:w-8 lg:h-8"/>
                <p className="lg:text-xl">HTML5</p>
                <progress class="progress w-56 lg:w-96 lg:h-4" value="70" max="100"></progress>
            </div>
            <div className="flex items-center gap-2 mb-2 lg:mb-5">
                <FontAwesomeIcon icon={faCss3Alt} className="lg:w-8 lg:h-8"/>
                <p className="lg:text-xl">CSS</p>
                <progress class="progress w-56 lg:w-96 lg:h-4" value="70" max="100"></progress>
            </div>
            <div className="flex items-center gap-2 mb-2 lg:mb-5">
                <FontAwesomeIcon icon={faJs} className="lg:w-8 lg:h-8"/>
                <p className="lg:text-xl">JavaScript</p>
                <progress class="progress w-56 lg:w-96 lg:h-4" value="60" max="100"></progress>
            </div>
            <div className="flex items-center gap-2 mb-2 lg:mb-5">
                <FontAwesomeIcon icon={faReact} className="lg:w-8 lg:h-8"/>
                <p className="lg:text-xl">React</p>
                <progress class="progress w-56 lg:w-96 lg:h-4" value="60" max="100"></progress>
            </div>
            <div className="flex items-center gap-2 mb-2 lg:mb-5">
                <FontAwesomeIcon icon={faNodeJs} className="lg:w-8 lg:h-8"/>
                <p className="lg:text-xl">Node JS</p>
                <progress class="progress w-56 lg:w-96 lg:h-4" value="65" max="100"></progress>
            </div>
            <div className="flex items-center gap-2 mb-2 lg:mb-5">
                <FontAwesomeIcon icon={faBootstrap} className="lg:w-8 lg:h-8"/>
                <p className="lg:text-xl">Bootstrape</p>
                <progress class="progress w-56 lg:w-96 lg:h-4" value="90" max="100"></progress>
            </div>
            <div className="flex items-center gap-2 mb-2 lg:mb-5">
                
                <p className="lg:text-xl">Tailwind CSS</p>
                <progress class="progress w-56 lg:w-96 lg:h-4" value="90" max="100"></progress>
            </div>
            <div className="flex items-center gap-2 mb-2 lg:mb-5">
                
                <p className="lg:text-xl">MongoDB</p>
                <progress class="progress w-56 lg:w-96 lg:h-4" value="40" max="100"></progress>
            </div>
            </div>
      </div>
      <div>
        <Projects></Projects>
      </div>
      <div>
        <ContactMe></ContactMe>
      </div>
    </div>
  );
};

export default Home;

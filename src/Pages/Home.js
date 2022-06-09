import { faBootstrap, faCss3Alt, faHtml5, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Home = () => {
  return (
    <div>
      <div class="hero my-28 bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse p-0">
          <img
            src="https://i.ibb.co/cb3C6T7/Whats-App-Image-2022-06-09-at-11-26-22-PM-removebg-preview-3.png"
            class="rounded-lg mt-[-72px]"
          />
          <div>
            <h1 class="text-4xl font-bold">Hello! I'm</h1>
            <h1 class="text-5xl font-bold">Md. Hasan Ahamed</h1>
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
      <div className="m-10 py-10">
        <h1 className="text-4xl text-center mb-6">Service Provide For My Clients</h1>
        <div className="grid justify-items-center">
        <div class="card w-96 bg-neutral text-primary-content grid justify-items-center">
          <div class="card-body">
            <h2 class="card-title">Development</h2>
            <ul className="list-disc">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node JS</li>
                <li>React</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
      <div className="m-10">
          <h1 className="text-4xl text-center pb-8">My Skills</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5 lg:py-10">
            <div className="flex items-center gap-2 mb-5">
                <FontAwesomeIcon icon={faHtml5} className="w-8 h-8"/>
                <p className="text-xl">HTML5</p>
                <progress class="progress w-64 lg:w-96 h-4" value="70" max="100"></progress>
            </div>
            <div className="flex items-center gap-2 mb-5">
                <FontAwesomeIcon icon={faCss3Alt} className="w-8 h-8"/>
                <p className="text-xl">CSS</p>
                <progress class="progress w-64 lg:w-96 h-4" value="70" max="100"></progress>
            </div>
            <div className="flex items-center gap-2 mb-5">
                <FontAwesomeIcon icon={faJs} className="w-8 h-8"/>
                <p className="text-xl">JavaScript</p>
                <progress class="progress w-64 lg:w-96 h-4" value="60" max="100"></progress>
            </div>
            <div className="flex items-center gap-2 mb-5">
                <FontAwesomeIcon icon={faReact} className="w-8 h-8"/>
                <p className="text-xl">React</p>
                <progress class="progress w-64 lg:w-96 h-4" value="60" max="100"></progress>
            </div>
            <div className="flex items-center gap-2 mb-5">
                <FontAwesomeIcon icon={faNodeJs} className="w-8 h-8"/>
                <p className="text-xl">Node JS</p>
                <progress class="progress w-64 lg:w-96 h-4" value="65" max="100"></progress>
            </div>
            <div className="flex items-center gap-2 mb-5">
                <FontAwesomeIcon icon={faBootstrap} className="w-8 h-8"/>
                <p className="text-xl">Bootstrape</p>
                <progress class="progress w-64 lg:w-96 h-4" value="90" max="100"></progress>
            </div>
            <div className="flex items-center gap-2 mb-5">
                
                <p className="text-xl">Tailwind CSS</p>
                <progress class="progress w-64 lg:w-96 h-4" value="90" max="100"></progress>
            </div>
            <div className="flex items-center gap-2 mb-5">
                
                <p className="text-xl">MongoDB</p>
                <progress class="progress w-64 lg:w-96 h-4" value="40" max="100"></progress>
            </div>
            </div>
      </div>
    </div>
  );
};

export default Home;

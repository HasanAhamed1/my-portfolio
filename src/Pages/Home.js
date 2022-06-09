import React from "react";

const Home = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/qJFv188/Whats-App-Image-2022-06-09-at-11-26-22-PM.png"
            class="max-w-sm rounded-lg shadow-2xl"
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
    </div>
  );
};

export default Home;

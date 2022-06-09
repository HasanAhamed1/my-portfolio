import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn, faTwitterSquare } from '@fortawesome/free-brands-svg-icons' 
import React from "react";

library.add(faFacebookF, faLinkedinIn); 

const FollowMe = () => {
  return (
    <div class="p-10 bg-neutral text-neutral-content text-center pt-8">
      <h1 className="text-4xl pb-4">Follow Me</h1>
      <a className='btn btn-circle btn-outline m-3' href="https://www.facebook.com/akash.hossain.75457081/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a className='btn btn-circle btn-outline m-3' href="https://www.linkedin.com/in/hasan-ahamed-144372241/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a className='btn btn-circle btn-outline m-3' href="https://github.com/HasanAhamed1" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default FollowMe;

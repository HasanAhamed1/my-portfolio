import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faTwitterSquare } from '@fortawesome/free-brands-svg-icons' 
import React from "react";

library.add(faFacebookF, faLinkedinIn); 

const FollowMe = () => {
  return (
    <div class="p-10 bg-neutral text-neutral-content text-center pt-8">
      <h1 className="text-5xl">Follow Me</h1>
      <a className='btn btn-circle btn-outline m-6' href="https://www.facebook.com/akash.hossain.75457081/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a className='btn btn-circle btn-outline m-6' href="https://www.linkedin.com/in/hasan-ahamed-144372241/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    
    </div>
  );
};

export default FollowMe;

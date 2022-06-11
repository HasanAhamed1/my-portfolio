import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';

const ContactMe = () => {
    const [result, setResult] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_15rrh5y', 'template_42io2p1', form.current, 'FvmA73X7Sqm6aIgcu')
          .then((result) => {
              console.log(result.text);
              toast('Thank You! Your message has send, I will contact you back');
              
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          setResult(true);
      };

    return (
        <div className='m-10 lg:py-8'>
            <h1 className='text-4xl mb-10 text-center'>Contact me</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div className='grid gap-5 lg:mx-44'>
                <div className='p-8 bg-slate-700 text-center'>
                    <h3 className='text-lg text-white font-bold'>Phone:</h3>
                    <p className='text-lg text-gray-300'>01625700226</p>
                </div>
                <div className='p-8 bg-slate-700 text-center'>
                    <h3 className='text-lg text-white font-bold'>Email:</h3>
                    <a href="hasanahmed95695@gmail.com" className='text-lg text-gray-300'>hasanahmed95695@gmail.com</a>
                </div>
                <div className='p-8 bg-slate-700 text-center'>
                    <h3 className='text-lg text-white font-bold'>Address:</h3>
                    <p className='text-lg text-gray-300'>Narayanganj, Dhaka</p>
                </div>
            </div>
            <div>
            <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="name" required class="input input-bordered h-16 w-full max-w-xs my-3" />
            <br />
            <input type="text" placeholder="Email" name="email" required class="input input-bordered h-16 w-full max-w-xs my-3" />
            <br />
            <input type="tel" placeholder="Phone" name="phone" required class="input input-bordered h-16 w-full max-w-xs my-3" />
            <br />
            <input type="description" placeholder="Your message" required name="message" class="input input-bordered h-24 w-full max-w-xs my-3" />
            <br />
            <input type="submit" placeholder="Submit" class="btn input-bordered w-full max-w-xs" />
            <ToastContainer />
            </form>
            </div>
            </div>
            
        </div>
    );
};

export default ContactMe;
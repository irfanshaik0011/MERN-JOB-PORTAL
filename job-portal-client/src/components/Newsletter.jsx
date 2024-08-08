import React from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';

const Newsletter = () => {
  return (
    <div>
      <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
        <FaEnvelopeOpenText />
        Email me for Jobs
      </h3>
      <p className='text-primary/75 text-base mb-4'>
        Ready for Your Next Career Adventure? 🚀💼
        Looking for exciting job opportunities in tech 💻, marketing 📈, design 🎨, or more? We’re here to help you find your perfect role! Send us an email with your resume and career goals 📧✨. Our team is dedicated to matching talented individuals with their dream jobs and supporting you every step of the way. 🌟🔍
        Don’t wait—your next career move could be just an email away! Reach out to [shaikirfanib123@example.com or jobjunction158@gmail.com] and let’s start exploring new opportunities together. Your dream job awaits! 🌐💪
      </p>
      <form action="https://formspree.io/f/mrbzkevq" method="POST" className='w-full space-y-4'>
        <input type="email" name='email' id='email' placeholder='name@gmail.com' className='w-full block py-2 pl-3 border focus:outline-none' required />
        <textarea name='description' id='description' placeholder='Describe your career goals...' className='w-full block py-2 pl-3 border focus:outline-none' required></textarea>
        <input type="url" name='resumeUrl' id='resumeUrl' placeholder='URL of your Resume/CV image' className='w-full block py-2 pl-3 border focus:outline-none' required />
        <input type="submit" value='CONTACT ME' className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-bold' />
      </form>
    </div>
  );
}

export default Newsletter;

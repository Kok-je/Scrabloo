import React from 'react';
import aboutPic from '../assets/profile3.JPG'

const About = () => {
  return (
    <div name='about' className='w-full sm:h-screen py-40 sm:py-0 '>
      <div className='flex flex-col justify-center items-center w-full h-full mt-40 md:mt-7'>
        <div className='max-w-[1100px] w-full flex justify-start px-14 '>
          <div className='sm:text-center pb-8  '>
            <p className='text-4xl font-bold inline border-b-4 border-danger'>
              About
            </p>
          </div>
          
        </div>
        <div className='max-w-[1100px] w-full grid md:grid-cols-2 gap-8 py-14 px-14  '>
            <div className='div flex flex-row justify-center ' >
                <img src={aboutPic} alt="profile" width="300" />
            </div>
            <div className='div flex flex-col justify-center py-10 px-14 rounded-3xl border-2'>
                <p className='text-xs sm:text-base text-justify'>
                  I am passionate about software as much as entrepreneruship! As a Computer Science Student,
                  I am able to merge these two interests by developing innovative ideas for hackathons. See
                  some of my projects below! And when I'm not nose-deep in code, you can find me indulging 
                  my love of art, music, sports, epic sci-fi, and a dash of horror movies. Currently learning 
                  to cook with ChatGPT! (Yes, I will cook fried rice for you)
                </p>  
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
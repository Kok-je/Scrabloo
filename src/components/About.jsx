import React from 'react';
import aboutPic from '../assets/profile3.JPG'

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-gray-300 '>
      <div className='flex flex-col justify-center items-center w-full h-full mt-7 '>
        <div className='max-w-[1100px] w-full flex justify-start pl-20 '>
          <div className='sm:text-center pb-8 pl-20 '>
            <p className='text-4xl font-bold inline border-b-4 border-danger'>
              About
            </p>
          </div>
          
        </div>
        <div className='max-w-[1100px] w-full grid md:grid-cols-2 gap-8 py-14 px-14 '>
            <div className='div flex flex-row justify-center ' >
                <img src={aboutPic} alt="profile" width="300" />
            </div>
            <div className='div flex flex-col justify-center py-10 px-14 rounded-3xl border-2'>
                <p>I am passionate about building excellent software that improves
                the lives of those around me. I specialize in creating software
                for clients ranging from individuals and small-businesses all the
                way to large enterprise corporations. What would you do if you had
                a software expert available at your fingertips?</p>  
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
import React from 'react'
import {FaMagic} from 'react-icons/fa'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
        <div className='max-w-[1100px] mx-auto mt-20 sm:px-14 px-6 flex flex-col justify-center w-full h-fit'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-secondary '>Contact</p>
                
            </div>
            <div className="flex justify-center">
                <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
                    <div className="flex flex-row items-center mt-4">
                        <FaMagic size={36} className='hidden sm:block mr-8 text-[#4169e1]'/>
                        <p className='py-4'>Let's make some magic happen! Drop me a message and let's brew up some enchanting solutions together.</p>
                    </div>
                    <input className='bg-[#e3e8ef] p-2' type="text" placeholder='Name' name='name' />
                    <input className='my-4 p-2 bg-[#e3e8ef]' type="email" placeholder='Email' name='email' />
                    <textarea className='bg-[#e3e8ef] p-2' name="message" rows="10" placeholder='Message'></textarea>
                    <button className='rounded-2xl border-2 hover:bg-secondary hover:text-white px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
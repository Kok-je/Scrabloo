import React from 'react';
import chirple from '../assets/Chirple.png'
import scrabloo from '../assets/Scrabloo.png'
import coydir from '../assets/Coydir.png'
import the100club from '../assets/the100club.png'
import sakura from '../assets/Sakura.png'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import { 
    SiJavascript,
    SiReact,
    SiHtml5,
    SiCss3,
    SiNetlify,
    SiSupabase,
    SiMui,
    SiAxios
} from "react-icons/si";
import {FaHatWizard, FaJava} from "react-icons/fa";

const Projects = () => {
  return (
    <div name='projects' className='w-full sm:h-screen py-20 sm:py-0 border-transparent border-2'>
      {/* Container */}
      <div className='max-w-[1100px] mx-auto mt-20 sm:px-14 px-6 flex flex-col justify-center w-full h-fit '>
          <div className=''>
              <p className='text-4xl font-bold inline border-b-4 border-secondary'>Projects</p>
              <div className="flex flex-row items-center ">
                <FaHatWizard size={36} className='hidden sm:block mr-8 text-[#4169e1]'/>
                <p className='py-8 text-xs sm:text-base'> I'm a software wizard who crafts code with elegance, accessibility, and 
              impact in mind. Here's hoping my creation will cast a spell of difference on others!</p>
              </div>
          </div>

          <div className='w-full flex flex-col space-y-8 items-center gap-4 text-center py-8 pt-4 '>
            <Card className="w-full md:w-3/4 overflow-hidden hover:shadow-[#8892b0] transition duration-300 ">
                <a href="https://chirple.netlify.app/" target="_blank" rel="noreferrer">
                    <CardHeader 
                      floated={false}
                      shadow={false}
                      color="transparent"
                      className="m-0 rounded-none"
                    >
                        <img
                        src={chirple}
                        alt="img-blur-shadow"
                        className="h-full w-full"
                        />
                    </CardHeader>  
                </a>
                
                <CardBody className="text-start">
                    <a href="https://github.com/Kok-je/chirple" target="_blank" rel="noreferrer">
                      <Typography variant="h3" className="font-mono mb-2 hover:underline">
                        Chirple 
                      </Typography>
                    </a>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between py-1">
                      <Typography className='text-xs sm:text-base font-bold text-[#8892b0]'>Twitter Scraping App with Real-time Analysis</Typography>
                      <Typography className='text-xs sm:text-base bg-secondary rounded-md px-2 text-[#ffffff] mt-2 sm:mt-0'>Dec 2022</Typography>
                    </div>
                    <Typography className="pt-3 text-justify" variant="small">
                    Chirple is an application that makes use of a Twitter Scrapping API to provide tailored data analysis to users about their 
                    products or events. Chirple aims to provide instant, fresh analysis of global sentiments using the Hashscrapper API. The 
                    application leverages critical real-time social media data made possible by the API to give users a leg up on upcoming trends, 
                    predict the next fads and fashions, and keep track of consumer sentiment.
                    </Typography>
                </CardBody>
                <CardFooter divider className="flex flex-col ">
                    <Typography className='flex justify-start text-xs sm:text-base text-[#8892b0]'>Tech Stack:</Typography>
                    <div className="div flex justify-start gap-5 pt-2">
                      <SiReact size={32}/><SiJavascript size={32}/><SiMui size={32}/><SiHtml5 size={32}/><SiCss3 size={32}/><SiNetlify size={32}/>
                    </div>
                </CardFooter>
            </Card>
            
            <Card className="w-full md:w-3/4 overflow-hidden hover:shadow-[#8892b0] transition duration-300 ">
                <a href="https://github.com/Kok-je/Scrabloo" target="_blank" rel="noreferrer">
                    <CardHeader 
                      floated={false}
                      shadow={false}
                      color="transparent"
                      className="m-0 rounded-none"
                    >
                        <img
                        src={scrabloo}
                        alt="img-blur-shadow"
                        className="h-full w-full"
                        />
                    </CardHeader>  
                </a>
                
                <CardBody className="text-start">
                    <a href="https://github.com/Kok-je/Scrabloo" target="_blank" rel="noreferrer">
                      <Typography variant="h3" className="font-mono mb-2 hover:underline">
                        Scrabloo 
                      </Typography>
                    </a>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between py-1">
                      <Typography className='text-xs sm:text-base font-bold text-[#8892b0]'>News aggregator web app with web scraping </Typography>
                      <Typography className='text-xs sm:text-base bg-secondary rounded-md px-2 text-[#ffffff] mt-2 sm:mt-0'>Dec 2022</Typography>
                    </div>
                    <Typography className="pt-3 text-justify" variant="small">
                    Scrabloo is a webscrapping project that extracts the latest news articles from the top tech news sites, Techcrunch, 
                    VentureBeat, digitaltrends, and Hacker News. This application pulls the most interesting stories tech, startups, and 
                    entertainment all into a single page for busy tech enthusiasts to read and digest with ease.
                    </Typography>
                </CardBody>
                <CardFooter divider className="flex flex-col ">
                    <Typography className='flex justify-start text-xs sm:text-base text-[#8892b0]'>Tech Stack:</Typography>
                    <div className="div flex justify-start gap-5 pt-2">
                      <SiJavascript size={32}/><SiHtml5 size={32}/><SiCss3 size={32}/><SiAxios size={32}/>
                    </div>
                </CardFooter>
            </Card>

            <Card className="w-full md:w-3/4 overflow-hidden hover:shadow-[#8892b0] transition duration-300 ">
                <a href="https://github.com/Kok-je/tp" target="_blank" rel="noreferrer">
                    <CardHeader 
                      floated={false}
                      shadow={false}
                      color="transparent"
                      className="m-0 rounded-none"
                    >
                        <img
                        src={coydir}
                        alt="img-blur-shadow"
                        className="h-full w-full"
                        />
                    </CardHeader>  
                </a>
                
                <CardBody className="text-start">
                    <a href="https://github.com/Kok-je/tp" target="_blank" rel="noreferrer">
                      <Typography variant="h3" className="font-mono mb-2 hover:underline">
                        Coydir 
                      </Typography>
                    </a>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between py-1">
                      <Typography className='text-xs sm:text-base font-bold text-[#8892b0]'>HR Management Application with GUI and CLI Interfaces</Typography>
                      <Typography className='text-xs sm:text-base bg-secondary rounded-md px-2 text-[#ffffff] mt-2 sm:mt-0'>Oct 2022</Typography>
                    </div>
                    <Typography className="pt-3 text-justify" variant="small">
                    Coydir is a desktop application used by Human Resource Executives to manage their employee base and streamline data 
                    collection. It is made simpler with a easy-to-use graphical user interface(GUI) and can also be accessed through a Command 
                    Line Interface(CLI). Coydir would not only allow users to quickly access the list of all employees and their details but also make 
                    necessary updates such as leaves and performance rating information.
                    </Typography>
                </CardBody>
                <CardFooter divider className="flex flex-col ">
                    <Typography className='flex justify-start text-xs sm:text-base text-[#8892b0]'>Tech Stack:</Typography>
                    <div className="div flex justify-start gap-5 pt-2">
                      <FaJava size={32}/><SiJavascript size={32}/><SiHtml5 size={32}/><SiCss3 size={32}/>
                    </div>
                </CardFooter>
            </Card>

            <Card className="w-full md:w-3/4 overflow-hidden hover:shadow-[#8892b0] transition duration-300 ">
                <a href="https://the100club.io/" target="_blank" rel="noreferrer">
                    <CardHeader 
                      floated={false}
                      shadow={false}
                      color="transparent"
                      className="m-0 rounded-none"
                    >
                        <img
                        src={the100club}
                        alt="img-blur-shadow"
                        className="h-full w-full"
                        />
                    </CardHeader>  
                </a>
                
                <CardBody className="text-start">
                    <a href="https://the100club.io/" target="_blank" rel="noreferrer">
                      <Typography variant="h3" className="font-mono mb-2 hover:underline">
                        The 100 Club 
                      </Typography>
                    </a>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between py-1">
                      <Typography className='text-xs sm:text-base font-bold text-[#8892b0]'>Mastermind Community for Singaporean Founders</Typography>
                      <Typography className='text-xs sm:text-base bg-secondary rounded-md px-2 text-[#ffffff] mt-2 sm:mt-0'>Jun 2022</Typography>
                    </div>
                    <Typography className="pt-3 text-justify" variant="small">
                    The 100 Club, is a mastermind membership platform + community, that matches entrepreneurial individuals into groups of 4, in order 
                    for them to support each other in staying accountable, sharing advice, and networking to grow their businesses. The platform will only 
                    be accessible by members and comprise a member directory where users will be able to see others’ profiles, purchase swag with credits, 
                    and access content.
                    </Typography>
                </CardBody>
                <CardFooter divider className="flex flex-col ">
                    <Typography className='flex justify-start text-xs sm:text-base text-[#8892b0]'>Tech Stack:</Typography>
                    <div className="div flex justify-start gap-5 pt-2">
                      <SiReact size={32}/><SiJavascript size={32}/><SiMui size={32}/><SiHtml5 size={32}/><SiCss3 size={32}/><SiSupabase size={32}/><SiNetlify size={32}/>
                    </div>
                </CardFooter>
            </Card>

            <Card className="w-full md:w-3/4 overflow-hidden hover:shadow-[#8892b0] transition duration-300 ">
                <a href="https://the100club.io/" target="_blank" rel="noreferrer">
                    <CardHeader 
                      floated={false}
                      shadow={false}
                      color="transparent"
                      className="m-0 rounded-none"
                    >
                        <img
                        src={sakura}
                        alt="img-blur-shadow"
                        className="h-full w-full"
                        />
                    </CardHeader>  
                </a>
                
                <CardBody className="text-start">
                    <a href="https://the100club.io/" target="_blank" rel="noreferrer">
                      <Typography variant="h3" className="font-mono mb-2 hover:underline">
                      🌸 Sakura 
                      </Typography>
                    </a>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between py-1">
                      <Typography className='text-xs sm:text-base font-bold text-[#8892b0]'>All-In-One Task Manager</Typography>
                      <Typography className='text-xs sm:text-base bg-secondary rounded-md px-2 text-[#ffffff] mt-2 sm:mt-0'>Sep 2022</Typography>
                    </div>
                    <Typography className="pt-3 text-justify" variant="small">
                    Sakura is an ALL-IN-ONE task manager application that can help you track and manage all your efficiently 
                    via a Command Line Interface and aesthetic Graphical User Interfact (GUI). It is easy to use, comprises of all the 
                    information you need, fast, and saves your information. Download Sakura and get started on your tasks! 
                    </Typography>
                </CardBody>
                <CardFooter divider className="flex flex-col ">
                    <Typography className='flex justify-start text-xs sm:text-base text-[#8892b0]'>Tech Stack:</Typography>
                    <div className="div flex justify-start gap-5 pt-2">
                      <FaJava size={32}/><SiJavascript size={32}/><SiCss3 size={32}/>
                    </div>
                </CardFooter>
            </Card>
          </div>
      </div>
    </div>
  );
};

export default Projects;
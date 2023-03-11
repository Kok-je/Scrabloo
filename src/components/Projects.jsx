import React from 'react';
import chirple from '../assets/Chirple.png'
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
    SiMaterialui,
    SiPython,
    SiPostgresql,

} from "react-icons/si";

const Projects = () => {
  return (
    <div name='projects' className='w-full sm:h-screen py-40 sm:py-0 border-transparent border-2'>
      {/* Container */}
      <div className='max-w-[1100px] mx-auto mt-20 px-14 flex flex-col justify-center w-full h-fit '>
          <div className=''>
              <p className='text-4xl font-bold inline border-b-4 border-danger '>Projects</p>
              <p className='py-4'>These are the projects I've developed</p>
          </div>

          <div className='w-full flex flex-col space-y-8 items-center gap-4 text-center py-8 pt-24 '>
            <Card className="w-full md:w-3/4">
                <a href="https://chirple.netlify.app/" target="_blank">
                    <CardHeader color="blue" className="relative h-58 hover:scale-[1.02]">
                        <img
                        src={chirple}
                        alt="img-blur-shadow"
                        className="h-full w-full"
                        />
                    </CardHeader>  
                </a>
                
                <CardBody className="text-start">
                    <Typography variant="h5" className="mb-2">
                    Chirple – Twitter Scraping App with Real-time Analysis 
                    </Typography>
                    <Typography className="pt-2" fontWeight="light">
                    Chirple is an application that makes use of a Twitter Scrapping API to provide tailored data analysis to users about their 
                    products or events. Chirple aims to provide instant, fresh analysis of global sentiments using the Hashscrapper API. The 
                    application leverages critical real-time social media data made possible by the API to give users a leg up on upcoming trends, 
                    predict the next fads and fashions, and keep track of consumer sentiment.
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-left gap-5 pt-2">
                    <SiReact size={32}/><SiJavascript size={32}/><SiHtml5 size={32}/><SiCss3 size={32}/><SiMaterialui size={32}/><SiNetlify size={32}/>
                    <SiPostgresql /><SiPython /><SiSupabase />
                </CardFooter>
                <CardFooter divider className="flex items-center justify-between py-3">
                    <Typography variant="small">$899/night</Typography>
                    <Typography variant="small" color="gray" className="flex gap-1">
                    <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                    Barcelona, Spain
                    </Typography>
                </CardFooter>
                
            </Card>
            
          </div>
      </div>
    </div>
  );
};

export default Projects;
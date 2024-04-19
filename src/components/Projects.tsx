import React from 'react';
import { projectInfo, Project } from '../constants';
import Fade from '@mui/material/Fade';
import Hidden from '@mui/material/Hidden';
import { FaGithub } from "react-icons/fa";
import {
  PURPLE,
} from '../constants';
import '../styles/Projects.css';
import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Projects: React.FC = () => {

  return (
    <Fade in timeout={{ enter: 1200 }}>
      <div className='projects-container rounded-lg mt-10'>
  
            {projectInfo.map((project: Project, index: number) => (
              <React.Fragment key={index}>
                <Card className="md:w-2/3 text-left mb-10 mx-4 md:mx-0">
                  <CardHeader>
                    <CardTitle className='text-4xl'>{project.name}</CardTitle>
                    <CardDescription className='text-2xl'>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                          
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <a href={project.buttons[0].link} target="_blank" rel="noopener noreferrer">
                      <Button className='gap-3 text-xl'><FaGithub/>GitHub</Button>
                    </a>
                  </CardFooter>
                </Card>
              </React.Fragment>
            ))}
      </div>
    </Fade>
  );
};

export default Projects;
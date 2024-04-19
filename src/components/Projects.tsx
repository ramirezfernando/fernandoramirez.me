import React from 'react';
import { projectInfo, Project, ButtonType } from '../data';
import Fade from '@mui/material/Fade';
import '../styles/Projects.css';
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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
                      <div className='flex flex-row gap-2'>
                      {
                        project.stack.map((tech: string, index: number) => (
                          <Badge variant="secondary" key={index} className='min-w-fit text-lg'>{tech}</Badge>
                        ))
                      }
                      </div>
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
                  <CardFooter className="flex gap-2">
                    {project.buttons.map((tech: ButtonType, index: number) => (
                      <a key={index} href={tech.link} target="_blank" rel="noopener noreferrer">
                        <Button className='gap-3 text-xl'>{tech.icon}{tech.name}</Button>
                      </a>
                    ))}
                  </CardFooter>
                </Card>
              </React.Fragment>
            ))}
      </div>
    </Fade>
  );
};

export default Projects;
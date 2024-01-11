import React from 'react';
import { projectInfo, Project, Button } from '../constants';
import Fade from '@mui/material/Fade';
import Hidden from '@mui/material/Hidden';

import '../styles/Projects.css';

const Projects: React.FC = () => {
  const projectsCardContainer: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const projectDetails: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '16px',
  };

  const renderLinks = (buttons: Button[]) =>
    buttons.map((button, index) => {
      const { name, link } = button;

      return (
        <a key={index} href={link} target='_blank' rel='noopener noreferrer'>
          <div className='ProjectsCard-left-buttons-button' style={{ borderColor: 'blue' }}>
            <span>{name}</span>
          </div>
        </a>
      );
    });

  return (
    <Fade in timeout={{ enter: 1200 }}>
      <div className='projects-container'>
        <Hidden smDown>
          {projectInfo.map((project: Project, index: number) => {
            const {
              color,
              image,
              name,
              type,
              stack,
              description,
              buttons,
            } = project;

            return (
              <div key={index} style={projectsCardContainer} className='ProjectsCard'>
                <div className='ProjectsCard-left'>
                    <img
                    style={{
                        opacity: 1,
                    }}
                    src={image}
                    alt='project'
                    />
        
                  <div className='ProjectsCard-left-info' style={projectDetails}>
                    <span className='ProjectsCard-left-info-left'>type</span>
                    <span className='ProjectsCard-left-info-right' style={{ color }}>
                      {type}
                    </span>
                    <span className='ProjectsCard-left-info-left'>stack</span>
                    <span className='ProjectsCard-left-info-right' style={{ color }}>
                      {stack}
                    </span>
                  </div>
                  <div className='ProjectsCard-left-buttons'>{renderLinks(buttons)}</div>
                </div>
                <div
                  className='ProjectsCard-center'
                  style={{ backgroundColor: color }}
                ></div>
                <div className='ProjectsCard-right'>
                  <span className='ProjectsCard-right-header'>{name}</span>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </Hidden>
        <Hidden mdUp>
          {projectInfo.map((project: Project, index: number) => {
            const {
              color,
              name,
              type,
              stack,
              description,
              buttons,
            } = project;

            return (
              <div key={index} className='ProjectsCardMobile'>
                <span className='ProjectsCardMobile-header'>{name}</span>

                <div className='ProjectsCardMobile-grid'>
                  <span className='ProjectsCardMobile-grid-left'>type</span>
                  <span className='ProjectsCardMobile-grid-right' style={{ color }}>
                    {type}
                  </span>
                  <span className='ProjectsCardMobile-grid-left'>stack</span>
                  <span className='ProjectsCardMobile-grid-right' style={{ color }}>
                    {stack}
                  </span>
                </div>
                <div className='ProjectsCardMobile-buttons'>{renderLinks(buttons)}</div>
                <div
                  className='ProjectsCardMobile-center'
                  style={{ backgroundColor: color }}
                ></div>
                <p>{description}</p>
              </div>
            );
          })}
        </Hidden>
      </div>
    </Fade>
  );
};

export default Projects;
import React from "react";
import Rankume from '../src/assets/rankume.png'

export const DARK_GRAY = '#2A2B2E';
export const PURPLE = '#7247FF';
export const PINK = '#FF006E';
export const BLUE = '#8DEAFF';
export const YELLOW = '#FFE084';
export const LIGHT_GRAY = '#D9D9D9';
export const ALMOST_WHITE = '#F5F5F5';

export interface Button {
  name: string;
  link: string;
}

export interface Project {
    color: string;
    image: string;
    name: string;
    type: string;
    stack: any;
    description: React.ReactNode;
    buttons: Button[];
  }
  
export const projectInfo: Project[] = [
    {
        color: PURPLE,
        image: Rankume,
        name: 'Rankumé',
        type: 'full-stack web app',
        stack: 'ReactJS + TypeScript + Python + AWS',
        description: (
        <span>
            Rankumé is a crowd-sourced resume ranking web app thats currenly in progress.
            <br />
            <br />
            Ever wonder how good of a resume you have? Let the community decide. 
            We hope to add features such as filtering by job industry.
            <br />
            <br /> 
            I'm working closely with two of my friends: a designer, and an engineer.
        </span>
      ),
      buttons: [
        {
            name: 'code',
            link: 'https://github.com/rankume',
        },
      ],
    },
];
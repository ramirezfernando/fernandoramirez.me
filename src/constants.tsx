import React from "react";
import Rankume from '../src/assets/rankume.png'
import GoGo from '../src/assets/gogo.png'
import CoCo from '../src/assets/coco.png'
import RPG from '../src/assets/rpg.png'

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
        name: 'Rankumé (In Progress)',
        type: 'Full-stack web app',
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
            link: 'https://github.com/orgs/rankume/repositories',
        },
      ],
    },

    {
        color: BLUE,
        image: GoGo,
        name: 'GoGo API',
        type: 'REST API',
        stack: 'Go + Supabase + Vercel',
        description: (
        <span>
            GoGo (named after Go) is a REST API for{' '}
            <a
                href='https://www.codecoogs.com/'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: BLUE }}
            >
            Code[Coogs]
            </a>
            ,{' '} a coding club at my university.
            <br />
            <br />
            GoGo API makes it easier for the officers of Code[Coogs] to manage memberships for 200+ members and keep track of events and payments.
        </span>
      ),
      buttons: [
        {
            name: 'code',
            link: 'https://github.com/codecoogs/gogo',
        },
      ],
    },

    {
        color: BLUE,
        image: CoCo,
        name: 'CoCo Bot',
        type: 'Discord bot',
        stack: 'TypeScript + Discord.js',
        description: (
        <span>
            CoCo (named after the clubs mascot) is a Discord bot for{' '}
            <a
                href='https://www.codecoogs.com/'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: BLUE }}
            >
            Code[Coogs]
            </a>
            ,{' '} a coding club at my university.
            <br />
            <br />
            CoCo bot allows over +200 users to verify their membership, view points, and leaderboard. 
        </span>
      ),
      buttons: [
        {
            name: 'code',
            link: 'https://github.com/codecoogs/bot',
        },
      ],
    },

    {
        color: YELLOW,
        image: RPG,
        name: 'Turn-Based Role-Playing Game',
        type: 'Game',
        stack: 'C++ + SDL2',
        description: (
        <span>
            Developed a 2D turn-based battle game that was voted best among 144 students in my programming course. 
            <br />
            <br />
            I went above and beyond of the game requirements by making it 2D and 
            adding features such as view character stats, attack, run, and save progress. 
        </span>
      ),
      buttons: [
        {
            name: 'code',
            link: 'https://github.com/ramirezfernando/turn-based-rpg',
        },
      ],
    },
];
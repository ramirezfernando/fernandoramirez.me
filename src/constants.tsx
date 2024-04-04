import React from "react";
import GoGo from '../src/assets/gogo.png'
import CoCo from '../src/assets/coco.png'
import RPG from '../src/assets/rpg.png'
import ClocTool from '../src/assets/cloc-tool.png'

export const DARK_GRAY = '#828494';
export const PURPLE = '#7074dc';
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
        color: DARK_GRAY,
        image: GoGo,
        name: 'GoGo API',
        type: 'REST API',
        stack: 'Go, Supabase, Vercel',
        description: (
        <span>
            GoGo (named after Go + CoCo, the club's mascot) is a REST API for{' '}
            <a
                href='https://www.codecoogs.com/'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: PURPLE }}
            >
            Code[Coogs]
            </a>
            . It is used by the club's website and discord bot.
            <br />
            <br />
            GoGo API makes it easier for the officers of Code[Coogs] to manage memberships, events, and more for 200+ members!
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
        color: DARK_GRAY,
        image: CoCo,
        name: 'CoCo Bot',
        type: 'Discord bot',
        stack: 'TypeScript, Discord.js, Heroku',
        description: (
        <span>
            CoCo is a Discord bot for{' '}
            <a
                href='https://www.codecoogs.com/'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: PURPLE }}
            >
            Code[Coogs]
            </a>
            .
            <br />
            <br />
            CoCo bot allows over 200+ users to verify their membership, view points, and leaderboard!
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
      color: DARK_GRAY,
      image: ClocTool,
      name: 'Cloc-tool',
      type: 'Command-line tool',
      stack: 'Go, Bubbletea, GoReleaser',
      description: (
      <span>
          Command line tool used to count lines of code (CLOC) in a user specified path.
          <br />
          <br />
          Cloc-tool can scan millions of lines of code in seconds and outputs the results in a user-friendly format! Version 1.0.1 is available to MacOS, Linux, and Windows!
      </span>
    ),
    buttons: [
      {
          name: 'code',
          link: 'https://github.com/ramirezfernando/cloc-tool',
      },
    ],
  },

    {
        color: DARK_GRAY,
        image: RPG,
        name: 'Turn-Based Role-Playing Game',
        type: 'Game',
        stack: 'C++, SDL2',
        description: (
        <span>
            Developed a 2D turn-based battle game that was voted best among 144 students in my {' '}
            <a
                href='https://www.coursicle.com/uh/courses/COSC/1437/'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: PURPLE }}
            >
            COSC 1437 
            </a>
            {' '} course. 
            <br />
            <br />
            I went above and beyond of the game requirements by making it 2D and 
            adding features such as view character stats, attack, run, and save progress!
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
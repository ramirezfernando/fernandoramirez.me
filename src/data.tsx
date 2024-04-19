import React from "react";
import GoGo from '../src/assets/gogo.png'
import CoCo from '../src/assets/coco.png'
import RPG from '../src/assets/rpg.png'
import Ube from '../src/assets/ube.png'
import { FaGithub, FaBookOpen } from "react-icons/fa";

export const ALMOST_WHITE = '#F5F5F5';

export interface ButtonType {
  icon?: React.ReactNode;
  name: string;
  link: string;
}

export interface Project {
    image?: string;
    name: string;
    type: string;
    stack: string[];
    description: React.ReactNode;
    content: React.ReactNode;
    buttons: ButtonType[];
  }
  
export const projectInfo: Project[] = [
    {
        image: GoGo,
        name: 'GoGo API',
        type: 'REST API',
        stack: ['Go', 'Supabase', 'Vercel'],
        description: (
        <span>
            A Serverless REST API for {" "} <a href='https://www.codecoogs.com/' target='_blank' rel='noopener noreferrer'>Code[Coogs]</a>.
        </span>
        ),
        content: (
          <span>
            GoGo API makes it easier for the officers of Code[Coogs] to manage memberships, events, and more for 200+ members!
          </span>
        ),
        buttons: [
          {
            icon: <FaGithub/>,
            name: 'GitHub',
            link: 'https://github.com/codecoogs/gogo',
          },
          {
            icon: <FaBookOpen/>,
            name: 'Docs',
            link: 'https://docs.codecoogs.com/docs/api/introduction',
          },
        ],
    },

    {
        image: CoCo,
        name: 'CoCo Bot',
        type: 'Discord bot',
        stack: ['TypeScript', 'Discord.js', 'Heroku'],
        description: (
        <span>
            A Discord bot for{' '}
            <a href='https://www.codecoogs.com/' target='_blank' rel='noopener noreferrer'>Code[Coogs]</a>.
        </span>
        ),
        content: (
          <span>
              CoCo bot allows over 200+ users to verify their membership, view points, and leaderboard!
          </span>
        ),
        buttons: [
          {
            icon: <FaGithub/>,
            name: 'GitHub',
            link: 'https://github.com/codecoogs/bot',
          },
          {
            icon: <FaBookOpen/>,
            name: 'Docs',
            link: 'https://docs.codecoogs.com/docs/bot/introduction',
          },
        ],
    },

    {
      image: Ube,
      name: 'Ube',
      type: 'Command-line tool',
      stack: ['Go', 'Bubbletea', 'GoReleaser'],
      description: (
      <span>
          A command line tool used to count files and lines of code (CLOC)
      </span>
      ),
      content: (
        <span>
          Ube will show the number of files, and total lines within those files grouped by language. 
          It can scan millions of lines of code in seconds and outputs the results in a user-friendly format! 
          Version 2.0.0 is available on MacOS, Linux, and Windows!
        </span>
      ),
      buttons: [
        {
          icon: <FaGithub/>,
          name: 'GitHub',
          link: 'https://github.com/ramirezfernando/ube',
        },
      ],
    },

    {
        image: RPG,
        name: 'Fernhelm',
        type: 'Game',
        stack: ['C++', 'SDL2'],
        description: (
        <span>
            A 2D, 2-player local co-op turn-based battle game.
        </span>
        ),
        content: (
          <span>
            Players take turns moving their characters and attacking each other. The game ends when one player's health reaches 0!
          </span>
        ),
        buttons: [
          {
            icon: <FaGithub/>,
            name: 'GitHub',
            link: 'https://github.com/ramirezfernando/fernhelm',
          },
        ],
    },

    {
      name: 'Autosudoku',
      type: 'Sudoku solver',
      stack: ['Python', 'PyAutoGUI', 'PyTest'],
      description: (
      <span>
          A program that automates the solving of web-based sudoku puzzles.
      </span>
      ),
      content: (
        <span>
          Open a sudoku puzzle in your browser, run the program and enter the board into the terminal, and watch the magic happen!
        </span>
      ),
      buttons: [
        {
          icon: <FaGithub/>,
          name: 'GitHub',
          link: 'https://github.com/ramirezfernando/autosudoku',
        },
      ],
  },
];
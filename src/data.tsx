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
    image: string;
    name: string;
    type: string;
    stack: string[];
    description: React.ReactNode;
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
            GoGo (named after Go + CoCo, the club's mascot) is a REST API for{' '}
            <a
                href='https://www.codecoogs.com/'
                target='_blank'
                rel='noopener noreferrer'
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
            CoCo is a Discord bot for{' '}
            <a
                href='https://www.codecoogs.com/'
                target='_blank'
                rel='noopener noreferrer'
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
          Ube (ooh-bay) is a program that displays statistics about your code. Ube will show the number of files, and total lines within those files grouped by language.
          <br />
          <br />
          Ube can scan millions of lines of code in seconds and outputs the results in a user-friendly format! Version 2.0.0 is available to MacOS, Linux, and Windows!
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
            Fernhelm is a 2D, 2-player local co-op turn-based battle game.

            <br />
            <br />
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
];
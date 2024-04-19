import { FaLinkedin, FaGithub, FaReact } from 'react-icons/fa';
import { RiNewspaperLine } from "react-icons/ri";
import { IoMdMail } from 'react-icons/io';
import Hidden from '@mui/material/Hidden';
import Tooltip from '@mui/material/Tooltip';
import { Button } from "@/components/ui/button"
import { StickyNote } from 'lucide-react';

import '../styles/Footer.css';

const Footer = () => {
    return (
      <div className='footer-container'>
        <Hidden xsDown>
          <div className='footer-copyright'>
            <p className='items-center'>Made with &nbsp; <FaReact /> &nbsp; by Fernando</p>
          </div>
        </Hidden>
        <div className='footer-links-container gap-1'>

          <Button variant="outline" size="icon" className="h-14 w-14 rounded-xl">
            <a href='https://github.com/ramirezfernando' target='_blank' rel='noopener noreferrer'>
            <FaGithub className="h-7 w-7"/>
            </a>
          </Button>

          <Button variant="outline" size="icon" className="h-14 w-14 rounded-xl">
            <a href='mailto:ramirez.fernando2003@gmail.com' target='_blank' rel='noopener noreferrer'>
              <IoMdMail className="h-7 w-7" />
            </a>
          </Button>

          <Button variant="outline" size="icon" className="h-14 w-14 rounded-xl">
            <a href='https://linkedin.com/in/fndo/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className="h-7 w-7" />
            </a>
          </Button>

          <Button variant="outline" size='icon' className="h-14 w-14 rounded-xl">
            <a href='https://raw.githubusercontent.com/ramirezfernando/resume/main/Fernando_Ramirez_Resume.png' target='_blank' rel='noopener noreferrer'>
            <StickyNote className="h-7 w-7" />
            </a>
          </Button>
        
        </div>
      </div>
    );
  };
  
  export default Footer;
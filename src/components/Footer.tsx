import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import Hidden from '@mui/material/Hidden';
import Tooltip from '@mui/material/Tooltip';

import '../styles/Footer.css';

const Footer = () => {
    return (
      <div className='footer-container'>
        <Hidden xsDown>
          <div className='footer-copyright'>
            <p>Made with ❤️ by Fernando</p>
          </div>
        </Hidden>
        <div className='footer-links-container'>
          
          <div className='footer-link github'>
          <Tooltip title='GitHub' placement='top' arrow>
            <a
              href='https://github.com/ramirezfernando'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub style={{ animationDelay: '100ms' }} />
            </a>
          </Tooltip>
        </div>

        <div className='footer-link email'>
          <Tooltip title='Email' placement='top' arrow>
            <a
              href='mailto:ramirez.fernando2003@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IoMdMail style={{ animationDelay: '200ms' }} size='1.7rem' />
            </a>
          </Tooltip>
        </div>

        <div className='footer-link linkedin'>
          <Tooltip title='LinkedIn' placement='top' arrow>
            <a
              href='https://linkedin.com/in/fndo/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin style={{ animationDelay: '300ms' }} size='1.7rem' />
            </a>
          </Tooltip>
        </div>

        </div>
      </div>
    );
  };
  
  export default Footer;
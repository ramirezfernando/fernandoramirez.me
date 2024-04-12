import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useState } from 'react';

import '../styles/Header.css';
import {
    ALMOST_WHITE,
} from '../constants';

interface HeaderLinkProps {
    title: string;
    color: string;
    selected: boolean;
    handleSelect: any;
}

const HeaderLink = (props: HeaderLinkProps) => {
    const link = props.title === 'Fernando Ramirez' ? 'about' : props.title;
    return (
        <div className='header-link'>
            <NavLink
                to={link === 'blog' ? 'https://blog.fernandoramirez.me/' : `/${link}`}
                target={link === 'blog' ? '_blank' : ''}
                rel={link === 'blog' ? 'noopener noreferrer' : ''}
                style={{ textDecoration: 'none' }}
                onClick={() => props.handleSelect(props.title)}
            >
                {({ isActive }) => (
                    <>
                    <h3 style={{ color: props.color, paddingRight: '0.5rem' }}>{props.title}</h3>
                    {props.title !== 'Fernando Ramirez' && (
                        <div className={isActive ? 'header-dot-active' : 'header-dot'}>
                            <h3 style={{ color: props.color }}>•</h3>
                        </div>
                    )}
                    </>
                )}
            </NavLink>
        </div>
    );
    };

const Header = () => {
    const [selectedPage, setSelectedPage] = useState('about');
    const handleSelect = (page: string) => {
        setSelectedPage(page);
    };
    
    return (
        <div className='header-container'>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <div className='header-logo'>
                <HeaderLink
                    title='Fernando Ramirez'
                    color={ALMOST_WHITE}
                    selected={selectedPage === ''}
                    handleSelect={handleSelect}
                />
            </div>
            </Box>
        <div className='header-content'
            style={{
                position: 'absolute',
                right: 0,
                paddingRight: '5rem',
                justifyContent: 'center',
                display: 'flex',
            }}>
            <HeaderLink
                title='about'
                color={ALMOST_WHITE}
                selected={selectedPage === 'about'}
                handleSelect={handleSelect}
            />

            <h3 id='slash'>/</h3>

            <HeaderLink
                title='projects'
                color={ALMOST_WHITE}
                selected={selectedPage === 'projects'}
                handleSelect={handleSelect}
            />

            <h3 id='slash'>/</h3>

            <HeaderLink
                title='contact'
                color={ALMOST_WHITE}
                selected={selectedPage === 'contact'}
                handleSelect={handleSelect}
            /> 

            <h3 id='slash'>/</h3>

            <HeaderLink
                title='blog'
                color={ALMOST_WHITE}
                selected={selectedPage === 'blog'}
                handleSelect={handleSelect}
            /> 
        </div>
        </div>
    );
};

export default Header;
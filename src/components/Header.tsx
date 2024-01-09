import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useState } from 'react';

import '../Styles/Header.css';
import {
    PURPLE,
    BLUE,
    YELLOW,
    PINK,
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
        <Link
            to={link === 'resume' ? 'https://github.com/ramirezfernando/resume/blob/main/Fernando_Ramirez_Resume.pdf' : `/${link}`}
            style={{ textDecoration: 'none' }}
            className={props.selected ? 'header-no-link' : ''}
            onClick={() => props.handleSelect(props.title)}
        >
        <h3 style={{ color: props.color, paddingRight: '0.5rem' }}>{props.title}</h3>
            {props.title !== 'Fernando Ramirez' && (
            <div className={props.selected ? 'header-dot-active' : 'header-dot'}>
                <h3 style={{ color: props.color }}>•</h3>
            </div>
            )}
        </Link>
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
                color={PURPLE}
                selected={selectedPage === 'about'}
                handleSelect={handleSelect}
            />

            <h3 id='slash'>/</h3>

            <HeaderLink
                title='projects'
                color={BLUE}
                selected={selectedPage === 'projects'}
                handleSelect={handleSelect}
            />

            <h3 id='slash'>/</h3>

            <HeaderLink
                title='contact'
                color={YELLOW}
                selected={selectedPage === 'contact'}
                handleSelect={handleSelect}
            /> 

            <h3 id='slash'>/</h3>

            <HeaderLink
                title='resume'
                color={PINK}
                selected={selectedPage === 'resume'}
                handleSelect={handleSelect}
            /> 
        </div>
        </div>
    );
};

export default Header;
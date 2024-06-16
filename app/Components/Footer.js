import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="flex justify-center text-center gap-[10em] h-[5em] items-center">
                <p>&copy; {new Date().getFullYear()} Personal Portfolio made with 💖 by <a href='mailto:salunkevishwajeet577@gmail.com' className='gradient-text font-bold'>Vishwajeet Salunke</a></p>
                <div className='flex justify-around min-w-[10em]'>
                    <a href="https://www.linkedin.com/in/vishwajeetsalunke" aria-label='LinkedIn'><LinkedInIcon /></a>
                    <a href="https://www.github.com/vishwajeetsalunke2080" aria-label='Github'><GitHubIcon /></a>
                    <a href="https://www.instagram.com/vishwajeet_salunke" aria-label='Instagram'><InstagramIcon /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

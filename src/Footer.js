import React from 'react';
import tiktok from './images/tiktok.png';
import facebook from './images/facebook.png';
import instagram from './images/instagram.jpg';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p style={styles.copyright}>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>

            <div style={styles.columns}>
                {/* Left Column */}
                <div style={styles.column}>
                    <a href="/" style={styles.link}>Home</a>
                    <a href="/about" style={styles.link}>About</a>
                    <a href="/contact" style={styles.link}>Contact</a>
                </div>

                {/* Right Column */}
                <div style={styles.column}>
                    <a href="/" style={styles.link}>Contact Us</a>
                    <a href="/" style={styles.link}>contactus@gmail.com</a>
                    <a href="/" style={styles.link}>123-456-7890</a>
                </div>
            </div>

            {/* Social Media Icons */}
            <div style={styles.socialIcons}>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                    <img src={tiktok} alt="TikTok" style={styles.icon} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="Facebook" style={styles.icon} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" style={styles.icon} />
                </a>
            </div>
        </footer>
    );
};

// CSS styles as JavaScript objects
const styles = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '1em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    columns: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '600px', // Optional: sets max width for the footer content
        marginTop: '0.5em',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        marginBottom: '8px', // Space between links
    },
    copyright: {
        textAlign: 'center',
    },
    socialIcons: {
        display: 'flex',
        gap: '10px', // Space between social icons
        marginTop: '1em',
    },
    icon: {
        width: '24px',
        height: '24px',
    },
};

export default Footer;
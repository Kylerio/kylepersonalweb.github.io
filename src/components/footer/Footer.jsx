import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Ruiyow</h1>

            <ul className="footer_list">
                <li>
                    <a href="#home" className="footer_link">Home</a>
                </li>

                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#portofolio" className="footer_link">Portofolio</a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="https://www.instagram.com/ruiyoww/" className="home_social-icon" target='_blank'>
                    <i class="bx bxl-instagram-alt"></i> 
                </a>

                <a href="https://github.com/Kylerio" className="home_social-icon" target='_blank'>
                    <i class="bx bxl-github"></i>
                </a>

                <a href="https://www.linkedin.com/in/barakhyel-agustorio-gulo-b9829b143/" className="home_social-icon" target='_blank'>
                    <i class="bx bxl-linkedin-square"></i>
                </a>
            </div>

            <span className="footer_copy">© Ruiyow. All rights reserved.</span>
        </div>
    </footer>
  )
}

export default Footer
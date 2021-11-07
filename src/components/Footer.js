import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import "./Footer.css"

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to recieve our best vacation deals.
                </p>

                <p className="footer-subscription-text">
                    You can unsubscribe any time
                </p>

                <div className="input-areas">
                    <form>
                        <input type ="email" name="email" placeholder="Your Email" className="footer-input" />

                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form> 
                </div>
            </section>

            <div className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <h2>About Us</h2>
                        <Link to ="/sign-up">How it Works</Link>
                        <Link to ="/">Testimonials</Link>
                        <Link to ="/">Carrers</Link>
                        <Link to ="/">Investors</Link>
                        <Link to ="/">Terms of Services</Link>
                    </div>

                    <div className="footer-links-items">
                        <h2>Contact Us</h2>
                        <Link to ="/">Contacts</Link>
                        <Link to ="/">Support</Link>
                        <Link to ="/">Destinations</Link>
                        <Link to ="/">Sponserships</Link>
                    </div>
                </div>

                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <h2>Videos</h2>
                        <Link to ="/">Submit Videos</Link>
                        <Link to ="/">Ambassdors</Link>
                        <Link to ="/">Agency</Link>
                        <Link to ="/">Influencers</Link>
                    </div>

                    <div className="footer-links-items">
                        <h2>Social Media</h2>
                        <Link to ="/">Instagram</Link>
                        <Link to ="/">Facebook</Link>
                        <Link to ="/">You-tube</Link>
                        <Link to ="/">Twitter</Link>
                    </div>
                </div>
            </div>

            <section className="social-media" >
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            RUSHI <i class="fa-brands fa-asymmetrik"></i>
                        </Link>
                    </div>
                    
                    <small className="website-rights">RUSHI <i class="fa-regular fa-copyright"> 2020</i></small>
                    
                    <Link className="social-icon-link facebook"
                    to="/"
                    target="_blank"
                    aria-label="Facebook"
                    >
                    <i class="fa-brands fa-facebook"></i>
                    </Link>

                    <Link className="social-icon-link instagram"
                    to="/"
                    target="_blank"
                    aria-label="Instagram"
                    >
                    <i class="fa-brands fa-instagram"></i>
                    </Link>

                    <Link className="social-icon-link youtube"
                    to="/"
                    target="_blank"
                    aria-label="Youtube"
                    >
                    <i class="fa-brands fa-youtube"></i>
                    </Link>

                    <Link className="social-icon-link twitter"
                    to="/"
                    target="_blank"
                    aria-label="Twitter"
                    >
                    <i class="fa-brands fa-twitter"></i>
                    </Link>

                    <Link className="social-icon-link linkedin"
                    to="/"
                    target="_blank"
                    aria-label="LinkedIn"
                    >
                    <i class="fa-brands fa-linkedin"></i>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Footer 

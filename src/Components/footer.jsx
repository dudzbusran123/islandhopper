import React from "react";
import '../Syles/Footer.css';
import { Link } from "react-router-dom";


import '@fortawesome/fontawesome-free/css/all.min.css';


 

const Footer = () =>{

  
    return(
      
        <footer class="site-footer">
          <div class="container">
            <div class="rows">
              <div class="col-sm-12 col-md-6">
                <h6>Contact Us!</h6>
                <i class="fa-solid fa-tty"></i>
                <span> : 1234-567</span>
                <br/>
                <i class="fa-solid fa-phone"></i>
                <span>   : +63967574431</span>
                <br/>
                <i class="fa-regular fa-envelope"></i>
                <span>   : islandHopper@gmail.com</span>
              </div>
              
    
              <div class="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul class="footer-links">
                  <li><a href="index.html">Islands</a></li>
                  <li><a href="index.html">Team</a></li>
                  <li><a href="index.html">School</a></li>
                  <li><a href="index.html">Locations</a></li>
                  <li><a href="index.html">Transportation</a></li>
                  <li><a href="index.html">Hotels</a></li>
                </ul>
              </div>
    
              <div class="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul class="footer-links">
                  <li><a href="http://scanfcode.com/about/">About Us</a></li>
                  <li><Link to='/contact'>Contact us</Link></li>
                  <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                  <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                  <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                </ul>
              </div>
            </div>
            <hr/>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
             <a href="index.html"> Dudz</a>.
                </p>
              </div>
    
              <div class="col-md-4 col-sm-6 col-xs-12">
                <ul class="social-icons">
                  <li><a class="facebook" href="https://www.facebook.com/saadodin.busran"><i class="fa-brands fa-facebook"></i></a></li>
                  <li><a class="twitter" href="index.html"><i class="fa-brands fa-twitter"></i></a></li>
                  <li><a class="dribbble" href="index.html"><i class="fa-brands fa-dribbble"></i></a></li>
                  <li><a class="linkedin" href="index.html"><i class="fa-brands fa-linkedin"></i></a></li>   
                
                </ul>
              </div>
            </div>
          </div>
    </footer>
    );
}

export default Footer;
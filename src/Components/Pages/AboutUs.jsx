import React from 'react';
import "../../Syles/AboutUs.css";
import Logonav from '../logonav';
import Footer from '../footer';
// import 'bootstrap/dist/css/bootstrap.min.css';

import pic1 from '../../img/AboutUs/1_AboutUs_Landscape .jpg';
import pic2 from '../../img/AboutUs/2_AboutUs_Portrait.jpg';
import pic3 from '../../img/AboutUs/3_AboutUs_Portrait.jpg';
import pic4 from '../../img/AboutUs/4_AboutUs_Portrait.jpg';
import pic5 from '../../img/AboutUs/5_AboutUs_Portrait.jpg';
import pic6 from '../../img/AboutUs/6_AboutUs_Portrait.jpg';
import pic7 from '../../img/AboutUs/7_AboutUs_Portrait.jpg';
import pic8 from '../../img/AboutUs/8_AboutUs_Portrait.jpg';

const AboutUs = () => {
    return (
        <div className='AboutUsPage'>
            <Logonav></Logonav>
            <section className='aboutUsbg'>
                <section className='aboutUsInside'>
                <h4>ABOUT US!</h4>
                <br></br>
                <div className='aboutHeader'>
                <h5 className='specialH5'>Your IslandHopper Tour Expert
         Discover and Book your  
         island tours and adventure   
         activities.
         </h5>
         <br/>
         <button className='firstbtn btnfirst'>read more</button>
         </div>
         <br/><br/>
         <img className='headerimg' src={pic1}/>

         <br/><br/><br/>

        <div className='aUSecondSec'>
            <div>
          <h4>Who We Are </h4>
          <br></br>
          <p>    IslandHopper has been a 
          trusted provider of traveller 
          experiences and 
          sightseeing tours in the 
          world's most sought-after 
          location since 2010. Our 
          team of IslandHopper is 
          on the ground to show you 
          the natural wonder and 
          experience the adventures
          that you just can't miss. </p>
          <br/>
          <button className='firstbtn btnthird'>read more</button>
          </div>
          <img className='portrait' src={pic2}/>
        </div>

        <br/><br/><br/>

        <div className='aUSecondSec thridsec'>
        <img className='portrait' src={pic3}/>
            <div>
          <h4>What We Do</h4>
          <br></br>
          <p>Our company is the 
           perfect resources for 
          anyone looking to plan an 
          unforgettable 
          islandhopping adventure in 
          the Philippines. Whether 
          you're a solo traveller, a 
          couple on a romantic 
          getaway,  or a family 
          looking for a fun-filled 
          vacation, we've got 
          everything you need to 
          make your dream trip a 
          reality.</p>
          <br></br>
          <button className='firstbtn btnthird'>read more</button>
          </div>
          
        </div>

        <br/><br/><br/>

         <div className='auImages'>
         <img className='portrait gradient' src={pic4}/>
         <img className='portrait second gradient' src={pic5}/>
         <img className='portrait gradient' src={pic6}/>
         <img className='portrait second gradient' src={pic7}/>

         </div>

         <br/><br/><br/><br/>

        <div className='aUSecondSec thridsec h4special'>
        <img className='portrait' src={pic8}/>
            <div>
          <h4>Why You Should Go</h4>
          <br></br>
          <p>From pitch black volcanic
         to sand beaches, 
         IslandHopper is a visually 
         spectacular and 
         geologically intriguing part 
         of the country that features 
        many of IslandHopper most
        awe-inspiring destinations.</p>
          <br></br>
          <button className='firstbtn btnthird'>read more</button>
          </div>
          
        </div>

        
        


        </section>
            </section>
            
            <Footer></Footer>
            </div>
        
    );
};

export default AboutUs;
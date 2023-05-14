import React from "react";
import "../../Syles/ContactUs.css";
import Logonav from "../logonav";
import Footer from "../footer";

const ContactUs = () =>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    return(
        <>
        <Logonav></Logonav>
        <section className="bgContact">
        <section className="ContactUsSection">
        <div>
        <h5 className="ContactHeader">Contact us!</h5>
        <div className="frameContact">
        <div className="frame" dangerouslySetInnerHTML={{__html: '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfMN-S59VJkVDiMGbFqiH3YDKseb2b3Fn5O8GAmhempcyVWtA/viewform?embedded=true" width="800" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>'}}></div>
        </div>
        </div>

        </section>
        </section>
        <Footer></Footer>
        </>
    );
}

export default ContactUs;
import React from "react";
import { Link } from "react-router-dom";
import '../../Syles/IslandPages.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import WSPGallery from "../WSPGallery";
import Footer from "../footer";
import Logonav from "../logonav";



const IslandPage = ({title,address,contact,email,textNiSya,galleryImages,reviews}) =>{

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

    // const galleryImageS = [
    //     {
    //       img: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    //     },
    //     {
    //       img: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //     },
    //     {
    //       img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //     },
    //     {
    //       img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //     },
    //     {
    //       img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //     },
    //     {
    //       img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //     }
    //   ]

    //  title = "Astoria Palawan Resort";
    //  address = " Km.62, National Highway Barangay San Rafael, Puerto Princessa, Palawan Island 5300 Philippines "
    //  contact = " (082) 235 1234 |";
    //  email = " astoriapalawan@gmail.com";
    //  textNiSya = "Astoria Palawan Resort is a luxurious beachfront resort located in the municipality of San Rafael in the province of Palawan, Philippines. The resort offers guests a tropical paradise experience with its pristine beach, lush gardens, and world-class amenities. It features 40 well-appointed rooms and villas, each with its own private balcony or terrace overlooking either the sea or the gardens. The resort offers a range of activities and facilities, such as an outdoor swimming pool, a spa, a fitness center, water sports, and a variety of dining options. It is also an ideal location for weddings and other special events, with its scenic backdrop and dedicated event team. Overall, Astoria Palawan Resort is a top destination for travelers seeking a relaxing and indulgent getaway on one of the most beautiful islands in the world.";
    return(
       <>

        <Logonav></Logonav>
        <section className="sectionColor">
      
        <section className="islandParent">
            <div className="toTheTop">
            <h3>{title}</h3>
            <i class="fa-solid fa-location-dot"></i>
            <span>{address}</span>
            <br></br>
            <i class="fa-solid fa-phone"></i>
            <span>{contact}</span>
            <span> Visit hotel Website </span>
            <a href="#"><i class="fa-solid fa-square-arrow-up-right"></i></a>
            <span> | </span>
            <i class="fa-regular fa-envelope"></i>
            <span>{email}</span>
            </div>

            <div className="firstoutline">
            <section className="boxSection">
                <div className="boxBook">
                    <br></br>
                    <h3 className="h3firstSec">LET YOUR ADVENTURE BEGIN!</h3>
                    <br></br>
                    <h4>You want to relax and unwind on the Island?</h4>
                    <br></br>
                    <Link to="/booking">
                    <button className="firstButton"> Book Now </button></Link>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h4 className="h4firstSec">Contact accomodation for availablity</h4>
                    <h4 className="h4firstSec">there are similar hotel available</h4>
                    <br></br>
                    <button className="viewAllButton"> View All </button>
                </div>
            <WSPGallery galleryImages={galleryImages} ClassName="galleryWrap"></WSPGallery>
            </section>
            </div>

            <section className="secondSection">
                <h4>About</h4>
                <hr className="tophr"></hr>
                <section className="insideSection">
                    <div className="h4LeftSide">
                        <div className="rating">
                    <h5>4.5</h5>
                    <div className="excellent">
                        <span>Excellent</span>
                        <br/>
                        <i class="fa-solid fa-circle"></i>
                        <i class="fa-solid fa-circle"></i>
                        <i class="fa-solid fa-circle"></i>
                        <i class="fa-solid fa-circle"></i>
                        <i class="fa-solid fa-circle-half-stroke"></i>
                        <span> {reviews}</span>
                        </div>
                    
                    </div>
                    {/* leftSide */}
                <p className="paragrap">{textNiSya}</p>
                    </div>
                    {/* right Side */}
                    <section className="SectionRightSide">
                        
                        <h3 className="h3PerksTop">Proper Aminities</h3>
            
                            <div className="perks Aminities">

                            <li><i class="fa-solid fa-square-parking"></i>
                            <span> Free parking</span></li>

                            <li><i class="fa-solid fa-wifi"></i>
                            <span> Free WIFI</span></li>

                            
                            <li><br/><i class="fa-solid fa-water-ladder"></i>
                            <span> Pool</span></li>

                            <li><br/><i class="fa-solid fa-dumbbell"></i>
                            <span> Fitness Center with<hr/> Gym/Worhout Room</span></li>

                            
                            <li><br/><i class="fa-solid fa-bowl-food"></i>
                            <span> Free Food</span></li>

                            <li><br/><i class="fa-solid fa-water"></i>
                            <span> Water Park</span></li>

                            
                            <li> <br/><i class="fa-regular fa-star"></i>
                            <span>Entertainment staff</span></li>

                            <li> <br/><i class="fa-solid fa-child"></i>
                            <span> Kid stay free</span></li>
                        </div>

                        <h3 className="h3Perks">Room features</h3>

                        <div className="perks features">

                        <li><i class="fa-regular fa-snowflake"></i>
                            <span> Air conditioning</span></li>

                            <li><i class="fa-solid fa-dungeon"></i>
                            <span> Private balcony</span></li>

                            <li> <br/><i class="fa-solid fa-bell-concierge"></i>
                            <span> Room Services</span></li>

                            <li> <br/><i class="fa-solid fa-shield-heart"></i>
                            <span> Safe</span></li>

                            <li> <br/><i class="fa-solid fa-mug-hot"></i>
                            <span> Kitchenette</span></li>

                            <li> <br/><i class="fa-solid fa-fire-burner"></i>
                            <span> Microwave</span></li>

                            <li> <br/><i class="fa-solid fa-martini-glass"></i>
                            <span> Minibar</span></li>

                            <li> <br/><i class="fa-solid fa-tv"></i>
                            <span> Flatscreen TV</span></li>
                        </div>

                        <h3 className="h3Perks"> Room types</h3>

                        <div className="perks types">

                        <li><i class="fa-solid fa-dungeon"></i>
                            <span> Ocean View</span></li>

                            <li><i class="fa-solid fa-ban-smoking"></i>
                            <span> Non-smoking <hr/>rooms</span></li>

                            <li> <br/><i class="fa-solid fa-couch"></i>
                            <span> Suites</span></li>

                            <li> <br/><i class="fa-solid fa-couch"></i>
                            <span> Family rooms</span></li>

                        </div>
                            
                          
                    </section>
                 </section>
                 <hr className="belowhr"></hr>
                 <div className="lastpartParent">
                 <div>
                    <br/>   
                    <h5>Suggest edits to improve what we show.</h5>
                    <a href=""><u><h5>Imrove this visiting</h5></u></a>
                 </div>

                 <div>
                    <h6>Hotel Links</h6>
                    <a href="#"><i class="fa-solid fa-globe"></i>
                    <span> Visit hotel website </span>
                    <i class="fa-solid fa-square-arrow-up-right"></i></a>
                    <br/>
                    <a href="#"><i class="fa-solid fa-right-long"></i>
                    <span> Special offer: </span>
                    <span> Luxury All-inclusive Package </span></a>
                    <br/>
                    <a href="#"><i class="fa-solid fa-right-long"></i>
                    <span> Hotel deals </span>
                    <i class="fa-solid fa-square-arrow-up-right"></i></a>
                 </div>
                 </div>
            </section>

        </section>

        </section>
        <Footer></Footer>
        </>
    );
}

export default IslandPage;
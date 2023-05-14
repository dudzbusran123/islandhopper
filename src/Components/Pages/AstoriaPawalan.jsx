import React from 'react';
import Logonav from '../logonav';
import IslandPage from './IslandPages';
import Footer from '../footer';

import pic1 from '../../img/Islands/ASTORIA PICTURES/ASTORIA-1.jpg';
import pic2 from '../../img/Islands/ASTORIA PICTURES/ASTORIA-2.jpg';
import pic3 from '../../img/Islands/ASTORIA PICTURES/ASTORIA-3.jpg';
import pic4 from '../../img/Islands/ASTORIA PICTURES/ASTORIA-4.jpeg';
import pic5 from '../../img/Islands/ASTORIA PICTURES/ASTORIA-5.jpg';
import pic6 from '../../img/Islands/ASTORIA PICTURES/ASTORIA-6.jpg';

const AstoriaPawalan = () => {
   
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

    const galleryImageS = [
        {
          img: pic1
        },
        {
          img: pic2
        },
        {
          img: pic3
        },
        {
          img: pic4
        },
        {
          img: pic5
        },
        {
          img: pic6
        }
      ]

     const title = "Astoria Palawan Resort";
     const address = " Km.62, National Highway Barangay San Rafael, Puerto Princessa, Palawan Island 5300 Philippines "
     const contact = " (082) 235 1234 |";
     const email = " astoriapalawan@gmail.com";
     const textNiSya = "Astoria Palawan Resort is a luxurious beachfront resort located in the municipality of San Rafael in the province of Palawan, Philippines. The resort offers guests a tropical paradise experience with its pristine beach, lush gardens, and world-class amenities. It features 40 well-appointed rooms and villas, each with its own private balcony or terrace overlooking either the sea or the gardens. The resort offers a range of activities and facilities, such as an outdoor swimming pool, a spa, a fitness center, water sports, and a variety of dining options. It is also an ideal location for weddings and other special events, with its scenic backdrop and dedicated event team. Overall, Astoria Palawan Resort is a top destination for travelers seeking a relaxing and indulgent getaway on one of the most beautiful islands in the world. ";
     const reviews = "1,457 reviews";


    return (
        <div>

            <IslandPage
            galleryImages={galleryImageS}
            title={title}
            address={address}
            email={email}
            contact={contact}
            textNiSya={textNiSya}
            reviews={reviews}
            ></IslandPage>
            
        </div>
    );
};

export default AstoriaPawalan;
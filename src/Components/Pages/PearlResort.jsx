import React from 'react';

import IslandPage from './IslandPages';

import pic1 from '../../img/Islands/PEARL FARM/PEARL-1.jpg';
import pic2 from '../../img/Islands/PEARL FARM/PEARL-2.jpg';
import pic3 from '../../img/Islands/PEARL FARM/PEARL-3.jpg';
import pic4 from '../../img/Islands/PEARL FARM/PEARL-4.jpg';
import pic5 from '../../img/Islands/PEARL FARM/PEARL-5.jpeg';
import pic6 from '../../img/Islands/PEARL FARM/PEARL-6.jpg';


const PearlResort = () => {

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

     const title = "Pearl Farm Beach Resort";
     const address = " Brgy. Adecor Kaputian, Mindanao 8119 Philippines "
     const contact = " (082) 852 3657 |";
     const email = " pearlresort@gmail.com";
     const textNiSya = "Surrounded by pristine beaches, Pearl Farm Beach Resort offers an escape from the usual atmosphere of the city by taking you away from the dull monochromes of urban living and exposing you to the colorful cultures of Mindanao. Be greeted by the sand, sea, and sun as you unwind in your luxurious lodgings and signature houses on stilts. Your first stop is the iconic Parola, which was formerly where ancient mariners kept an eye out for their marine territory. 70 accommodations, made up of suites, executive villas, and cottages, are ready to welcome you. From high up in the mountains to the strong currents of the seas, be in awe with some of the artistic cultural distinctions of Mindanao's tribes projected in every room as National Artist Ar. Bobby Manosa patterned the resort to reflect the traditional structures of six Mindanaoan ethnic groups. Relax, unwind, and take the time to enjoy nature's beauty and Mindanao's grandeur at the only 5-star resort in Mindanao, Pearl Farm Beach Resort. Staying at Pearl Farm Beach Resort is also a feast, as we offer full-board buffet meals for breakfast, lunch, and dinner!";
     const reviews = "1,528 reviews";

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

export default PearlResort;
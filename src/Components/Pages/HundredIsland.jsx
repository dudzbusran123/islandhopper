import React from 'react';
import IslandPage from './IslandPages';

import pic1 from '../../img/Islands/Hundred island/HundredPic1.jpg';
import pic2 from '../../img/Islands/Hundred island/HundredPic2.jpg';
import pic3 from '../../img/Islands/Hundred island/HundredPic3.jpg';
import pic4 from '../../img/Islands/Hundred island/HundredPic4.jpg';
import pic5 from '../../img/Islands/Hundred island/HundredPic5.jpg';
import pic6 from '../../img/Islands/Hundred island/HundredPic6.jpg';

const HundredIsland = () => {

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

     const title = "Hundred Island";
     const address = " Alaminos City, Pangasinan "
     const contact = " (082) 452 3254 |";
     const email = " hundredisland@gmail.com";
     const textNiSya = " Hundred Islands is an archipelago in the Philippines consisting of 124 small islands and islets. It offers a stunning view of clear blue waters, pristine beaches, and lush vegetation, making it a popular destination for island hopping, snorkeling, swimming, and kayaking. The islands also hold cultural significance for the local communities, with ancient burial sites and rock formations that visitors can explore. Hundred Islands is easily accessible from Manila, making it a convenient destination for a weekend getaway or a day trip, with various accommodations and tour packages available. Overall, it is a must-visit destination for travelers who want to experience the natural beauty, culture, and adventure of the Philippines.";
     const reviews = "1,340 reviews";

    return (
        <div>
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
        </div>
    );
};

export default HundredIsland;
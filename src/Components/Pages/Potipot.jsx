import React from 'react';

import IslandPage from './IslandPages';

import pic1 from '../../img/Islands/Potipot pictures/Potipot1.jpg';
import pic2 from '../../img/Islands/Potipot pictures/Potipot2.jpg';
import pic3 from '../../img/Islands/Potipot pictures/Potipot3.jpg';
import pic4 from '../../img/Islands/Potipot pictures/Potipot4.jpg';
import pic5 from '../../img/Islands/Potipot pictures/Potipot5.jpg';
import pic6 from '../../img/Islands/Potipot pictures/Potipot6.jpg';

const Potipot = () => {
    
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

     const title = "Potipot Island";
     const address = " Log House, Candelaria School of Fisheries Rd, Candelaria Zambales "
     const contact = " (082) 652 1254 |";
     const email = " potipotisland@gmail.com";
     const textNiSya = "Get ready to discover another stunning island in the Philippines! Potipot Island is a perfect summer destination for everyone. This breathtaking beach bumming paradise will surely make your getaway with family and friends one for the books.It is no surprise that the Philippines has thousands of islands around. And one of these is the astounding Potipot Island in Zambales. So, plan your trip properly and spend some quality time with your loved ones. Potipot Island is a secluded islet in Uacon, Candelaria, Zambales. It has become one of the most popular beach destinations over the years because of its creamy white sand and crystal clear waters. Truly, you’ll experience a relaxing quick weekend getaway on this gorgeous island.";
     const reviews = "1,234 reviews";


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

export default Potipot;
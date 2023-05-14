import React from 'react';

import IslandPage from './IslandPages';

import pic1 from '../../img/Islands/Nay Palad Resort/1_siargao.jpg';
import pic2 from '../../img/Islands/Nay Palad Resort/2_siargao.jpg';
import pic3 from '../../img/Islands/Nay Palad Resort/3_siargao.jpg';
import pic4 from '../../img/Islands/Nay Palad Resort/4_siargao.jpg';
import pic5 from '../../img/Islands/Nay Palad Resort/5_siargao.jpg';
import pic6 from '../../img/Islands/Nay Palad Resort/7_siargao.jpg';

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

 const title = "NAY PALAD HIDEAWAY Island";
 const address = " Malinao | General Luna, Siargao Island, Surigao del Norte Province, Mindanao, Philippines "
 const contact = " (082) 452 3254 |";
 const email = " naypaladhideway@gmail.com";
 const textNiSya = " As you pass through the gates of NAY PALAD HIDEAWAY, the weight of the real world begins to lift from your shoulders. You've arrived at a state of mind where shoes are optional, and worries are left behind. Here, there's no need for a wallet or signing checks. Every desire you may have, from mouth-watering delicacies to refreshing drinks and relaxing massages, is easily accessible. And if adventure is what you seek, we're here to make it happen. All we ask is that you treat this palm-fringed paradise as your own home, and allow us to bring your dreams to life.";
const reviews = "1,647 reviews";

const Siargao = () => {
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

export default Siargao;
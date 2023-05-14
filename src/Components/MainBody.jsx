import React from "react";
import '../Syles/MainBody.css';
import '../Syles/CardImage.css';
import CardImage from "./CardImage";
import siargao from '../img/NaySiarigao.jpg';
import hundred from '../img/HundredIsland.png';
import palawan from '../img/AstoriaPalawan.png';
import potipot from '../img/PotipotIsland.png';
import pearl from '../img/PearlFarm.png';
import { Link } from "react-router-dom";

const MainBody = () =>{


    return(
        <section className="parentMainBody">
            <div className="headerMainBody">
               <h2 className="HeaderSection">Island Destinations</h2>
            </div>
     <section className="mainBody">
        {/* Siargao */}
    <Link to='/siargao'><div className="siargaoCard">
     <CardImage 
     imgSrc={siargao}
     title="NAY PALAD HIDEAWAY"
     location= "Located at Mindanao"></CardImage>
     </div></Link>

     {/* HundredIsland */}
     <Link to='/hundred'><div className="hundredCard">
     <CardImage 
     imgSrc={hundred}
     title="Hundred Island"
     location= "Located at Luzon"></CardImage>
     </div>
     </Link>

     {/* Palawan */}

     <Link to='/palawan'><div className="palawanCard">
     <CardImage 
     imgSrc={palawan}
     title="Astoria Palawan Resort"
     location= "Located at Visayas"></CardImage>
     </div></Link>

     {/* Potipot */}

     <Link to='/potipot'><div className="potipotCard">
     <CardImage 
     imgSrc={potipot}
     title="Potipot Resort"
     location= "Located at Luzon"></CardImage>
     </div></Link>

     {/* Pearl */}

     <Link to='/pearl'><div className="pearlCard">
     <CardImage 
     imgSrc={pearl}
     title="Pearl Resort"
     location= "Located at Mindanao"></CardImage>
     </div></Link>
     
     </section>
     
     </section>

    );
}

export default MainBody;
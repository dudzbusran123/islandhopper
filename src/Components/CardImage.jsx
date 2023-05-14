import React from "react";
import '../Syles/CardImage.css';

// import siargao from '../img/NaySiarigao.jpg';
const CardImage = ({imgSrc,title,location}) =>{

    return(
        <div className="siargaoCard">
        <div class="card">
        <div class="card-info">
        <div class="card-avatar"></div>
        <img className="imageHolder" src={imgSrc}></img>
        <div class="card-title">
            <h4>{title}</h4>
        </div>
        {/* <div class="card-subtitle">CEO &amp; Co-Founder</div> */}
        </div>
        <ul class="card-social">
       <h5>{location}</h5>

  </ul>
</div>

</div>




    );

}

export default CardImage;
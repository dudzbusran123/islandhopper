import React from "react";
import '../Syles/form.css';
import Logonav from "./logonav";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

function FormHtml() {

   const navigate = useNavigate()

  return (
    <div className="formbg">
    <Logonav></Logonav>
  
  <form action="bookProcess.php" method="post">
    <h1>Booking Form</h1>
    <fieldset>
      
        
        <div class="pairLeft names">
          <label for="name">Student Name:</label>
          <div class="nameStyle">
            <input type="text" id="firstName" name="firstName" placeholder="First name"  />
            <input type="text" id="lastName" name="lastName" placeholder="Last name"  />
            <input type="text" id="middleName" name="middleName" placeholder="Middle name"  />
          </div>
        </div>
        <div class="flexer">
          <div class="leftSide">
        
        <div class="pair">
          <label for="gender">Gender :</label>
          <div>
            <input type="radio" name="gender" value="Male"/>&nbsp;
            <label for="male">Male</label>&nbsp;&nbsp;

            <input type="radio" name="gender" value="Female"/>&nbsp;
            <label for="female">Female</label>
          </div>
        </div>
        <div class="pairLeft">
          <label for="citizen">Nationality:</label>
          <select id="citizen" name="citizen">
            <option value="None">-Nationality-</option>
            <option value="Filipino">Filipino</option>
            <option value="American">American</option>
            <option value="Korean">Korean</option>
          </select>
        </div>
        <div class="pairLeft">
          <label for="birthDate">Birth Date :</label>
          <input type="date" id="birthDate" name="birthDate"></input>
        </div>
        <div class="pairLeft">
          <label for="religion">Religion:</label>
          <select id="religion" name="religion"  >
            <option value="">-Religion-</option>
            <option value="Muslim">Muslim</option>
            <option value="Christian">Christian</option>
            <option value="Atheist">Atheist</option>
          </select>
        </div>
        <div class="pairLeft">
          <label for="status">Status :</label>
          <select id="status" name="status"  >
            <option value="">-Civil Status-</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Widowed">Widowed</option>
          </select>
        </div>

        <div class="pairLeft">
          <label for="address">Address :</label>
          <textarea id="address" name="address"  ></textarea>
        </div>
        <div class="pairOfFour">
        <div class="pairOfFourInside">
          <label for="from">From :</label>
          <select id="from" name="from"  >
            <option value="">-From-</option>
            <option value="Luzon">Luzon</option>
            <option value="Visayas">Visayas</option>
            <option value="Mindanao">Mindanao</option>
          </select>
        </div>

        <div class="pairOfFourInside">
          <label for="destination">Destination :</label>
          <select id="destination" name="goingTo" >
            <option value="">-To-</option>
            <option value="Nay palad hideway">Nay palad hideway</option>
            <option value="Pearl Resort">Pearl Resort</option>
            <option value="Astoria Palawan Resort">Astoria Palawan Resort</option>
            <option value="Potipot Resort">Potipot Resort</option>
            <option value="Hunred Island">Hunred Island</option>
          </select>
        </div>

        
        
      </div>


      </div>



      <div class="rightSide">
      
        <div class="pair">
          <label for="zipCode">Zip Code :</label>
          <input type="text" name="zipCode"  id="zipCode"/>
        </div>
        
        <div class="pair">
          <label for="emerHolderName">Emergency Holder Fullname :</label>
          <input type="text" name="emerHolderName" id="emerHolderName" />
        </div>
        <div class="pair">
          <label for="emerHolderNumber">Emergency Holder Contact Number :</label>
          <input type="text" name="emerHolderNumber" id="emerHolderNumber" ></input>
        </div>
        <div class="pair">
          <label for="mobile">Mobile Number:</label>
          <input type="text" name="mobile" />
        </div>
        <div class="pair">
          <label for="email">Email :</label>
          <input type="email" name="email" id="email" />
        </div>
        <div class="pair">
          <label for="accomodation">Accomodation :</label>
          <textarea id="accomodation" name="accomodation" ></textarea>
        </div>

        <button type="submit" onClick={() => navigate('/paywall')}> Book </button>
      </div>
    </div>
    </fieldset>
  </form>
  <Footer></Footer>
  </div>
  );
}

export default FormHtml;
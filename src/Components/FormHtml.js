import React from 'react';

import '../Syles/form.css';
import Logonav from "./logonav";
import Footer from "./footer";
import Paywall from './Pages/paywall';




const FormHtml = () => {

//    const navigate = useNavigate()
//   //  const { setFormData } = useContext(FormDataContext);




//   const handleNextPage = (event) => {


//   const firstName = document.getElementById('firstName').value;
//   const lastName = document.getElementById('lastName').value;
//   const middleName = document.getElementById('middleName').value;
//   const male = document.getElementById('male').value;
//   const female = document.getElementById('female').value;
//   const citizen = document.getElementById('citizen').value;
//   const birthDate = document.getElementById('birthDate').value;
//   const religion = document.getElementById('religion').value;
//   const status = document.getElementById('status').value;
//   const address = document.getElementById('address').value;
//   const from = document.getElementById('from').value;
//   const destination = document.getElementById('destination').value;
//   const zipCode = document.getElementById('zipCode').value;
//   const emerHolderName = document.getElementById('emerHolderName').value;
//   const mobile = document.getElementById('mobile').value;
//   const email = document.getElementById('email').value;
//   const accomodation = document.getElementById('accomodation').value;


//   const setFormData = {
//     firstName,
//     lastName,
//     middleName,
//     male,
//     female,
//     citizen,
//     birthDate,
//     religion,
//     status,
//     address,
//     from,
//     destination,
//     zipCode,
//     emerHolderName,
//     mobile,
//     email,
//     accomodation
//   };

//   console.log(firstName)

//   //  navigate('/paywaller');
//    this.props.history.push({
//     pathname: '/paywaller',
//       state: setFormData // your data array of objects
//   })

// };





  return (
    <div className="formbg">
    <Logonav></Logonav>
  
  <form action='bookProcess.php' method='POST'>
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
            <input type="radio" name="gender" value="Male" id='male' />&nbsp;
            <label for="male">Male</label>&nbsp;&nbsp;

            <input type="radio" name="gender" value="Female" id='female'/>&nbsp;
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
          <select id="destination" name="destination" >
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
          <input type="text" name="mobile" id='mobile' />
        </div>
        <div class="pair">
          <label for="email">Email :</label>
          <input type="email" name="email" id="email" />
        </div>
        <div class="pair">
          <label for="accomodation">Accomodation :</label>
          <textarea id="accomodation" name="accomodation" ></textarea>
          
        </div>
        
        {/* onClick={() => navigate('/paywaller')} */}
        {/* <button type="submit"> Book </button> */}
        <Paywall className = "payWall"></Paywall>
      </div>
    </div>
    </fieldset>
  </form>
  <Footer></Footer>
  </div>
  );
}

export default FormHtml;
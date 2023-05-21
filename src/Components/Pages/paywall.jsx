import React from 'react';
import '../../Syles/paywall.css';
import Footer from '../footer';
import Logonav from '../logonav';
import pic1 from '../../img/carcard.jpg';
import FormDataContext from '../FormDataContext';


const Paywall = () => {




  // const firstNamepay = document.getElementById('firstNamepay').value;
  // const lastNamepay = document.getElementById('lastNamepay').value;
  // const ccNumber = document.getElementById('ccNumber').value;
  // const cvc = document.getElementById('cvc').value;
  // const expDate = document.getElementById('expDate').value;

  // const combineData ={
  //   ...formData,
  //   firstNamepay,
  //   lastNamepay,
  //   ccNumber,
  //   cvc,
  //   expDate
  // }
    




    return (
        <div className='paywallBg'>

            {/* <Logonav></Logonav> */}
            {/* <hr className='hrisiya'/> */}
            <h1 className='headerpay'>Payment details</h1>
  
      {/* <input type='hidden' name='firstname' value={}></input> */}

      

      <div className="payPair">
      <label for="name">Card Holder Name:</label>
      <div className="chName">
      <input type="text" id="firstNamepay" name="firstNamepay" placeholder="First Name" className="form-control"/>
      <input type="text" id="lastNamepay" name="lastNamepay" placeholder="Last Name"
      className="form-control"/>
      </div>
      </div>

      <div className="chName">
      <div className="payPair">
      <label for="ccNumber">Credit Card Number:</label>&nbsp;
      <br/>
      <img className='cardsImg' src={pic1}/>
      <br/> <br/>
      <input type="number" id="ccNumber" name="ccNumber" placeholder="1234 1234 1234 1234"
      className="ccc"/>
      </div>


      <div className="payPair">
      <label for="cvc">CVC:</label>&nbsp;
      <input type="number" id="cvc" name="cvc" placeholder="123"
      className="control"/>
      </div>
      </div>

      {/* <div className="payPair"> */}
     <div className="date">
      <label for="expDate" className='expDate'>Expire Date:</label>
      
      <input type="month" id="expDate" name="expDate"/>
      
    </div>
    {/* </div> */}

    <div className="check">
    <div className="payPair">
    <input className="form-check-input mt-0" type="checkbox"/> <span>I agree to</span> <a href="#">Term & conditions</a>
    </div>
    </div>

    <button  type="submit" className='paywallButton'>Pay</button>


    
  {/* <Footer></Footer> */}
        </div>
    );
};

export default Paywall;
import React from 'react';
import '../../Syles/paywall.css';
import Footer from '../footer';
import Logonav from '../logonav';
import pic1 from '../../img/carcard.jpg';

const Paywall = () => {
    return (
        <div className='paywallBg'>

            <Logonav></Logonav>
            <h1 className='headerpay'>Payment details</h1>
  <form action="paywall.php" method="post">
    <fieldset>

      

      <div className="payPair">
      <label for="name">Card Holder Name:</label>
      <div className="chName">
      <input type="text" id="firstName" name="firstName" placeholder="First Name" className="form-control"/>
      <input type="text" id="lastName" name="lastName" placeholder="Last Name"
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


    </fieldset>
  </form>
  <Footer></Footer>
        </div>
    );
};

export default Paywall;
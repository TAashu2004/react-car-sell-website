import React, { useState } from 'react';
import"./CarForm.css";
import bgLight from './img/bg-light.jpg';
import logo from'./img/car-logo.png'

function CarForm() {
  const [formData, setFormData] = useState({
    model: '',
    variant: '',
    year: '',
    kilometers: '',
    ownership: '',
    registration: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission (e.g., send data to API)
      console.log('Form data submitted:', formData);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.model) {
      newErrors.model = 'Please select a model';
    }
    if (!formData.variant) {
      newErrors.variant = 'Please select a variant';
    }
    if (!formData.year) {
      newErrors.year = 'Please select a year';
    }
    if (!formData.kilometers) {
      newErrors.kilometers = 'Please enter kilometers driven';
    } else if (isNaN(formData.kilometers) || formData.kilometers <= 0) {
      newErrors.kilometers = 'Please enter a valid number';
    }
    if (!formData.ownership) {
      newErrors.ownership = 'Please select ownership';
    }
    if (!formData.registration) {
      newErrors.registration = 'Please enter registration number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  return (
    <>
    <div className="row" style={{ backgroundImage: `url(${bgLight})` }}>
        <center><h1 style={{color:"white"}}>Sell Your <span style={{color:"red"}}>Car</span></h1></center>
        <center><h6 style={{color:"red"}}>Please fill the form below and out team will contact you within 24 hours.</h6></center>
    <div className="car-form-container">
      <h2 className="form-title" style={{color:"red"}}>Add car details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="model" style={{color:"red"}}>Select Model</label>
          <select
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className={errors.model ? 'error' : ''}
          >
            <option value="">Select Model</option>
            <option value="model1">BMW</option>
            <option value="model2">AUDI</option>
            <option value="model2">MERCEDES</option>
            <option value="model2">TOYOTA</option>
            <option value="model2">MAHINDRA</option>
            <option value="model2">TATA</option>
            <option value="model2">FERRARI</option>
            <option value="model2">LAMBORGHINI</option>
            <option value="model2">LAND ROVER</option>
            <option value="model2">Other</option>
          </select>
          {errors.model && <span className="error-message">{errors.model}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="variant" style={{color:"red"}}>Select Variant</label>
          <select
            id="variant"
            name="variant"
            value={formData.variant}
            onChange={handleChange}
            className={errors.variant ? 'error' : ''}
          >
            <option value="">Select Variant</option>
            <option value="variant1">4X4</option>
            <option value="variant2">4X2</option>
            <option value="variant2">2 wheel drive</option>
            <option value="variant2">All wheel drive</option>
            <option value="variant2">Other</option>
          </select>
          {errors.variant && <span className="error-message">{errors.variant}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="year" style={{color:"red"}}>Select Year</label>
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className={errors.year ? 'error' : ''}
          >
            <option value="">Select Year</option>
            <option value="2020">2016</option>
            <option value="2021">2017</option>
            <option value="2020">2018</option>
            <option value="2020">2019</option>
            <option value="2020">2020</option>
            <option value="2020">2021</option>
            <option value="2020">2022</option>
            <option value="2020">2023</option>
            <option value="2020">2024</option>
          </select>
          {errors.year && <span className="error-message">{errors.year}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="kilometers" style={{color:"red"}}>Kilometers Driven</label>
          <input
            type="text"
            id="kilometers"
            name="kilometers"
            value={formData.kilometers}
            onChange={handleChange}
            className={errors.kilometers ? 'error' : ''}
          />
          {errors.kilometers && <span className="error-message">{errors.kilometers}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="ownership" style={{color:"red"}}>Select Ownership</label>
          <select
            id="ownership"
            name="ownership"
            value={formData.ownership}
            onChange={handleChange}
            className={errors.ownership ? 'error' : ''}
          >
            <option value="">Select Ownership</option>
            <option value="first">First Owner</option>
            <option value="second">Second Owner</option>
          </select>
          {errors.ownership && <span className="error-message">{errors.ownership}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="registration" style={{color:"red"}}>Registration Number</label>
          <input
            type="text"
            id="registration"
            name="registration"
            value={formData.registration}
            onChange={handleChange}
            className={errors.registration ? 'error' : ''}
          />
          {errors.registration && <span className="error-message">{errors.registration}</span>}
        </div>

        <button type="submit" className="submit-button">SUBMIT</button>
      </form>
    </div>
    </div>


    <div className='row' style={{background:"black"}}>
        <center><h1 style={{color:"white"}}>How it <span style={{color:"red"}}>Works</span></h1></center>
        <div className="col-lg-4">
        <div class="card" style={{width: "18rem"}}>
        <i class="fa-solid fa-square-check" style={{color: "#000000",fontSize:"80px",marginTop:"20px",marginLeft:"111px"}}></i>
        <div class="card-body">
          <center>
          <h4 style={{color:"red"}}>Verify the Details</h4>
        <p class="card-text">1st step in this process when you enter your car details then our team firstly check details whether they are genume or not.</p></center>
        </div>
        </div>
        </div>


        <div className="col-lg-4">
        <div class="card" style={{width: "18rem"}}>
        <i class="fa-solid fa-handshake" style={{color: "#000000",fontSize:"80px",marginTop:"20px",marginLeft:"100px"}}></i>
        <div class="card-body">
          <center>
          <h4 style={{color:"red"}}>Accept Your Offer</h4>
        <p class="card-text">2nd step in this process is after checking details if they are genune and have a great deal we accept your offer.</p></center>
        </div>
        </div>
        </div>


        <div className="col-lg-4">
        <div class="card" style={{width: "18rem"}}>
        <i class="fa-solid fa-calendar" style={{color: "#000000",fontSize:"80px",marginTop:"20px",marginLeft:"111px"}}></i>
        <div class="card-body">
          <center>
          <h4 style={{color:"red"}}>Shedule Appointment</h4>
        <p class="card-text">After everything is done our team get in touch with you through call and shedule a appointment for further discussion.</p></center>
        </div>
        </div>
        </div>
    </div>



    <div className='row' style={{background:"black"}}>
<div className="container">
      <div className="logo">
        <div className="fc"><img src={logo} style={{width:"150px"}}></img></div>
        <div className="fusion-cars">Wheels&Deals</div>
      </div>
      <div className="contact">
        <div className="call-us">
          <div className="call-us-title">Call Us On (1)</div>
          <div className="call-us-number">+91 9283664788</div>
        </div>
        <div className="call-us">
          <div className="call-us-title">Call Us On (2)</div>
          <div className="call-us-number">+91 7848838234</div>
        </div>
      </div>
      <div className="info">
        <div className="opening-hours">
          <div className="info-title">OPENING HOURS:</div>
          <div className="info-content">Mon - Sun: 10am - 8pm</div>
        </div>
        <div className="useful-links">
          <div className="info-title">USEFUL LINKS</div>
          <div className="info-content">
            <a href='' style={{textDecoration:"none",color:"red"}}><div> <i class="fa-solid fa-envelope" style={{color:"#f20707"}}></i> Wheels&Dealshp@gmail.com</div></a>
            <a href='https://chat.whatsapp.com/BjPVZ8g8pSPAEBYdtVClNg' style={{color:"green"}}><div> <i class="fa-brands fa-whatsapp" style={{color:"#0fe63a"}}></i> Whatsapp Group</div></a>
            <a href='https://t.me/+UQ1u1xDLVLszZDFl' style={{color:"skyblue"}}><div> <i class="fa-brands fa-telegram" style={{color: "#02cff7"}}></i> Telegram Group</div></a>
          </div>
        </div>
        <div className="our-info">
          <div className="info-title">OUR INFO</div>
          <div className="info-content">
            <div>► About Us</div>
            <div>► Collections</div>
            <div>► Showrooms</div>
          </div>
        </div>
        <div className="address">
          <div className="info-title">Address</div>
          <div className="info-content">
            ►A-99/100, Bandhol near
            <br />
            Talwara, Himachal Pradesh, 176502
          </div>
        </div>
      </div>
      <div
  className="map-button"
  onClick={() => {
    window.open(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8054.58243921248!2d75.9805587261678!3d31.919236131322766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b135b94c4d079%3A0xcbfdd80ebe3b4ccb!2sBandhol%2C%20Himachal%20Pradesh%20176502!5e0!3m2!1sen!2sin!4v1726989919316!5m2!1sen!2sin',
      '_blank'
    );
  }}
>
  <div className="map-icon">
    <i class="fa-solid fa-location-dot" style={{ color: "#0f0f0f", fontSize: "30px" }} />
  </div>
  <div className="map-text">Wheels&Deals On Map</div>
</div>
      <div className="footer">
        <div className="copyright">© 2024 Wheels&Deals.com all rights reserved.</div>
        <div className="powered-by">Powered By Aashish Thakur</div>
        <div className="social-media">
          <div className="social-icon">
          <a href="https://www.facebook.com/rajput.aashish.359?mibextid=ZbWKwL"><i class="fa-brands fa-square-facebook fa-bounce" style={{color: "#e70808",fontSize:"50px"}}></i></a>
          </div>
          <div className="social-icon">
          <a href="https://www.instagram.com/aashish_thakur_oo8?igsh=MnoyN2wyYWZ0YjR2"><i class="fa-brands fa-square-instagram fa-bounce" style={{color:"#f20707",fontSize:"50px",marginLeft:"10px",marginRight:"10px"}}></i></a>
          </div>
          <div className="social-icon">
          <a href="https://x.com/Aashish50551404?t=974xpMYTP3HkP6uvJnRmAw&s=08"><i class="fa-brands fa-square-twitter fa-bounce" style={{color: "#ef0606",fontSize:"50px"}}></i></a>
          </div>
        </div>
      </div>
    </div>
</div>
    </>
  );
};


export default CarForm;

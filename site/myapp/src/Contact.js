import React, { useState } from "react";
import './Contact.css'
import bgLight from './img/bg-light.jpg';
import logo from'./img/car-logo.png'
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!message) {
      errors.message = "Message is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", { name, email, message });
    }
  };

  return (
    <>
      <div className="row" style={{ backgroundImage: `url(${bgLight})` }}>
        <div className="header">
          <h6 style={{ color: "red" }}>CONTACT US</h6>
          <h2 style={{ color: "white", fontSize:"60px" }}>GET IN TOUCH</h2>
        </div>



        <div className="col-lg-6">
          <div className="form-container" style={{marginTop:"10px", marginLeft:"10px"}}>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label style={{ color: "white",}} htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  style={{ backgroundColor: "black", color: "white", border: "1px solid red",marginTop:"15px" }}
                />
                {errors.name && <div className="invalid-feedback" style={{ color: "red" }}>{errors.name}</div>}
              </div>
              <div className="form-group">
                <label style={{ color: "white", marginTop:"20px" }} htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  style={{ backgroundColor: "black", color: "white", border: "1px solid red",marginTop:"15px" }}
                />
                {errors.email && <div className="invalid-feedback" style={{ color: "red" }}>{errors.email}</div>}
              </div>
              <div className="form-group">
                <label style={{ color: "white",marginTop:"20px" }} htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className={`form-control ${errors.message ? "is-invalid" : ""}`}
                  style={{ backgroundColor: "black", color: "white", border: "1px solid red",marginTop:"20px" }}
                />
                {errors.message && <div className="invalid-feedback" style={{ color: "red" }}>{errors.message}</div>}
              </div>
              <button type="submit" className="btn" style={{ backgroundColor: "red", color: "white", border: "none", padding: "10px 20px" }}>Send Message</button>
            </form>
          </div>
        </div>


        <div className="col-lg-6" style={{marginTop:"55px", padding: 0,}}>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%'}}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.490230905166!2d75.98297412542283!3d31.920445274033362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b135b94c4d079%3A0xcbfdd80ebe3b4ccb!2sBandhol%2C%20Himachal%20Pradesh%20176502!5e0!3m2!1sen!2sin!4v1727002971670!5m2!1sen!2sin" 
      frameBorder="0" 
      style={{position: 'absolute', top: 0, left: 30, width: '88%', height: '100%'}}
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</div>
      </div>

      <div className="row" style={{background:"black"}}>

        <div className="col-lg-3">
        <div class="card" style={{width: "18rem"}}>
        <i class="fa-solid fa-location-dot" style={{color: "#000000",fontSize:"80px",marginTop:"20px",marginLeft:"111px"}}></i>
        <div class="card-body">
          <center>
          <h4 style={{color:"red"}}>Showroom Address</h4>
        <p class="card-text">►A-99/100, Bandhol near Talwara, Himachal Pradesh, 176502</p></center>
        </div>
        </div>
        </div>


        <div className="col-lg-3">
        <div class="card" style={{width: "18rem"}}>
        <i class="fa-solid fa-phone" style={{color: "#000000",fontSize:"80px",marginTop:"20px",marginLeft:"100px"}}></i>
        <div class="card-body">
          <center>
          <h4 style={{color:"red"}}>Call Us</h4>
        <p class="card-text">+91 9283664788  <br></br>+91 7848838234</p></center>
        </div>
        </div>
        </div>


        <div className="col-lg-3">
        <div class="card" style={{width: "18rem"}}>
        <i class="fa-solid fa-envelope" style={{color: "#000000",fontSize:"80px",marginTop:"20px",marginLeft:"100px"}}></i>
        <div class="card-body">
          <center>
          <h4 style={{color:"red"}}>Mail Us</h4>
        <p class="card-text" style={{marginBottom:"28px"}}>Wheels&Dealshp@gmail.com</p></center>
        </div>
        </div>
        </div>


        <div className="col-lg-3">
        <div class="card" style={{width: "18rem"}}>
        <i class="fa-solid fa-clock" style={{color: "#000000",fontSize:"80px",marginTop:"20px",marginLeft:"100px"}}></i>
        <div class="card-body">
          <center>
          <h4 style={{color:"red"}}>Timings</h4>
        <p class="card-text">Mon-Sun:<br></br>10am-8pm</p></center>
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
  )
}

export default Contact;
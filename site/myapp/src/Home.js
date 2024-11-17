import React, { useState, useEffect } from 'react';
import bgLight from './img/bg-light.jpg';
import bg from './img/bg.jpg';
import img1 from'./img/car1.jpg';
import front from'./img/front.jpg';
import logo from'./img/car-logo.png'
import delivery from'./img/delivery.jpg';
import {NavLink} from "react-router-dom";
import './Home.css';

function App() {
  const [heroBg, setHeroBg] = useState(bgLight);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroBg(bgLight);
      setTimeout(() => {
        setHeroBg(bg);
      }, 1000);
    }, 2200);

    return () => clearInterval(intervalId);
  }, []);

  return (<>
    <div className='row'>
      <div className='col-lg-12'>
        <div className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
          <div className="text">
            <h4>Best, Crazy and</h4>
            <h4>Budget-Friendly<br></br> Cars For Buying At</h4>
            <h1><span>Wheels & Deals</span></h1>
            <p>Real Poise, Real Power, Real Perfomance.</p>
            <button><NavLink to="/Buy"><i className='fa fa-fw fa-tag'></i><h2>Buy Cars</h2></NavLink></button>
          </div>
         <div>
         </div>
        </div>
      </div>
    </div>


    <div className='row' style={{backgroundColor:"black"}}>
    <section className="services" id="services">
       <div className='head'><h1>Our Services</h1></div>
      <div className="box-container">
        <div className="box">
        <i className="fas fa-car"style={{color:"#fcfcfd"}}></i>
          <h3>Car Selling</h3>
          <p>Best deals & best cars.</p>
        </div>
        <div className="box">
        <i className="fas fa-tools"style={{color: "#fcfcfd"}}></i>
          <h3>Parts Repair</h3>
          <p>Repairing of car parts at best & affordable cost.</p>
        </div>
        <div className="box">
        <i className="fas fa-car-crash"style={{color: "#fcfcfd"}}></i>
          <h3>Car Insurance</h3>
          <p>Get car insurance at best rate.</p>
        </div>
        <div className="box">
        <i className="fas fa-car-battery"style={{color: "#fcfcfd"}}></i>
          <h3>Battery Replacement</h3>
          <p>Free battery replacement for 2 years.</p>
        </div>
        <div className="box">
        <i className="fas fa-gas-pump"style={{color: "#fcfcfd"}}></i>
          <h3>Oil Change</h3>
          <p>Free oil change for 2 years.</p>
        </div>
        <div className="box">
        <i className="fas fa-headset"style={{color:"#fcfcfd"}}></i>
          <h3>24/7 Support</h3>
          <p>Get service support anytime, anywhere.</p>
        </div>
      </div>
    </section>
    </div>

    <div className='row' style={{ backgroundColor: "black",paddingLeft:"25px" }}>
  <div className='head2' style={{textAlign:"center"}}>
    <h5 style={{color:"white"}}>News/Blogs</h5>
    <h1 style={{color:"red",fontSize:"80px"}}>Our Latest Updates</h1>
  </div>
  <div className='col-lg-4'>
    <div class="card" style={{ width: "25rem" }}>
      <img src={img1}  style={{height:"250px"}}class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Aug 4,2024</h5>
        <p class="card-text">A new car added in our inventory on Aug 4,2024. Click on the button below to know.</p>
        <div className='btn'>
          <a href="#">
            <button style={{
              backgroundColor: 'red',
              color: 'black',
              border: 'none',
              marginLeft:'80px',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }} 
            onMouseOver={(e) => e.target.style.boxShadow = '0 0 10px red'}
            onMouseOut={(e) => e.target.style.boxShadow = 'none'}>
              Know More
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className='col-lg-4'>
    <div class="card" style={{ width: "25rem",height:"28rem" }}>
      <img src={front} style={{height:"220px"}}class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">June 26,2024</h5>
        <p class="card-text">We are going to open a new branch in Chandigarh Sector-17 on June 26,2024. Click on button to know . </p>
        <div className='btn'>
          <a href="#">
            <button style={{
              backgroundColor: 'red',
              color: 'black',
              border: 'none',
              marginLeft:'80px',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }} 
            onMouseOver={(e) => e.target.style.boxShadow = '0 0 10px red'}
            onMouseOut={(e) => e.target.style.boxShadow = 'none'}>
              Know More
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className='col-lg-4'>
    <div class="card" style={{ width: "25rem" }}>
      <img src={delivery} style={{height:"250px"}}class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Sep 19,2024</h5>
        <p class="card-text">A new car is delivred to the customer on September 19,2024 Click on the button below to know.</p>
        <div className='btn'>
          <a href="#">
            <button style={{
              backgroundColor: 'red',
              color: 'black',
              border: 'none',
              marginLeft:'80px',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }} 
            onMouseOver={(e) => e.target.style.boxShadow = '0 0 10px red'}
            onMouseOut={(e) => e.target.style.boxShadow = 'none'}>
              Know More
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>




<div className='row' style={{backgroundColor:"black"}}>
<center><h1 style={{color:"red"}}>Our Reviews</h1></center>
<section className="testimonials" style={{height:"520px",overflowY:"scroll"}}>
          <center><h1 style={{color:"red"}}>What Our customer Say</h1></center>
          <div className="testimonial">
            <img src="https://i.pinimg.com/736x/0a/18/62/0a186291ec70047bca80939f8f01f6bd.jpg" alt="Client Image" />
            <p>"Wheels&Deals is one of the best and trusted place in Himachal to buy and sell your car.Excellent treatment,transparency i strongly recommend."</p>
            <span>- Rajesh</span>
          </div>
          <div className="testimonial">
            <img src="https://thumbs.dreamstime.com/b/smiling-indian-man-looking-camera-mature-wearing-spectacles-portrait-middle-eastern-confident-businessman-office-195195079.jpg" alt="Client Image" />
            <p>"Awesome collection.|| Have an Lamborghini Urus 2024 Hulk edition here.... Highly Recommended."</p>
            <span>- Sourav </span>
          </div>

          <div className="testimonial">
            <img src="https://photosbull.com/wp-content/uploads/2024/05/1000060133.jpg" alt="Client Image" />
            <p>"Excellent service and quick process will suerly suggest Everyoe to go and buy cars from here only #Wheels&Deals."</p>
            <span>- Diksha </span>
          </div>

          <div className="testimonial">
            <img src="https://c1.wallpaperflare.com/preview/100/658/379/girl-indian-girl-white-dress-woman.jpg" alt="Client Image" />
            <p>"Best Showroom, best facilities,Lots of love to Wheels&Deals."</p>
            <span>- Saloni </span>
          </div>

          <div className="testimonial">
            <img src="https://img.freepik.com/free-photo/close-up-portrait-indian-hindu-girl-traditional-violet-saree-posed-street_627829-12971.jpg" alt="Client Image" />
            <p>"One of the best Showroom in India Cars are avaliable at best price every is just perfect."</p>
            <span>- Isha </span>
          </div>

          <div className="testimonial">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRXuxJEBRLZJky0TK4TiSttX1WIGBi7xvnMw&s" alt="Client Image" />
            <p>"They are just amazing they know how to deliver happiness trust worthy showroom."</p>
            <span>- Aashish </span>
          </div>
        </section>
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
}

export default App;
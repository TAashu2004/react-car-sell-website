import React, { useState, useEffect } from 'react';
import './About.css';
import logo from'./img/car-logo.png'
import bg from './img/bg.jpg';

const NumberCounter = ({ targetNumber, label }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let frame;
    const duration = 1000; 
    const startTime = performance.now();

    const step = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCurrentNumber(Math.floor(progress * targetNumber));

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setCurrentNumber(targetNumber); 
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [targetNumber]); 

  return (
    <div className="counter-item">
      <h2 className="counter-number">{currentNumber}+</h2>
      <p className="counter-label">{label}</p>
    </div>
  );
};

const About = () => {
  return (
    <>
    <div className='row'>
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >

<div className="counter-container">
      <NumberCounter targetNumber={5000} label="Happy Customers" />
      <div className="vertical-line" />
      <NumberCounter targetNumber={25} label="Best Quality Awards" />
      <div className="vertical-line" />
      <NumberCounter targetNumber={10000} label="Cars Sold" />
      <div className="vertical-line" />
      <NumberCounter targetNumber={16} label="cars Brand" />
    </div>

      <h6
        style={{
          color: 'rgb(246, 7, 7)',
          marginTop:"60px",
          marginLeft:"80px",
          fontSize:"20px"
        }}
      >
        ABOUT US...
      </h6>
      <h1 style={{color:"white",marginLeft:"80px"}}>Who<span style={{color:"red"}}>Wheels&Deals</span>Are</h1>

      <p
        style={{
          color: 'white',
          fontSize: '20px',
          marginLeft:"80px"
        }}
      >
        We're a pre-owned car dealership in Kangra,Himachal Pradesh with focus<br></br> on transparencay and impeccabe client service in mind since the very <br></br>beginning.Over the years,Wheels&Deals has bacome a brand itself and<br></br> has kept winning the "Best Pre-owned Car dealership in Himachal" <br></br>awards several times by global iconic Awards, National Gratitude<br></br> Awards nd many more. 
      </p>

      <p style={{color: "white",fontSize: "200%",marginLeft:"80px"}}><i class="fa-regular fa-circle-check" style={{color: "#ffffff",fontSize: "100%"}}></i>
        5000+ Happy Clients Since 2020<br></br>
        <i class="fa-regular fa-circle-check" style={{color: "#ffffff",fontSize:"100%"}}></i>
        Premium Quality Cars.<br></br>
        <i class="fa-regular fa-circle-check" style={{color: "#ffffff",fontSize: "100%"}}></i>
        25+ Best Quality Awards.
    </p>
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
};

export default About;
import React from "react";
import"./Buy.css";
import img1 from'./img/car1.jpg';
import img2 from'./img/car2.jpg';
import img3 from'./img/car3.jpg';
import img4 from'./img/car4.jpg';
import img5 from'./img/car5.jpg';
import img6 from'./img/car6.jpg';
import img7 from'./img/car7.jpg';
import img8 from'./img/car8.jpg';

const Buy = () => {

    return(
        <>
        <div className="row" style={{background:"black"}}>
        <center><h1 style={{color:"red"}}>Our Collection</h1></center>
            <div className="col-lg-3">
            <div class="card" style={{width: "18rem"}}>
            <img src={img1}class="card-img-top" alt="..."/>
            <div class="card-body">
                <center>
            <h4 style={{fontStyle:"italic"}}>MERCEDES BENZ S400D</h4>
            <h6>Model-2020</h6>
            <h6>Fuel-Diesel</h6>
            <h6>Rs.1,60,00,000</h6>
            <div className='btn'>
          <a href="#">
            <button style={{
              backgroundColor: 'red',
              color: 'black',
              border: 'none',
              marginLeft:'5px',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }} 
            onMouseOver={(e) => e.target.style.boxShadow = '0 0 10px red'}
            onMouseOut={(e) => e.target.style.boxShadow = 'none'}>
              Buy
            </button>
          </a>
        </div></center>
            </div>
            </div>
            </div>


            <div className="col-lg-3">
            <div class="card" style={{width: "18rem"}}>
            <img src={img2}class="card-img-top" alt="..."/>
            <div class="card-body">
                <center>
            <h4 style={{fontStyle:"italic"}}>Lamborghini Huracan LP 580</h4>
            <h6>Model-2017</h6>
            <h6>Fuel-Petrol</h6>
            <h6>Rs.2,95,00,000</h6>
            <div className='btn'>
          <a href="#">
            <button style={{
              backgroundColor: 'red',
              color: 'black',
              border: 'none',
              marginLeft:'5px',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }} 
            onMouseOver={(e) => e.target.style.boxShadow = '0 0 10px red'}
            onMouseOut={(e) => e.target.style.boxShadow = 'none'}>
              Buy
            </button>
          </a>
        </div></center>
            </div>
            </div>
            </div>


            <div className="col-lg-3">
            <div class="card" style={{width: "18rem"}}>
            <img src={img3}class="card-img-top" alt="..."/>
            <div class="card-body">
                <center>
            <h4 style={{fontStyle:"italic"}}>Range Rover Evoke R-Dynamic</h4>
            <h6>Model-2021</h6>
            <h6>Fuel-Diesel</h6>
            <h6>Rs.55,00,000</h6>
            <div className='btn'>
          <a href="#">
            <button style={{
              backgroundColor: 'red',
              color: 'black',
              border: 'none',
              marginLeft:'5px',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }} 
            onMouseOver={(e) => e.target.style.boxShadow = '0 0 10px red'}
            onMouseOut={(e) => e.target.style.boxShadow = 'none'}>
              Buy
            </button>
          </a>
        </div></center>
            </div>
            </div>
            </div>


            <div className="col-lg-3">
            <div class="card" style={{width: "18rem"}}>
            <img src={img4}class="card-img-top" alt="..."/>
            <div class="card-body">
                <center>
            <h4 style={{fontStyle:"italic"}}>Audi Q7 TDI <br></br>Quattro</h4>
            <h6>Model-2016</h6>
            <h6>Fuel-Diesel</h6>
            <h6>Rs.70,00,000</h6>
            <div className='btn'>
          <a href="#">
            <button style={{
              backgroundColor: 'red',
              color: 'black',
              border: 'none',
              marginLeft:'5px',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }} 
            onMouseOver={(e) => e.target.style.boxShadow = '0 0 10px red'}
            onMouseOut={(e) => e.target.style.boxShadow = 'none'}>
              Buy
            </button>
          </a>
        </div></center>
            </div>
            </div>
            </div>



            <div className="col-lg-3">
            <div class="card" style={{width: "18rem"}}>
            <img src={img5}class="card-img-top" alt="..."/>
            <div class="card-body">
                <center>
            <h4 style={{fontStyle:"italic"}}>Lamborghini Urus Hulk Edition</h4>
            <h6>Model-2021</h6>
            <h6>Fuel-Petrol</h6>
            <h6>Rs.4,75,00,000</h6>
            <div className='btn'>
          <a href="#">
            <button style={{
              backgroundColor: 'red',
              color: 'black',
              border: 'none',
              marginLeft:'5px',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }} 
            onMouseOver={(e) => e.target.style.boxShadow = '0 0 10px red'}
            onMouseOut={(e) => e.target.style.boxShadow = 'none'}>
              Buy
            </button>
          </a>
        </div></center>
            </div>
            </div>
            </div>



            <div className="col-lg-3">
            <div class="card" style={{width: "18rem"}}>
            <img src={img6}class="card-img-top" alt="..."/>
            <div class="card-body">
                <center>
            <h4 style={{fontStyle:"italic"}}>Mercedes Benz C300 Cabriolet</h4>
            <h6>Model-2018</h6>
            <h6>Fuel-Petrol</h6>
            <h6>Rs.1,30,00,000</h6>
            <div className='btn'>
          <a href="#">
            <button style={{
              backgroundColor: 'red',
              color: 'black',
              border: 'none',
              marginLeft:'5px',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }} 
            onMouseOver={(e) => e.target.style.boxShadow = '0 0 10px red'}
            onMouseOut={(e) => e.target.style.boxShadow = 'none'}>
              Buy
            </button>
          </a>
        </div></center>
            </div>
            </div>
            </div>



            <div className="col-lg-3">
            <div class="card" style={{width: "18rem"}}>
            <img src={img7}class="card-img-top" alt="..."/>
            <div class="card-body">
                <center>
            <h4 style={{fontStyle:"italic"}}>BMW X5 30D <br></br>XLINE</h4>
            <h6>Model-2019</h6>
            <h6>Fuel-Diesel</h6>
            <h6>Rs.85,00,000</h6>
            <div className='btn'>
          <a href="#">
            <button style={{
              backgroundColor: 'red',
              color: 'black',
              border: 'none',
              marginLeft:'5px',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }} 
            onMouseOver={(e) => e.target.style.boxShadow = '0 0 10px red'}
            onMouseOut={(e) => e.target.style.boxShadow = 'none'}>
              Buy
            </button>
          </a>
        </div></center>
            </div>
            </div>
            </div>



            <div className="col-lg-3">
            <div class="card" style={{width: "18rem"}}>
            <img src={img8}class="card-img-top" alt="..."/>
            <div class="card-body">
                <center>
            <h4 style={{fontStyle:"italic"}}>Toyota Fortuner Legender</h4>
            <h6>Model-2024</h6>
            <h6>Fuel-Diesel</h6>
            <h6>Rs.55,00,000</h6>
            <div className='btn'>
          <a href="#">
            <button style={{
              backgroundColor: 'red',
              color: 'black',
              border: 'none',
              marginLeft:'5px',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }} 
            onMouseOver={(e) => e.target.style.boxShadow = '0 0 10px red'}
            onMouseOut={(e) => e.target.style.boxShadow = 'none'}>
              Buy
            </button>
          </a>
        </div></center>
            </div>
            </div>
            </div>



            
        </div>
        </>
    );
};
export default Buy;

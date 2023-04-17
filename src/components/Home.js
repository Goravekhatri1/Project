import React from "react";
import img1 from "./images/banglow.jpg";

import img2 from "./images/flate.jpg";
import img3 from "./images/apartment.jpg";
import Area from "./Area";
import Filter from "./Filter";

const Home = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row ">
          <div className=" my-auto mx-auto d-flex justify-content-center align-item-center">
            <h3>Wellcome To HomeHive</h3>
          </div>
          <div className="col">
            <div
              id="carouselExampleCaptions"
              className="carousel slide "
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>

              <div className="carousel-inner  ">
                <div className="carousel-item  active ">
                  <img src={img1} className="d-block w-100   " alt="..." />

                  <div className="carousel-caption  d-none d-md-block">
                    <h5>Banglow</h5>
                    <p>Find Your Dream House Here</p>
                  </div>
                </div>
                <div className="carousel-item  ">
                  <img
                    src={img2}
                    className="d-block w-100 img-fluid  "
                    alt="..."
                  />
                  <div className="carousel-caption d-none   d-md-block">
                    <h5 className=" ">Apartments </h5>
                    <p>Buy Rent Sell Apartment</p>
                  </div>
                </div>
                <div className="carousel-item ">
                  <img src={img3} className="d-block w-100 " alt="..." />
                  <div className="carousel-caption d-flex justify-content-center d-md-block">
                    <h5>Flate</h5>
                    <p>Buy Sell Rent Flate.</p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <main>
        {/* <Filter/> */}
        <section>
            <h1 className="text-center border mt-3">
                filter Components here
            </h1>
        </section>
      
      <section className="container-fluid mt-5 ">
        <div className="row">
          
          
        <Area name="Gulsan-e-haider" img="https://images.unsplash.com/photo-1512699355324-f07e3106dae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&h=350&dpr=1" />
         
          
           <Area name="Noman Town "  img="https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&h=350&dpr=1" />
          
          
           <Area name="Gulberg Towm "  img="https://www.feeta.pk/uploads/mobile_images/2022-04-04-06-53-04-706-1649055184_856x550_91.webp" />
          
          
           <Area name="GM Towm "  img="https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&h=350&dpr=1" />
         
        </div>
      </section>
      </main>
    </>
  );
};

export default Home;

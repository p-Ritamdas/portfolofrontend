import React from 'react'

const Hero = () => {
  return (
    <>
       <div className="container-fluid mt-5">
    <div className="row">
      <div className="col-md-10 col-12 mx-auto">

        <div className="row">
          <div
            className="col-md-6 col-12 hero-text order-md-0 order-1 d-flex justify-content-center align-items-start flex-column">
            <h1>WE WILL HELP YOU </h1>
            <h1>TO GROW YOUR BUSINESS</h1>
            <p>I am a <span className="bold-style"> full stack web developer </span></p>
            <button className="btn-style btn-primary">Read more </button>
          </div>
         {/* right side */}
          <div className="col-md-6 col-12 hero-text order-md-1 order-0">
            <figure>
              <img src="images/growth.svg" alt="herosec img"/>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div> 
    </>
  )
}

export default Hero
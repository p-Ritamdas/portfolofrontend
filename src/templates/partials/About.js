import React from 'react'

const About = () => {
  return (
    <div>
     <>
     <div className="container-fluid mt-5 about-style" id="aboutid">
    <div className="row">
      <div className="col-md-10 col-12 mx-auto">
        <h1 className="text-center main-heading">About Us</h1>
        <p className="text-center main-heading">grow your business with us</p>
        <div className="row">
          <div className="col-md-6 col-12 hero-text ">
            <figure>
              <img src="images/about.svg" alt="herosec img"/>
            </figure>
          </div>

          
          <div className="col-md-6 col-12 hero-text  d-flex justify-content-center align-items-start flex-column">
            <h1>HELLO THERE </h1>
            <h1>I AM A PROFESSIONAL DEVOLOPER</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic neque quos enim repellendus, id a quaerat
              dignissimos harum ducimus esse odio, placeat autem animi et ipsum! Id praesentium nemo quos?</p>
 <button className="btn-style btn-primary">Read more </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
    </div>
  )
}

export default About
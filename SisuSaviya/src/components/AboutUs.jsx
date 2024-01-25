import React from 'react'
import MainImage from '../assets/AboutUsMain.png'
import Logo from '../assets/Logo.png'

function AboutUs() {
  return (
    <div>
      <div>
        <div>
          <h1>About Us</h1>
        </div>
        <div>
          <img src={MainImage} alt="About Us" />
          <div className="z-20">
            <img src={Logo} alt="Logo" />
            <div>
              Sisu
            </div>
            <div>
              Saviya
            </div>
          </div>
          <div>
            <p>
            From preschool to pre-tertiary, our students enjoy fun
            interactive and relevant lessons and are empowered to think 
            beyond the confines of the classroom.
            </p>
          </div>
          <div>
            <button>
              See More
            </button>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}


export default AboutUs
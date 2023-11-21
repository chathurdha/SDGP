import React from 'react'
import './Home.css'
import image from '../../assets/banner-image1.png'
import arrow from '../../assets/arrow.svg'
import graph from '../../assets/Graph.png'
import natural from '../../assets/Natural Food.png'
import people from '../../assets/People.png'
import leaf from '../../assets/leaf.png'

function Home() {
  return (
    <>
    <div className='banner-container'>
        <div className='banner-content'>
            <div className='banner-text'>
                <h3>Welcome!</h3>
                <h1>Find the <br/>
                    Crop Production <br/>
                    In Your Area with <span>WIXIT !</span> </h1>
                <p>Empowering Sri Lankan farmers with precision agriculture:<br/> 
                    Your reliable partner in crop production forecasting for 
                    a sustainable tomorrow.</p>
                <button>See more<img src={arrow}/></button>
            </div>
            <div className='image-container'>
                <img src={image}/>
            </div>
        </div>
    </div>
    <div className='service-container'>
        <div className='service-content'>
            <div>
            <h1>Services for Smart Farming</h1>
            <div className='service-images-container'>
                <div>
                    <img src={graph}/>
                    <p>Predictive <br/>Analytics</p>
                </div>
                <div>
                    <img src={natural}/>
                    <p>Current <br/>Crop Production</p>
                </div>
                <div>
                    <img src={people}/>
                    <p>Enhance<br/>Communication</p>
                </div>
            </div>
            </div>
        </div>
        <img src={leaf} className='leaf-image1'></img>
        <img src={leaf} className='leaf-image2'></img>
    </div>
    </>
  )
}

export default Home
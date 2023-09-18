import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/about.css'
const About = () => {
  return (
    <div>
      <Navbar />
      <section id="about" class="about">
        <h1 class="heading">About us</h1>
        <div class="row">
            <div class="content">
                <h3>We build website that build your busines</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, quae voluptatem ea, temporibus 
                    deserunt vero nulla dicta asperiores esse voluptate odio reprehenderit numquam. Necessitatibus 
                    veniam voluptatum mollitia debitis ipsam cum?</p>
                <a href="#"><button class="btn">read more</button></a>
            </div>
            
            <div class="image">
                <img src='images/slider/about_image.jpg' className='s-img' alt="" />
            </div>
        </div>
    </section>
    </div>
  )
}

export default About
import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/footer.css"
const Footer = () => {
  return (
    <div className='f-container'>
        <div className="f-row">
          <div className="f-col">
            <img src='/images/logo/logo.jpg' alt='' />
            <p>Chào mừng đến với website MERN STACK của đặng quang minh. Rất mong các bạn hãy đánh giá 1 cách đúng đắn nhất</p>
          </div>
          <div className="f-col">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          <div className="f-col">
          <h2>Category</h2>
            <ul>
              <li>
                <NavLink to="/">SHFIGUARTS</NavLink>
              </li>
              <li>
                <NavLink to="/">MAFEX </NavLink>
              </li>
              <li>
                <NavLink to="/">REVOLTECH</NavLink>
              </li>
            </ul>
          </div>

          <div className="f-col">
            <h2>Stay in touch with us</h2>
          <div className='socials'>
                    <a href=""><img src="/images/socials/facebook.png" alt="" /></a>
                    <img src="/images/socials/instagram.png" alt="" />
                    <img src="/images/socials/twitter.png" alt="" />
                    <img src="/images/socials/youtube.png" alt="" />
                </div>
          </div>
        </div>

        <div className='f-coppyrow'>
            <p>&copy; 2022. All Rights Reserved. Powered by QuangMinh</p>
        </div>
    </div>
  )
}

export default Footer
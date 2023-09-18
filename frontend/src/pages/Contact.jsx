import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/contact.css'
const Contact = () => {
  return (
    <div>
      <Navbar />
      <section id="contact" class="contact">
            <h1 class="heading">contact us</h1>

            <div class="row">
                <div class="image">
                  <img src='images/slider/contact_image.jpg' className='s-img' alt="" />
                </div>

                <div class="form-container">
                    <form action="">

                        <div class="inputBox">
                            <input type="text" placeholder="first name"/>
                            <input type="text" placeholder="last name"/>
                        </div>

                        <input type="email" placeholder="email"/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="message"></textarea>
                        <input type="submit" value="send" />
                    </form>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact
import React from 'react'
import "../styles/newsletter.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
const Newsletter = () => {
  return (
    <div className='new-container'>
        <div className='new-row'>
            <div className='new-col'>
                <h2 className="new-title">Newsletter</h2>
                <p className="new-desc">Get timely updates from your favorite products</p>
                <div className="input-container">
                  <input type="text" placeholder='Nhập E-mail' />
                  <button><FontAwesomeIcon icon={faPaperPlane} /></button>  
                </div>               
            </div>
        </div>
    </div>
  )
}

export default Newsletter
import React, {useContext, useState} from 'react';
// import axios from 'axios';
import { Store } from '../Store';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../styles/wish.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMinusCircle, faPlusCircle, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const Wish = () => {

  const {state, dispatch: ctxDispatch} = useContext(Store);
  const { wish: {wishItems},  } = state;

  const removeItemHandler = (item) => {
    ctxDispatch({
      type: "WISH_REMOVE_ITEM", 
      payload: item,
    });
  }
  return (
    <>
      <Navbar />
            <div className="wish-container">
              <div className="wish-row">
                  <h2 className="wish-title">Your Wish List</h2>
              </div>
              <div className="wish-row">
                <div className="wish-col">
                {wishItems.length === 0 ? (<h3 className='info'>Your Wish List is Empty</h3>):
                    (
                      <div className='wish-cards'>
                          {wishItems.map((item) => (
                            <div className="wish-card" key={item._id}>
                                <div className="wish-header">
                                  <img src={item.image} alt={item.title} />
                                </div>
                                <div className="wish-body">
                                    <Link to={`/product/${item.slug}`}>{item.title}</Link>
                                    <span className='wish-quantity'>Quantity: 1</span>
                                </div>

                                <div className="wish-footer">
                                    <span className='wish-price'>${item.price}</span>
                                    <button onClick={() => removeItemHandler(item)}><FontAwesomeIcon icon={faTrashAlt}/></button>
                                </div>
                            </div>
                          ))}
                      </div>
                    )
                  }
                </div>
                <div className="wish-col"></div>
              </div>
            </div>
      <Footer />
    </>
  )
}

export default Wish
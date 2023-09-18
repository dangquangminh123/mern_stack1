import React, {useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/producthome.css';
import { faEye, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Quick from './Quick';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import axios from 'axios';
const ProductHome = ({item}) => {

    const {state, dispatch: ctxDispatch} = useContext(Store);
    const {cart, wish} = state;
    const addToCartHandler = async () => {
      const existItem = cart.cartItems.find((x) => x._id === item._id);
      const quantity = existItem ? existItem.quantity + 1 : 1;//Nếu item is exists than quantity + 1


      //Kiểm tra số lượng thêm vào giỏ có nhỏ hơn số lượng hàng sẵn
      const {data} = await axios.get(`/api/products/slug/${item.slug}`);
      if(data.countInStock < quantity) {
          window.alert("Xin lỗi. Sản phẩm này hiện đã hết");
          return;
      }
        ctxDispatch({
        type: "CART_ADD_ITEM", 
        payload: {...item, quantity},
    });
    };

    const addToWishHandler = () => {
      const existItem = wish.wishItems.find((x) => x._id === item._id);
        const quantity = existItem ? existItem.quantity : 1;//Nếu item is exists than quantity + 1


        //Kiểm tra số lượng thêm vào giỏ có nhỏ hơn số lượng hàng sẵn
        //const {data} = await axios.get(`/api/products/slug/${product.slug}`);
        if(existItem) {
            window.alert("Xin lỗi. Sản phẩm này đã ở trong danh sách yêu thích của bạn");
            return;
        }
      ctxDispatch({
      type: "WISH_ADD_ITEM", 
      payload: {...item, quantity: 1},
    });
    };
  const [open, setOpen] = useState(false);
  return (
    <div className='hp-card'>
        <div className="card-header">
            <Link to={`/product/${item.slug}`}>
                <img src={item.image} alt={item.title} />
            </Link>
        </div>
        <div className="card-body">
            <h3 className="title">{item.title}</h3>
            <span>${item.price}</span>
        </div>
        <div className="card-footer">
            <button onClick={() => setOpen(true)} className="eye"><FontAwesomeIcon icon={faEye}/></button>
            <button><FontAwesomeIcon icon={faHeart} onClick={addToWishHandler}/></button>
            {item.countInStock === 0 ? (
                <button className='cart cart-out' disabled >Hết Hàng</button>
              ) : (
                <button> <FontAwesomeIcon icon={faShoppingBag} onClick={addToCartHandler}/> </button>)
              }
            </div>
        {open && <Quick item={item}/>}
    </div>
  )
}

export default ProductHome
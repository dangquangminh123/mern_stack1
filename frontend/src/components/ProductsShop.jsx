import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { products } from '../data';
import "../styles/productsShop.css";
import ProductShop from './ProductShop.jsx';
import ReactPaginate from 'react-paginate'


const ProductsShop = () => {

    //for filter category and all products
    const [data, setData] = useState(products);

    //for category
    const [category, setCategory] = useState([]);
 
    const [pageNumber, setPageNumber] = useState(0);

    const productPerPage = 3;

    const pagesVisited = pageNumber * productPerPage;

    const displayProducts = data.slice(pagesVisited, pagesVisited + productPerPage).map((item) => (
      <ProductShop item={item} key={item._id} />
    ))

    const pageCount = Math.ceil(data.length / productPerPage);

    const changePage = ({selected}) => {
      setPageNumber(selected); //if i click tới số 2 thì chọn số 2
    }

    //filter and all product
    const filterResult = (catItem) => {
        const result = products.filter((curDate) => {
            return curDate.category === catItem;
        });
        setData(result);
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/category');
            setCategory(result.data);
          }
          fetchData();
    }, []);

  return (
        <div className="shop-container">
          <div className="shop-row">
            <div className="shop-col">
              <h2>Category</h2>
              <button className='shop-btn' onClick={() => setData(products)}>All <FontAwesomeIcon icon={faChevronRight}/></button>
              {/* shop all category */}
              {category.map((item) => (
                 <button className='shop-btn' onClick={() => filterResult(item.title)}>{item.title}<FontAwesomeIcon icon={faChevronRight}/></button>
              ))}
            </div>
            <div className="shop-col">
              <div className="shop-products">
                {/* show product cardcd */}
                {displayProducts}
              </div>
              <div className="shop-pagination">
                  <ReactPaginate
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}// class for style
                    previousLinkClassName={"previousBttn"}// class for style
                    nextLinkClassName={"nextBttn"}// class for style
                    disabledClassName={"paginationDisabled"}// class for style
                    activeClassName={"paginationActive"}       // class for style           
                  />
              </div>
            </div>
          </div>
        </div>

  )
}

export default ProductsShop
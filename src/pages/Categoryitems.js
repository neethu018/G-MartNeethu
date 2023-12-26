import React from 'react';
import { useNavigate } from 'react-router-dom';
//import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import productsData from '../data/product.json';
import './Categorypage.css';

const ProductList = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/productdetails');
   };
  return (
    <div className="row">
      {productsData.map((product) => (
        <div key={product.id} className="col-md-4 mb-4" id='card'>
          <div className="card my-3" onClick={handleClick}>
            <div className="icons">
            {/* <FavoriteBorderSharpIcon /> */}
            </div>
             <img src={product.image} className="card-image-top" alt={product.name}  />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">
                <span className="new_price"> Rs.{product.newPrice}</span>
                <span className="old_price">
                  <s>Rs.{product.oldPrice}</s>
                </span>
                <span className="offer_price">{product.discount}% OFF</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

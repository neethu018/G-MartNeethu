import React from 'react'
import './Signup.css';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';


function Signup() {
  return (
    <div>
      <div className="col-md-4 col-lg-3">
        <div className="card my-3" id='card'>
            <div className='icons'> <FavoriteBorderSharpIcon /> </div>
                <img src="https://www.jiomart.com/images/product/original/441148989_navy/cross-stitch-print-straight-kurta-model-441148989_navy-0-202311250520.jpg?im=Resize=(600,750)" class="card-image-top" alt="" />
                    <div className="card-body">
                      <h5 className="card-title ">Stylish blue top</h5>
                      <p className="card-text">
                          <span className=" new_price"> Rs.350</span>
                          <span className=" old_price"><s>Rs.455</s></span>
                          <span className=" offer_price">50% OFF</span>
                      </p>
                    </div>
              </div>
            </div>
        </div>
        )
}

export default Signup
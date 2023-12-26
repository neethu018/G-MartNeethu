import React from 'react'
import productsData from '../data/product.json';

function Productdetails() {
  return (
    <div>
      {productsData.map((product) => (
        <div>
        <div  key={product.id} class="col-4 my-3">
          <p></p>
          <img src={product.image} class="card-image-top" alt="products"style={{width:'300px'}} />
          </div>
          <div className="col-8 my-8" >
          <h5 className="text-success">{product.name}</h5>
          <p> shellet nsme</p>
          <p> description</p>
          <h6 className="my-2 text-danger"> Rs.{product.newPrice} <s>old</s></h6>
          <h5 className="my-3 text-primary">{product.oldPrice}</h5>
              <p>
                  <div className="btn-group " style={{width:"150px"}}>
                      <button className="input-group-text bg-success text-light" id="btnMinus"><i class="fa fa-minus"></i></button>
                      <input type="text" name="qty" id="txtQty" value="1" class="force-control text-center" />
                      <button className="input-group-text bg-success text-light" id="btnPlus"><i class="fa fa-plus"></i></button>
                  </div>
              </p>
              <button className="btn btn-primary" id="btnCart"><i class="fa fa-shopping-cart"></i>Add to cart</button>
              
              <button className="btn btn-secondary"><i class="fa fa-minus"></i>Out of stack</button>
              
              <button className="btn btn-danger" id="btnFav"><i class="fa fa-heart"></i></button>
       </div>    
       </div>
      ))}
      

      
        {/* <div class="col-4 my-3">
                <p></p>
            <img src={product.image} class="card-image-top" alt="products" />
            </div>
            <div class="col-8 my-3">
                <h5 class="text-success">{product.name}</h5>
                <p> shellet nsme</p>
                <p> description</p>
                <h6 class="my-2 text-danger"> Rs.{product.newPrice} <s>old</s></h6>
                <h5 class="my-3 text-primary">offer Price  : Rs.new</h5>
                    
                    
                    <p>
                        <div class="btn-group " style={{width:"150px"}}>
                            <button class="input-group-text bg-success text-light" id="btnMinus"><i class="fa fa-minus"></i></button>
                            <input type="text" name="qty" id="txtQty" value="1" class="force-control text-center" />
                            <button class="input-group-text bg-success text-light" id="btnPlus"><i class="fa fa-plus"></i></button>
                        </div>
                    </p>
                    <button class="btn btn-primary" id="btnCart"><i class="fa fa-shopping-cart"></i>Add to cart</button>
                    
                    <button class="btn btn-secondary"><i class="fa fa-minus"></i>Out of stack</button>
                    
                    <button class="btn btn-danger" id="btnFav"><i class="fa fa-heart"></i></button>
             </div>    */}
    </div>
  )
}

export default Productdetails
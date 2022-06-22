import React, { Component } from "react";
import { useState } from "react";
import { Button } from "reactstrap";
import {
  Link
} from "react-router-dom";
import { Modal, showImage } from "react-bootstrap";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./displayproducts.css";
// import productsData from './productsData';

function DisplayProducts(props) {
    const [show, setShow] = useState(false);
    const [showImg, setShowImg] = useState({});
    const handleShow = (product) => {
    setShow(true);
    setShowImg(product);
    };
    const handleClose = () => {
    setShow(false);
    };
    // console.log(props.products);

    return (     
    <div>
    <div className="container col-lg-6 my-5 mx-auto">
      <p>
        Trade Xi is a website for trading second-used wedding items, including wedding dress, wedding shoes, veils and more.
        Sell your items by clicking</p><a href="/login">login</a>
        {/* <Link to="/login">login</Link> */}
    </div>
    <div className="container col-lg-10 my-5 mx-auto">
      <label>
            Sort Price By: 
        <select onChange={(e) => props.OnSort(props.products, e.target.value)}>
              <option value="norm">Normal</option>
              <option value="asc">Lowest</option>
              <option value="desc" >Highest</option>
        </select>
      </label>
    </div>
    {props.products.map(product => (
    <div key={product.id} className='border px-4 py-2 p-3'>    
                <div className="d-block col-lg-3 text-left">
                  <h4 className='d-inline col-lg-3 '>{product.desc}</h4> 
                  <h4 className="d-inline col-lg-3 text-danger">${product.price}</h4>
                </div>    
                <div className='d-block d-flex align-items-center col-sm-6'>
                    <img src={product.image} alt={product.desc} width="150" 
                        onClick={() => handleShow(product)}/>
                    <FontAwesomeIcon 
                        icon={faPlusCircle} 
                        onClick={() => props.OnQuantityChange(product.value, product.id, 1)}
                        className='fas fa-lg col-sm-1' />
                    <FontAwesomeIcon 
                        icon={faMinusCircle} 
                        onClick={() => props.OnQuantityChange(product.value, product.id, -1)}
                        className='fas fa-lg col-sm-1' />
                    <div className='d-block d-inline-block col-sm-1 justify-content-center'>
                        <span>Quantity</span>
                        <input 
                        // className='col-md-1 mx-4'
                        id="itemQuantity"
                        type="text" 
                        value={product.value}
                        min="0"
                        onChange={(event) => props.OnQuantityChange(event.target.value, product.id)}
                        ></input>
                    </div>
                </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{showImg.desc}</Modal.Title>
            </Modal.Header>
        <Modal.Body>
          <img
            src={showImg.image}
            width="350"
            alt={showImg.desc}
            className="mx-5"
          />
          <p>
            <span className="text-dark">Ratings: </span>
            {showImg.rating}/5
          </p>
        </Modal.Body>
      </Modal>
    </div>
    ) )}
    </div>   
    );
}
 
export default DisplayProducts;

// export default function DisplayProducts(props) {
//     console.log(props.products);
//     return (
//         <div className="container mx-auto bg-white">
//             <p>Display Products</p>
//         </div>
//     )
// }
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
import { Row, Col, Container }from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


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
    {/* Card Deck started */}
    <Container fluid className="py-2 overflow-hidden">
    <Row > 
    {props.products.map((product) => (
      <Col xs={12} md={6} lg={4}> {/* Put col inside mapping, instead out side of mapping */}
      <Card key={product._id}>
        <Card.Img variant="top" src="/product_pic.png"
                        alt={product.author} width="150"
                        onClick={() => handleShow(product)} 
                        className="card-image"/>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.author}</Card.Text>
          <FontAwesomeIcon 
                        icon={faPlusCircle} 
                        onClick={() => props.OnQuantityChange(product.value, product._id, 1)}
                        className='fas fa-lg col-sm-1' />
          <FontAwesomeIcon 
                        icon={faMinusCircle} 
                        onClick={() => props.OnQuantityChange(product.value, product._id, -1)}
                        className='fas fa-lg col-sm-1' />
          <div className='d-block my-3'>
                        <span>Quantity</span>
                        <input 
                        className='col-md-2 mx-2 border border-secondary'
                        id="itemQuantity"
                        type="text" 
                        value={product.value}
                        min="0"
                        onChange={(event) => props.OnQuantityChange(event.target.value, product._id)}
                        ></input>
          </div>
        </Card.Body>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{showImg.desc}</Modal.Title>
            </Modal.Header>
        <Modal.Body>
          <img
            src="/product_pic.png"
            width="350"
            alt={showImg.desc}
            className="mx-5"
          />
          <p>
            <span className="text-dark">Ratings: </span>
            4/5
            {/* {showImg.rating}/5 */}
          </p>
        </Modal.Body>
      </Modal>
      </Card>
      </Col>
        ))}
    </Row>
    </Container>
    {/* Card Deck finished */}
    </div>   
    );
}
 
export default DisplayProducts;
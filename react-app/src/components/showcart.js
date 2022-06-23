import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap";
import LogIn from './login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./navbar.css";

// function ShowCart(props) {
//     return (     
//       <div>
//       <h4 className='d-inline d-flex col-sm-6 text-left p-3'>Your Cart Items</h4>
//       <div>
//       {props.cartitems.map((item) => {
//             if (item.value > 0) {
//               return (
//                 <div className='border px-4 py-2'>  
//                   <div className='d-flex'>     
//                     <div className='d-inline  col-sm-4'>
//                         <img src={item.image} alt={item.desc} width="150" />
//                         <h4 className='justify-content-center'>{item.desc}</h4>
//                     </div>
//                     <div className='d-inline d-flex col-sm-6 text-left align-items-center'>
//                           <span style={{fontWeight: "bold"}}>Quantity {item.value}</span>
//                     </div>
//                   </div>
//                 </div> 
//       )
//       }
//       })} 
//       </div>
//       <Checkout totalQuantity={props.totalValue} />
//       </div>
//     )
//   }

//   const Checkout = ({ totalQuantity }) => {
//     return totalQuantity > 0 ? (
//       <div className="items checkout-btn">
//         <Link to="/login">
//           <Button className="btn btn-primary" id="cartBtn">
//             Check Out
//           </Button>
//         </Link>
//       </div>
//     ) : (
//       <div className="cart-number-items">
//         <h4>There are 0 items in your cart.</h4>
//         <Link to="/">
//           <button className="btn btn-success cart-btn">Continue Shop</button>
//         </Link>
//       </div>
//     );
//   }

//   export default ShowCart;


// export default function ShowCart(props) {
//   console.log(props.products);
//   return (
//       <div className="container mx-auto bg-white">
//           <p>ShowCart</p>
//       </div>
//   )
// }


function ShowCart(props) {
  return props.totalQuantity > 0 ? ( 
    <div>
    <h4 className='d-inline d-flex col-sm-6 text-left p-3'>Your Cart Items</h4>
    <div>
    {props.cartitems.map((item) => {
          if (item.value > 0) {
            return (
              <div className='border px-4 py-2'>  
                <div className='d-flex'>     
                  <div className='d-inline  col-sm-4'>
                      <img src='/product_pic.png' alt={item.desc} width="150" />
                      <h4 className='justify-content-center'>{item.desc}</h4>
                  </div>
                  <div className='d-inline d-flex col-sm-6 text-left align-items-center'>
                        <span style={{fontWeight: "bold"}}>Quantity {item.value}</span>
                  </div>
                </div>
              </div> 
    )
    }
    })} 
    </div>
    <Checkout />
    </div>
  ) : (
    <div className="cart-number-items mt-5">
      <h4>There are 0 items in your cart.</h4>
      <Link to="/">
        <button className="btn cart-btn col-sm-4 ">Continue Shop</button>
      </Link>
    </div>
  )
}

const Checkout = ({ totalQuantity }) => {
  return (
    <div className="items checkout-btn">
      <Link to="/login">
        <Button className="btn btn-primary my-3 mx-auto col-sm-4" id="cartBtn">
          Check Out
        </Button>
      </Link>
    </div>
  )
}

export default ShowCart;
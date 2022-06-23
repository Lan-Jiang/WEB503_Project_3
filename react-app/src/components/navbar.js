import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart,faRegistered, faAtom, faArrowUpRightDots, faArrowsTurnToDots } from "@fortawesome/free-solid-svg-icons";
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import DisplayProducts from "./displayproducts";
import ShowCart from "./showcart";
import LogIn from "./login";
import Home from "./Home";
import BookList from "./BookList";
import BookEdit from "./BookEdit";
import "./navbar.css";


function NavBar(props) {
    return (
        <Router>
            <div className="navbar p-5">
                <h1>
                    <Link to="/" className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faArrowsTurnToDots} className="fas fa-lg text-white"/>
                    <span className="px-2">Trade Xi</span> 
                    </Link>
                </h1>
                
                <p className="text-white">
                <Link to="/showcart">
                    <FontAwesomeIcon icon={faShoppingCart} className="fas fa-lg mx-3 text-white"/>
                </Link>
                <span className="font-weight-bold text-white">{props.totalValue}</span> items</p>
            </div>
            
            <Switch>
                <Route 
                    exact={true} path="/" 
                    
                >      
                        <DisplayProducts 
                            products={props.prods}
                            OnQuantityChange={props.handleQuantityChange}
                            OnSort={props.handleSort}
                            sortType={props.sortType}
                            listNum={props.listNum}
                        />
                </Route>
                <Route 
                    exact={true}
                    path="/showcart" 
                >               
                        <ShowCart 
                            cartitems={props.prods}
                            totalQuantity={props.totalValue}
                        />
                </Route>
                <Route 
                    exact={true}
                    path="/login" 
                >
                        <LogIn checkoutitems={props.prods}/>
                </Route>
                <Route path="/productedit" exact={true} >
                     <Home />
                </Route>
                <Route path="/books" exact={true} >
                     <BookList />
                </Route>
                <Route path="/books/:id" exact={true}>
                   <BookEdit />
                </Route>
            </Switch>
        </Router>
    )
}
 
export default NavBar;


// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route path="/" exact={true} component={Home} />
//           <Route path="/books" exact={true} component={BookList} />
//           <Route path="/books/:id" component={BookEdit} />
//         </Switch>
//       </Router>
//     );
//   }
// } 
// export default App;


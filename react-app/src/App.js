import React, { Component } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import BookList from "./components/BookList";
// import BookEdit from "./components/BookEdit";
import "./App.css";

import NavBar from './components/navbar';
//import DisplayProduct from './components/displayproducts';
import products from './products';
//import { useState } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: "norm",
      listNum: "",
      products: products
    };
  }

  handleQuantityChange = (quantity, id, operator = 0) => {
    let products = this.state.products 

    if (products[0].value >= 0 && products[0].value < 10) {
      products.filter(item => item.id === id)[0].value = parseInt(quantity) + parseInt(operator)
      this.setState({ products })
      console.log()
    }
  };

  handleSort = (listNum, sortType) => {
    listNum.sort((a, b) => {
      switch(sortType) {
        case "norm": return a.id - b.id
          break;
        case "asc": return a.price - b.price
          break;
        case "desc": return b.price - a.price
      }
    });
    this.setState({ sortType });
  };

  render() {
    return (
      <div className='App text-secondary'>
        <NavBar 
          totalValue={this.state.products.map(prod=>prod.value).reduce((acc, curr, index) => 
                    acc + curr, 0)      
                }
          prods={this.state.products}
          handleQuantityChange={this.handleQuantityChange}
          handleSort={this.handleSort}
          sortType={this.state.sortType}
          listNum={this.state.listNum}
        />
      </div>
    );
  }
}

export default App;


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
import React, { Component } from "react";
import NavBar from './components/navbar';
import "./css/styles.css";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      sortType: "norm",
      listNum: "",
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("api/books")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data, isLoading: false }));
  }

  handleQuantityChange = (quantity, _id, operator = 0) => {
    let products = this.state.products 

    if (products[0].value >= 0 && products[0].value < 10) {
      products.filter(item => item._id === _id)[0].value = parseInt(quantity) + parseInt(operator)
      this.setState({ products })
      console.log()
    }
  };

  handleSort = (listNum, sortType) => {
    listNum.sort((a, b) => {
      switch(sortType) {
        case "norm": return a.id - b.id
          break;
        case "asc": return a.author - b.author
          break;
        case "desc": return b.author - a.author
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
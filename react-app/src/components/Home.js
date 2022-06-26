import React, { Component } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./navbar.css";

class Home extends Component {
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

  render() {
    return (
      <div>
        <Container fluid>
          <Button className="m-5 nav nav-btn">
            <Link to="/books" className="nav-link">
              Edit Product List
            </Link>
          </Button>
        </Container>
      </div>
    );
  }
}

export default Home;
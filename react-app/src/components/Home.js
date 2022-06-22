import React, { Component } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

class Home extends Component {
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
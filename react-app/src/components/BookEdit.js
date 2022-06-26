import React, { Component } from "react";
import Navbar from "./navbar";
import { Link, withRouter, useHistory } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

class BookEdit extends Component {
  emptyBook = {
    title: "",
    author: "",
    value: 0,
    status: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyBook,
    };
  }

  async componentDidMount() {
    if (this.props.match.params.id !== "new") {
      const book = await (
        await fetch(`/api/book/${this.props.match.params.id}`)
      ).json();
      this.setState({ item: book });
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = { ...this.state.item };
    item[name] = value;
    this.setState({ item });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { item } = this.state;

    await fetch("/api/book", {
      method: item._id ? "PUT" : "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    this.props.history.push("/books");
  };

  render() {
    const { item } = this.state;
    const title = (
      <h2 className="mt-5">{item._id ? "Edit Product" : "Add Product"}</h2>
    );
    return (
      <div>
        <Container>
          {title}
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="title" className="h5 mt-3">
                Product Name
              </Label>
              <Input
                type="text"
                name="title"
                id="title"
                value={item.title || ""}
                onChange={this.handleChange}
                autoComplete="title"
              />
            </FormGroup>
            <FormGroup>
              <Label for="author" className="h5 mt-3">
                Price
              </Label>
              <Input
                type="number"
                name="author"
                id="author"
                value={item.author || ""}
                onChange={this.handleChange}
                autoComplete="author"
              />
            </FormGroup>
            <FormGroup>
              <Label for="status" className="h5 mt-3">
                Product Status
              </Label>
              <Input
                type="text"
                name="status"
                id="status"
                value={item.status || ""}
                onChange={this.handleChange}
                autoComplete="status"
              />
            </FormGroup>
            <FormGroup>
              <Button color="warning" type="submit" className="mt-3">
                Save
              </Button>{" "}
              <Button color="secondary" className="mt-3" tag={Link} to="/books">
                Cancel
              </Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(BookEdit);
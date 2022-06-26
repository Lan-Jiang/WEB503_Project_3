import React, {useState} from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function LogIn(props) {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");

  const responseFacebook = (response) => {
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  return (
    <div className="container">
      <Card style={{ width: "800px" }} className="mx-auto mt-5">
        {!login && (
          <>
            <Card.Header className="pb-4">
              <h1>Sign In</h1>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <React.Fragment>
                  <h3>Please login using one of the following:</h3>
                  <LoginForm />
                  <FacebookLogin
                    appId="707616920457618"
                    autoLoad={true}
                    fields="name,email,picture"
                    scope="public_profile,user_friends"
                    callback={responseFacebook}
                    icon="fa-facebook"
                  />
                </React.Fragment>
              </Card.Text>
            </Card.Body>
          </>
        )}
        {login && (
          <>
            <Card.Header className="pb-4">
              <h1>Checkout</h1>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <Welcome fbpic={picture} fbdata={data} />
              </Card.Text>
            </Card.Body>
          </>
        )}
      </Card>
    </div>
  );
}

const LoginForm = () => {
  return (
    <form className="border mt-3 mb-5 p-3 bg-white">
      <label className="m-2">Name:</label>
      <input type="text" name="name" placeholder="Your name" />
      <label className="m-2">Email:</label>
      <input type="email" name="email" placeholder="Your email" />
      <input
        type="submit"
        value="Login"
        className="btn bg-success text-white my-3"
      />
    </form>
  );
};

const Welcome = ({ fbpic, fbdata }) => {
  return (
    <React.Fragment>
      <img src={fbpic} alt={fbdata.name} />
      <h3 className="d-inline text-success mx-2">
        Welcome back {fbdata.name}!
      </h3>
      <br></br>
      {/* <p className="my-5">Time to upload?</p> */}
      <Link to="/books">
        Check Your Product List & Start A Trade!
      </Link>
    </React.Fragment>
  );
};

export default LogIn;

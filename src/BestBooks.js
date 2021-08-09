

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./BestBooks.css";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getBooks = async () => {
    const { user, isAuthenticated } = this.props.auth0;
    if (isAuthenticated) {
      const url = `${process.env.REACT_APP_URL}/book`;
      const paramele = {
        params: {
          name: user.email,
        },
      };
      axios
        .get(url, paramele)
        .then((result) => {
          this.setState({
            resultData: result.data,
          });
          console.log(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <Carousel>
        {this.state.resultData &&
          this.state.resultData.map((item) => {
            return (
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={item.img}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{item.NameofBooks}</h3>
                  <p>{item.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
      </Carousel>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
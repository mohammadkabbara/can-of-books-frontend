
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import  BestBooks from './BestBooks';

class MyFavoriteBooks extends React.Component {
  render() {
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
         <BestBooks /> 
      </Jumbotron>

    )
  }
}

export default MyFavoriteBooks;
<Card className="bg-dark text-white">
<Card.Img src={books.image} alt="Card image" />
<Card.ImgOverlay>
  <Card.Title>{books.name}</Card.Title>
  <Card.Text>
  {books.description}
  </Card.Text>
  <Card.Text>{books.status}</Card.Text>
</Card.ImgOverlay>
</Card>
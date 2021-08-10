

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BestBooks.css";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import Card from 'react-bootstrap/Card'
import AddBooksForm from './FormAdd'



class MyFavoriteBooks extends React.Component {

  constructor (props) {

    super(props);
    this.state = {
      books: [],
      bookName:'',
      bookDescription:'',
      imageBooks:''

    }
  }

  componentDidMount = () => {

    const  {user} = this.props.auth0;
  
    console.log(this.props.auth0);
    
    axios.get(`http://localhost:3010/books?email=${user.email}`).then(data => {
      this.setState ({
        
        // books:dataResults.data[0].books
        books:data.data
      });
      // console.log(data.data[0].books[0].title);
      // console.log(dataResults.data[0].books.title);
      console.log(data.data);
      
      }).catch(error => (error));



      addBooks = (event) => {
        event.preventDefault();
        const bookName = event.target.name.value;
        const bookDescription = event.target.description.value;
        const imageBooks = event.target.img.value;
    
        const bookData = {
          name: this.state.bookName,
          description: this.state.bookDescription,
          img: this.state.imageBooks,
          UserModel : this.state.name,
         
        }
        // console.log(bookData)
        axios
    .post(`http://localhost:3010 /addBook`, bookData)
    .then( data => {
      console.log(data.data);
      this.setState({
        books : data.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
}   
  render() {
    return(
      <>
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
  
        </p>
        <div>
        <div>
        </div>
        {
          this.state.books.length &&
          <div>
            {
              
              this.state.books.map(books => {
                
                <h1>My books! </h1>
                return (
                  <>

              
                <>

                <Card className="bg-dark text-white">
<Card.Img src={books.img} alt="Card image" style={{width:'70%',padding:'10%' ,margin:'15%'}} />
<Card.ImgOverlay>
  <Card.Title>{books.name}</Card.Title>
  <Card.Text>
  {books.description}
  </Card.Text>
  <Card.Text>{books.status}</Card.Text>
</Card.ImgOverlay>
</Card>
                
                      </>

                 </>
                )
              })
            }
          </div>
        }
      </div>
       
  

        
      
     
      </Jumbotron>

      
      
      </>

    )
  }
}

export default withAuth0 (MyFavoriteBooks);



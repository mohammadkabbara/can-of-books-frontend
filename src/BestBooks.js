

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BestBooks.css";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import Card from 'react-bootstrap/Card'
import AddBooksForm from './FormAdd'
import Update from './Update'



class MyFavoriteBooks extends React.Component {

  constructor (props) {

    super(props);
    this.state = {
      books: [],
      bookName:'',
      bookDescription:'',
      bookStatus:'',
      showFormModal: false,
      server:process.env.REACT_APP_URL,
      showUpdateFormflag:''
    }
  }

  componentDidMount = () => {

    const  {user} = this.props.auth0;
  
    console.log(this.props.auth0);
    
    axios.get(`http://localhost:3010/books?email=${user.email}`).then(data => {
      this.setState ({
        books:data.data
      });
      console.log(data.data);
      
      }).catch(error => (error));
    } 
// ///////////////////////
//   updateBookName = (e) => this.setState({ bookName: e.target.value });
//   updateBookDescription = (e) => this.setState({ bookDescription: e.target.value });
//   updatebookStatus = (e) => this.setState({ bookStatus: e.target.value });

//   /////////////////////////////

  addBooks = async (event) => {
    const { user } = this.props.auth0;
    
    const bookName = event.target.name.value;
    const bookDescription = event.target.description.value;
    const bookStatus = event.target.status.value;

    try {
      const bodyData = {
        bookName: this.state.bookName,
        bookDescription: this.state.bookDescription,
        bookStatus: this.state.bookStatus,
        email: this.props.auth0.user.email
      }
      // console.log(bookStatus)
      console.log( this.state.description)
      const books = await axios.post(`${this.state.server}/addBooks`, bodyData);
      console.log(books.data);
      this.setState({
        books: books.data
      });
      this.state.closeForm();

    } catch (error) {
      console.log(error);
    }
  }

  deleteBook = async (index) => {
    // console.log(index);
    const { user } = this.props.auth0;
    const newArrayOfBooks = this.state.books.filter((books, idx) => {
      return idx !== index;
    });
    console.log(newArrayOfBooks);
    this.setState({
      books: newArrayOfBooks
    });
    const query = {
      email: user.email
    }
    await axios.delete(`${this.state.server}/books/${index}`, { params: query });
  }
  ///////////////////
  showUpdateForm = (index) => {
    // show the update form
    this.setState({
      showUpdateFormflag : true,
      bookName : this.state.books[index].bookName,
      bookDescription : this.state.books[index].bookDescription,
      bookStatus : this.state.books[index].bookStatus,
      idx : index
    })
    
  }


///////////////////

updateBook = (event) => {
  // send req to the server
  event.preventDefault();
  const updatedBookData = {
    // bookName = event.target.bookName.value,
    bookDescription: event.target.bookDescription.value,
    bookStatus:event.target.bookStatus.value,
    UserModel: this.state.name
  }
  axios
  .put(`${this.state.server}/updateBook/${this.state.idx}`,updatedBookData)
  .then(data =>{
    console.log(data.data);
    this.setState({
      // books : data.data
    })
  })
  .catch(err => {
    console.log(err);
  })
}

////////////////////////

  showForm = () => {
    this.setState({
      showFormModal: true,
    });

  }
  closeForm = () => {
    this.setState({
      showFormModal: false,
    });
  }

  /////////////////
  
  render() {
    return(
      <>
      <Jumbotron>
      <button onClick={this.showForm}>Add Books</button>
      
      {this.state.showFormModal &&
            <>
              <AddBooksForm
            
                ShowForm={this.state.showFormModal}
                closeForm={this.closeForm}
                addBooks={this.addBooks}
               
              />
            </>

            
          }
          { this.state.showUpdateFormflag && 
            <Update
            updateBook={this.updateBook}
            bookName={this.state.bookName}
            bookDescription={this.state.bookDescription}
            bookStatus={this.state.bookStatus}
          />
          }



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
              
              this.state.books.map((books , index) => {
                
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
  <button onClick={() => { this.deleteBook(index) }}>Delete</button>
  <button onClick={() => {this.showUpdateForm(index)}}>Update</button> 
  
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



import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class FormAdd extends Component {
    render() {
        return (


            <div>
            <Modal show={this.props.ShowForm} onHide={this.props.closeForm} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={(event) => this.props.addBooks(event)}>
                <label>Book name</label>
                <input type="text" name="bookName" />
                <label>Book Description</label>
                <input type="text" name="bookDescription" />
                <label>status books</label>
                <input type="src" name="bookStatus" />
                <input type="submit" value="Add book" />
                </form>
                </Modal.Body>

                <Modal.Footer> {console.log(this.props.addBooks)}
                    <Button variant="primary" onClick={this.props.addBooks}>
                        Add
      </Button>
                    <Button variant="secondary" onClick={this.props.closeForm}>
                        Close
      </Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}
}

export default FormAdd;


{/* <form onSubmit={(event) => this.props.addBooks(event)}>
                <label>Book name</label>
                <input type="text" name="bookName" />
                <label>Book Description</label>
                <input type="text" name="bookDescription" />
                <label>image books</label>
                <input type="src" name="imageBooks" />
                <input type="submit" value="Add book" />
                </form> */}
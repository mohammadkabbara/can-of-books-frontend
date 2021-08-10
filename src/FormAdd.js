import React, { Component } from 'react'

class FormAdd extends Component {
    render() {
        return (
            <form onSubmit={(event) => this.props.addBooks(event)}>
                <label>Book name</label>
                <input type="text" name="bookName" />
                <label>Book Description</label>
                <input type="text" name="bookDescription" />
                <label>image books</label>
                <input type="src" name="imageBooks" />
                <input type="submit" value="Add book" />
            </form>
        )
    }
}

export default FormAdd;
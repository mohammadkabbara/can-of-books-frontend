import React, { Component } from 'react'

class UpdateCatForm extends Component {
    render() {
        return (
            <form onSubmit={(e) => this.props.updateBook(e)}>
                <fieldset>
                    <legend>Update book Info</legend>
                    <label>book Name</label>
                    <input type="text" name="bookName" defaultValue={this.props.bookName} />
                    <label>book Description</label>
                    <input type="text" name="bookDescription" defaultValue
                        ={this.props.bookDescription} />

                    <label>book Status</label>
                    <input type="text" name="bookStatus" defaultValue={this.props.bookStatus} />
                    <input type="submit" value="Update" />
                </fieldset>
            </form>
        )
    }
}

export default UpdateCatForm;
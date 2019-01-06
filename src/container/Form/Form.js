import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    render () {
        return (
            <div className='Container'>
                <div className='formContainer'>
                    <h1>Add a wish to your WishList!</h1>
                    <form>
                        <input type="text" placeholder="Title" required/>
                        <textarea placeholder="Description" required/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;
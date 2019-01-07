import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    state = {
        id: null,
        title: '',
        description: '',
        submitted: false
    };

    render () {
        return (
            <div className='Container'>
                <div className='formContainer'>
                    <h1>Add a wish to your WishList!</h1>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Title" 
                            onChange={event => this.setState({title: event.target.value})}
                            required/>
                        <textarea 
                            placeholder="Description" 
                            onChange={event => this.setState({description: event.target.value})}
                            required/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;
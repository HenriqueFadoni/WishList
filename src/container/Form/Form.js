import React, { Component } from 'react';

import './Form.css';
import axios from '../../axios-setup';

class Form extends Component {
    state = {
        wish: {
            title: '',
            description: ''
        },
        submitted: false
    };

    formHandler = event => {
        event.preventDefault();
        const dataWish = {
            id: '_' + Math.random().toString(36).substr(2, 9),
            title: this.state.wish.title,
            description: this.state.wish.description
        }
        axios.post('/wish.json', dataWish)
            .then(response => console.log(response))
            .catch(error => console.log(error));   
    }

    onInputChange = (event, stateTarget) => {
        let newStateWish = {
            ...this.state.wish
        };
        let newStateWishElement = {
            ...this.state.wish[stateTarget]
        };

        const newStateElement = event.target.value;
        newStateWishElement = newStateElement;
        newStateWish[stateTarget] = newStateWishElement;

        this.setState({wish: newStateWish});
    }

    render () {
        return (
            <div className='Container'>
                <div className='formContainer'>
                    <h1>Add a wish to your WishList!</h1>
                    <form onSubmit={this.formHandler}>
                        <input
                            name="title" 
                            type="text" 
                            placeholder="Title" 
                            onChange={event => this.onInputChange(event, 'title')}
                            required/>
                        <textarea
                            name="description" 
                            placeholder="Description" 
                            onChange={event => this.onInputChange(event, 'description')}
                            required/>
                        <button 
                            type="button" 
                            onClick={this.formHandler}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;
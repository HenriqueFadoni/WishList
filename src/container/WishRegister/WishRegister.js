import React, { Component } from 'react';

import './WishRegister.css';
import Form from '../../component/Form/Form';
import axios from '../../axios-setup';

class WishRegister extends Component {
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
            id: this.idGenerator(),
            title: this.state.wish.title,
            description: this.state.wish.description
        }
        axios.post('/wish.json', dataWish)
            .then(response => console.log(response))
            .catch(error => console.log(error));   
    }

    idGenerator = () => {
        return '_' + Math.random().toString(36).substr(2, 9)
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
                <Form 
                    submitted={this.formHandler}
                    changed={this.onInputChange}/>
            </div>
        );
    }
}

export default WishRegister;
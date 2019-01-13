import React, { Component } from 'react';
import axios from '../../axios-setup';

class WishList extends Component {
    state = {
        wishesArray: []
    }

    componentDidMount() {
        axios.get('/wish.json')
            .then(response => {
                const wishes = Object.values(response.data);
                this.setState({wishesArray: wishes});
            })
            .catch(error => {
                console.log(error);
            });
    }



    render () {
        return (
            <div>
                <p>k</p>
            </div>
        );
    }
}

export default WishList;
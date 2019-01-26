import React, { Component } from 'react';
import axios from '../../axios-setup';

import List from '../../component/List/List';
import '../../sass/main.scss';

class WishList extends Component {
    state = {
        wishesArray: []
    }

    componentDidMount() {
        axios.get('/wish.json')
            .then(response => {
                const wishes = Object.values(response.data);
                this.setState({ wishesArray: wishes });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const wishList = this.state.wishesArray.map(wish => {
            return (
                <List
                    key={wish.id}
                    title={wish.title}
                    description={wish.description} />
            );
        })
        return (
            <div>
                <h3>This is your WISHLIST: </h3>
                {wishList}
            </div>
        );
    }
}

export default WishList;
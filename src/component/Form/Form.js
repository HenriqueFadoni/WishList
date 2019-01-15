import React from 'react';

import './Form.css';

const Form = props => {
    return (
        <div className='formContainer'>
            <h1>Add a wish to your WishList!</h1>
            <form onSubmit={props.submitted}>
                <input
                    name="title"
                    type="text"
                    placeholder="Title"
                    onChange={event => props.changed(event, 'title')}
                    required />
                <textarea
                    name="description"
                    placeholder="Description"
                    onChange={event => props.changed(event, 'description')}
                    required />
                <button
                    type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
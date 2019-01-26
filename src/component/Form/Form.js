import React from 'react';

import './Form.scss';

const Form = props => {
    return (
        <div className='formContainer'>
            <h1>MAKE A WISH</h1>
            <form onSubmit={props.submitted}>
                <input
                    name="title"
                    type="text"
                    className="wish-title-input"
                    placeholder="Title"
                    onChange={event => props.changed(event, 'title')}
                    required />
                <textarea
                    name="description"
                    className="wish-textarea-input"
                    placeholder="Description"
                    onChange={event => props.changed(event, 'description')}
                    required />
                <button
                    type="submit"
                    className="wish-btn-register-input">Submit</button>
            </form>
        </div>
    );
}

export default Form;
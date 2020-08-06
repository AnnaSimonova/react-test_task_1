import React, { Component } from 'react';
import './UserOutput.css';

class UserOutput extends Component {
    render() {
        return(
            <div className='user_output'>
                <span>{this.props.name}</span>
                <span>{this.props.lastname}</span>
            </div>
        );
    }
}

export default UserOutput;

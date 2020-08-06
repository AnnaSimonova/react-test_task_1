import React, {Component} from 'react';

class UserInput extends Component {
    render() {
        return(
            <input type='text' onChange={this.props.inputChange} defaultValue={this.props.defName} style={this.props.style}/>
        );
    }
}

export default UserInput;

import React from 'react';
import PropTypes from 'prop-types';

class Decrement extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number : props.number
        }
        this.subtract = this.subtract.bind(this);
    }
    subtract(){
        if (this.state.number === 0){
            alert('Cannot go any lower');
        }else{
            this.setState({
                number: this.state.number -1
            });
        }
    }
    render(){
        return <div>
            <h1>{this.state.number}</h1>
            <button onClick={this.subtract}>Decrement</button>
        </div>
    }
}

Decrement.propType = {
    number : PropTypes.number.isRequired
}

export default Decrement;
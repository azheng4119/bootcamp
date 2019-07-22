import React from 'react';
import PropTypes from 'prop-types';

class ContactCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : props.name,
            mobile : props.mobile,
            email : props.email,
            work : props.work
        }
    }
    render(){
        return <div id = 'ContactCard'>

        Name : {this.state.name} <br></br>
        Phone Number : {this.state.mobile} <br></br>
        Work Number : {this.state.work} <br></br>
        Email : {this.state.email} <br></br>


        </div>
    }
}

ContactCard.propTypes = {
    name : PropTypes.string.isRequired,
    mobile : PropTypes.number.isRequired,
    work : PropTypes.number,
    email : PropTypes.string.isRequired
}




export default ContactCard;
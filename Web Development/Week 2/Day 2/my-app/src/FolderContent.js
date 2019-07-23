import React from 'react';
//import PropTypes from 'prop-types';

class FolderContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fileVisibility : true
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState({
            fileVisibility : this.state.fileVisibility ? false : true
        })
    }
    render(){
        return <div>
            <ul>Home
                <li style = {{display : this.state.fileVisibility ? 'block' : 'none'}}>First File</li>
                <li style = {{display : this.state.fileVisibility ? 'block' : 'none'}}>Second File</li>
                <li style = {{display : this.state.fileVisibility ? 'block' : 'none'}}>Third File</li>
            </ul>
        <button onClick = {this.toggle}>Toggle</button>
        </div>
    }
}

export default FolderContent;
import React from 'react';
//import PropTypes from 'prop-types';

class FormEdit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            first : props.first,
            last : props.last,
            prevFirst : props.first,
            prevLast : props.last,
            editVisible : true,
            saveVisible : false
        }
        this.Edit = this.Edit.bind(this);
        this.Save = this.Save.bind(this);
        this.Cancel = this.Cancel.bind(this);
        this.handleChangeFirst = this.handleChangeFirst.bind(this);
        this.handleChangeLast = this.handleChangeLast.bind(this);
    }

    handleChangeFirst(event){
        this.setState({
            first : event.target.value
        })
    }

    handleChangeLast(event){
        this.setState({
            last : event.target.value
        })
    }

    Edit(){
        this.setState({
            editVisible: false,
            saveVisible : true
        })
    }

    Save(){
        this.setState({
            prevFirst : this.state.first,
            prevLast : this.state.last
        })
        this.Cancel();
    }

    Cancel(){
        this.setState({
            editVisible: true,
            saveVisible : false
        })
    }

    render(){
        return <form>
        <label>
          First Name: <span style = {{display : this.state.editVisible === true ? 'block' : 'none'}}>{this.state.prevFirst}</span>
            <input id = 'first' style = {{display : this.state.saveVisible === true ? 'block' : 'none'}} type="text" defaultValue={this.state.first} onChange={this.handleChangeFirst} /><br></br>
          Last Name : <span style = {{display : this.state.editVisible === true ? 'block' : 'none'}}>{this.state.prevLast}</span>
          <input id = 'last' style = {{display : this.state.saveVisible === true ? 'block' : 'none'}} type="text" defaultValue={this.state.last} onChange={this.handleChangeLast} /> <br></br>
        </label>
        <button type='button' onClick = {this.Edit} id = 'edit' style = {{display : this.state.editVisible === true ? 'block' : 'none'}}>Edit</button>
        <button type='button' onClick = {this.Save} id = 'save' style = {{display : this.state.saveVisible === true ? 'block' : 'none'}} >Save</button>
        <button type='button' onClick = {this.Cancel} id = 'save' style = {{display : this.state.saveVisible === true ? 'block' : 'none'}} >Cancel</button>
      </form>
    }
}





export default FormEdit;
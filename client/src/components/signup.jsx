import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''};

    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUser(event) {
    this.setState({username: event.target.value});
  }
  handleChangePass(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.username + this.state.password);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={this.state.username} onChange={this.handleChangeUser} />
        </label>
        <label>
          Password:
          <input type="text" value={this.state.password} onChange={this.handleChangePass} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default NameForm
import './App.css';
import React, { Component } from 'react';
import Register from './Component/Register';
import Greet from './Component/Greet';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegistered: false,
      name: '',
      email: '',
      password: '',
      showPass: false
    };
  }

 
  showPasswordHandler = () => {
    this.setState({ showPass: !this.state.showPass });
  };

 ''
  registerHandle = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    this.setState({
      name,
      email,
      password,
      isRegistered: true
    });
  };

  render() {
    return (
      <div>
        {this.state.isRegistered ? (
          <Greet name={this.state.name} email={this.state.email} />
        ) : (
          <Register
            submit={this.registerHandle}
            showPass={this.state.showPass}
            click={this.showPasswordHandler}
          />
        )}
      </div>
    );
  }
}

export default App;

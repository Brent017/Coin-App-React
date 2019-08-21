import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';



const my404 = () => {
  return (
    <div>
      You are lost :-/
    </div>
  );
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      email: '',
      image: '',
      loading: true,
    }
  }

  logIn = async(loginInfo) => {
    try {
      const loginResponse = await fetch('http://localhost:8000/user/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      const parsedResponse = await loginResponse.json();

      this.setState(() => {
        return {
          ...parsedResponse.data,
          loading: false
        }
      })

      return parsedResponse
    } catch(err) {
      console.log(err);
    }
  }
  register = async(data) => {
    try {
      const registerResponse = await fetch('httpd://localhost:8000/user/register', {
        method: 'POST',
        credentials: 'include',
        body: data,
        headers: {
          'enctype': 'multipart/form-data'
        }
      })

      const parsedResponse = await registerResponse.json();
      console.log(parsedResponse);

      this.setState({
        ...parsedResponse.data,
        loading: false
      })
      return parsedResponse;
    } catch(err) {
      console.log(err);
    }
  }
  render(){
    return (
      <main>
        <Switch>
          <Route exact path='/' render={(props) => <Login {...props} logIn={this.logIn} />} />
          <Route exact path='/register' render={(props) => <Register {...props} register={this.register} />} />
        </Switch>
      </main>
      )
  }
}

export default App;




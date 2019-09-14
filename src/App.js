import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Header from './Header';
import Profile from './Profile';
import CoinContainer from './CoinContainer';


const my404 = () => {
  return (
    <div>
      Page does not exist :-o
    </div>
  );
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      id: '',
      username: '',
      password: '',
      email: '',
      image: '',
      loading: true,
      isAuth: false
    }
  }

  logIn = async(loginInfo) => {
    try {
      const loginResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/user/login', {
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
          loading: false,
          isAuth: true
        }
      })

      return parsedResponse
    } catch(err) {
      console.log(err);
    }
  }

  register = async(data) => {
    console.log(data);
    try {
      const registerResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/user/register', {
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
        loading: false,
        isAuth: true
      })
      return parsedResponse;
    } catch(err) {
      console.log(err);
    }
  }

  logout = () => {
    // window.location.reload();
    this.setState({
      isAuth: false
    })
  }

  render(){
    return (
      <main>
        {this.state.isAuth ? <Header logout={this.logout} isAuth={this.state.isAuth} /> : null}
        <Switch>
          <Route exact path="/" render={(props) => <Login {...props} logIn={this.logIn} />} />
          <Route exact path="/register" render={(props) => <Register {...props} register={this.register} /> } />
          <Route exact path="/profile" render={(props) =>  <Profile {...props} userInfo={this.state}/> } />
          <Route exact path="/coins" render={(props) =>  <CoinContainer {...props} userInfo={this.state}/> } />
          <Route component={my404} />
        </Switch>
      </main>
      )
  }
}

export default App;




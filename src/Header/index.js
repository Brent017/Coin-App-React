import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item>
          <img src='https://vignette.wikia.nocookie.net/pawnstarsthegame/images/0/05/1924_Saint-Gaudens_Double_Eagle_Gold_Coin.png/revision/latest?cb=20160420000935' alt='1924 St. Gaudens gold coin' />
        </Menu.Item>

        <Menu.Item
          as={Link} to=''
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        >
          Login
        </Menu.Item>

        <Menu.Item
          as={Link} to='profile'
          name='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          as={Link} to='coins'
          name='coins'
          active={activeItem === 'coins'}
          onClick={this.handleItemClick}
        >
          My Coins
        </Menu.Item>

        <Menu.Item
          as={Link} to='login'
          name='logout'
          active={activeItem === 'logout'}
          onClick={this.handleItemClick}
        >
          Sign Out
        </Menu.Item>
      </Menu>
    )
  }
}

export default Header;
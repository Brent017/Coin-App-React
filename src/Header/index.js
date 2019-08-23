import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<ul>
				<li><Link to='/login'>Login</Link></li>
				<li><Link to='/profile'>Profile</Link></li>
				<li><Link to='/mycoins'>My coins</Link></li>
				<li><Link to='/login'>Log Out</Link></li>
			</ul>
		</header>
		)
}

export default Header;
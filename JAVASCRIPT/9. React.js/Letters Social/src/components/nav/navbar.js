import React from 'react';
import propTypes from 'prop-types';

import Link from '../router/Link';
import Logo from './logo';
import { logUserOut} from "../../backend/auth";

export const Navigation = ({ user }) => (
    <nav className="navbar">
        <Logo />
        {user.authenticated ? (
            <span className="user-nav-widget">
                <span>{user.name}</span>
                <img width={40} className="img-cicle" alt={user.name} src={user.profilePicture}/>
                <span onClick={() => logUserOut()}>
                    <i className="fa fa-sign-out"></i>
                </span>
            </span>
        ) : (
            <Link to="login">
                <button type="button"> Log in or sign up</button>
            </Link>
        )}
    </nav>
);

Navigation.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        authenticated: PropTypes.bool,
        profilePicture: PropTypes.string
    }).isRequired
};

export default Navigation;

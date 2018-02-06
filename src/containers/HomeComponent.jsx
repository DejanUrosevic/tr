import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LogInForm from '../components/LogIn/LogInForm';

class HomeComponent extends React.Component {

    render() {
        return (
            <div>
                <LogInForm />
            </div>
        )
    }
}

export default HomeComponent;


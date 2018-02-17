import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LogInForm from '../components/LogIn/LogInForm';
import Footer from '../components/footer/footer';


class LogInComponent extends React.Component {


  render() {
    return (
      <div className="b1" style={{overflow: 'hidden'}}>
       <div styles="{{overflow:hidden;}}">
          <header className="header" id="header">
            <div className="container">
              <figure className="logo animated fadeInDown delay-07s">
                <img src="/images/Transion_logo.png" className="img-circle img-responsive" alt="" />
              </figure>
              <h1 className="animated fadeInDown delay-07s">Welcome To <span style={{color:'#42cbf4'}}>Transion </span></h1>
            </div>
          </header>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
          <LogInForm />
        </div>

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(LogInComponent);

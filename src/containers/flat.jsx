import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect } from 'react-redux';
import { selectFlat } from '../actions';


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat}, 
    dispatch
    );
  };


class Flat extends Component {

  handleClick = () => {
    console.log(this)
    // need a redux action
    this.props.selectFlat()
  };


  render() {
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(${this.props.flat.imageUrl})`
    };
    return (
      <div className="flat card" style={style} onClick = {this.handleClick}>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
          <p>
            {this.props.flat.price}
            {' '}
            {this.props.flat.priceCurrency}
          </p>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Flat);

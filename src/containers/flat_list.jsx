import React, {Component} from "react";
import Flat from '../components/flat.jsx';

import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { setFlats } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
};

function mapStateToProps (state) {
  return {
    flats: state.flats
  } 
};

class FlatList extends Component {
  static defaultProps = { flats: [{
      "name": "Charm at the Steps of Montmartre",
      "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
      "price": 164,
      "priceCurrency": "EUR"
    }]
};

  componentWillMount() {
    // Dispatch action to update tree 
    this.props.setFlats();
  };

  render() {
    return(
      <div className="flat-list col-sm-7">
      {this.props.flats.map((flat) => <Flat flat={flat} key={flat.name} />)}
      </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
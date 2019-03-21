import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class User extends Component {
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.string,
  }
  render() {
    const { name, age } = this.props;

    return (
      <p>Nafn: {name}, aldur: {age}</p>
    );
  }
}

const mapStateToProps = state => ({
  name: state.profile.name,
  age: state.profile.age,
});

export default connect(mapStateToProps)(User);

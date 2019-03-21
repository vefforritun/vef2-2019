import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { update } from '../actions/profile';

class Profile extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.string,
  }

  state = {
    name: this.props.name,
    age: this.props.age,
  }

  onChange = (e) => {
    const { name, value } = e.target;

    if (name) {
      this.setState({ [name]: value });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { name, age } = this.state;
    const { dispatch } = this.props;

    dispatch(update(name, age));
  }

  render() {
    const { name, age } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Nafn
          <input autoComplete="off" type="text" name="name" value={name} onChange={this.onChange} />
        </label>
        <label>
          Aldur
          <input autoComplete="off" type="text" name="age" value={age} onChange={this.onChange} />
        </label>
        <button>Breyta</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  name: state.profile.name,
  age: state.profile.age,
});

export default connect(mapStateToProps)(Profile);

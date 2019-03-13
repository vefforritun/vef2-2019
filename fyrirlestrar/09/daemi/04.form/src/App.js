import React, { Component } from 'react';

function BrokenForm(props) {
  function handleSubmit(e) {
    e.preventDefault();
    // ???
    console.log(e);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <button>Submit</button>
    </form>
  );
}

class NameForm extends React.Component {
  state = { value: '' }

  handleChange = (e) => {
    const { value } = e.target;

    if (value.length < 10) {
      this.setState({ value: e.target.value });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`A name was submitted: ${this.state.value}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

class EssayForm extends React.Component {
  state = {
    value: 'Please write an essay about your favorite DOM element.',
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`An essay was submitted: ${this.state.value}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

class FlavorForm extends React.Component {
  state = { value: 'coconut' };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your favorite flavor is: ${this.state.value}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

class Reservation extends React.Component {
  state = {
    isGoing: true,
    numberOfGuests: 2,
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { isGoing, numberOfGuests } = this.state;

    alert(`Going? ${isGoing}.`);

    if (isGoing) {
      alert(`Number of guests: ${numberOfGuests}`);
    }
  }

  handleInputChange = (e) => {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <BrokenForm />
        <hr />
        <NameForm />
        <hr />
        <EssayForm />
        <hr />
        <FlavorForm />
        <hr />
        <Reservation />
      </div>
    );
  }
}

export default App;

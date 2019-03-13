import React, { Component } from 'react';

class CustomTextInput extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  focusTextInput = () => {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.inputRef} />
        <button onClick={this.focusTextInput}>
          focus
        </button>
      </div>
    );
  }
}

class UncontrolledForm extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${this.inputRef.current.value}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          defaultValue="Bob"
          type="text"
          ref={this.inputRef} />
        <button>Submit</button>
      </form>
    );
  }
}

class FileInput extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`File = ${this.inputRef.current.files[0].name}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        File:
        <input
          type="file"
          ref={this.inputRef}
          />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

class Video extends Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  onMouseOver = () => {
    this.videoRef.current.play();
  }

  onMouseOut = () => {
    this.videoRef.current.pause();
  }

  render() {
    return (
      <video
        src="/bunny.mp4"
        paused
        ref={this.videoRef}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      />
    );
  }
}

const html = 'First &middot; Second';

class App extends Component {
  render() {
    return (
      <div>
        <CustomTextInput />
        <br />
        {html}
        <br />
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <br />
        <UncontrolledForm />
        <br />
        <FileInput />
        <br />
        <Video />
      </div>
    );
  }
}

export default App;

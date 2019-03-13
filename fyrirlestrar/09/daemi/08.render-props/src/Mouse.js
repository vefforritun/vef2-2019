import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cat extends Component {
  static propTypes = {
    mouse: PropTypes.object,
  }

  render() {
    const { mouse } = this.props;

    // height of image
    const height = 98;
    const width = 51;

    const style = {
      position: 'absolute',
      left: mouse.x - width,
      top: mouse.y - height,
    };

    return (
      <img
        alt=""
        src="/cat.png"
        style={style}
      />
    );
  }
}

class Mouse extends Component {
  static propTypes = {
    render: PropTypes.func,
  }

  state = { x: 0, y: 0 }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
    console.log(e.clientX, e.clientY);
  }

  render() {
    const style = {
      height: '100vh',
      width: '100vw',
      backgroundColor: 'green',
    };

    return (
      <div
        style={style}
        onMouseMove={this.handleMouseMove}
      >
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default class MouseTracker extends Component {
  render() {
    return (
      <div>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </div>
    );
  }
}

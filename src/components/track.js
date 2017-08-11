import React, { Component } from 'react';

class Track extends Component {
  constructor(props) {
    super(props);

    this.state = {
      track: props.track
    };
  }

  render() {
    return (
      <li onClick={event => this.props.onTrackSelected(this.state.track)} className="list-group-item" key={this.state.track.id}>
        {this.state.track.title}
      </li>
    );
  }
}

export default Track;

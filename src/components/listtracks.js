import React, { Component } from 'react';
import Track from './track.js';

class ListTracks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trackSelected: null
    };

    this.player = new Audio;
  }

  dispTracks() {
    if (typeof this.props.list !== 'undefined')
    {
      return this.props.list.map(track => {
        return (
          <div>
            <Track onTrackSelected={track => this.play(track)} key={track.id} track={track}/>
          </div>
        );
      });
    }
  }

  play(track) {
    this.player.src = track.preview;
    this.player.load();
    this.player.play();
  }

  render() {
    return (
      <div>
        <ul className="column">
          {this.dispTracks()}
        </ul>
      </div>
    );
  }
}

export default ListTracks;

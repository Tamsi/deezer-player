import React, { Component } from 'react';

class Artist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: props.artist
    }
  }

  render() {
    return (
      <li onClick={() => this.props.onArtistSelect(this.state.artist)} className="list-group-item" key={this.state.artist.id}>
        <div className="media-left">
            <img alt="" src={this.state.artist.picture_small}/>
        </div>
        <div className="media-body">
          <div className="media-heading"><h3>{this.state.artist.name}</h3></div>
        </div>
      </li>
    );
  }
}

export default Artist;

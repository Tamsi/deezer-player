import React, { Component } from 'react';

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      album: props.album
    }
  }

  render() {
    return (
      <li onClick={() => this.props.onAlbumSelect(this.state.album)} className="list-group-item" key={this.state.album.id}>
        <div className="media-left">
            <img alt="" src={this.state.album.cover_small}/>
        </div>
        <div className="media-body">
          <div className="media-heading"><p>{this.state.album.title}</p></div>
        </div>
      </li>
    );
  }
}

export default Album;

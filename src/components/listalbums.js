import React, { Component } from 'react';
import Album from './album.js';

class ListAlbums extends Component {
  dispAlbums() {
    if (typeof this.props.list !== 'undefined')
    {
      return this.props.list.map(album => {
        if (this.props.albumSelected !== null && this.props.albumSelected.id == album.id)
        {
          return (
            <div className="selected">
              <Album onAlbumSelect={this.props.onAlbumSelect} key={album.id} album={album}/>
            </div>
          );
        }
        else
        {
          return (
            <div>
              <Album onAlbumSelect={this.props.onAlbumSelect} key={album.id} album={album}/>
            </div>
          );
        }
      });
    }
  }

  render() {
    return (
      <div>
        <ul className="column">
          {this.dispAlbums()}
        </ul>
      </div>
    );
  }
}

export default ListAlbums;

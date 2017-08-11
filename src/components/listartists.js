import React, { Component } from 'react';
import Artist from './artist.js';

class ListArtists extends Component {
  dispArtists() {
    if (typeof this.props.list !== 'undefined')
    {
      return this.props.list.map(artist => {

        if (this.props.artistSelected !== null && this.props.artistSelected.id === artist.id) {
          return (
            <div className="selected">
              <Artist onArtistSelect={this.props.onArtistSelect} key={artist.id} artist={artist}/>
            </div>
          );
        } else {
          return (
            <div>
              <Artist onArtistSelect={this.props.onArtistSelect} key={artist.id} artist={artist}/>
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
          {this.dispArtists()}
        </ul>
      </div>
    );
  }
}

export default ListArtists;

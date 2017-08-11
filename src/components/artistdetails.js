import React, { Component } from 'react';

class ArtistDetails extends Component {
  render() {
    return (
      <div>
        {(this.props.artist) ?
            (<div>
              <img alt="" src={this.props.artist.picture}/>
              <h2>{this.props.artist.name}</h2>
            </div>)
          :
            <div></div>
        }
      </div>
    );
  }
}

export default ArtistDetails;

import React, { Component } from 'react';
import SearchBar from './components/searchbar';
import ListArtists from './components/listartists';
import ListAlbums from './components/listalbums';
import ListTracks from './components/listtracks';
import ArtistDetails from './components/artistdetails'
import './App.css';

const APP_ID = '248582';
const REDIRECT_URI = 'http://localhost:3000';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: [],
      albums: [],
      tracks: [],
      albumSelected: null,
      artistSelected: null
    };

    this.token = '';
    this.url = `https://connect.deezer.com/oauth/auth.php?app_id=${APP_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&perms=basic_access,email`;
    this.token_array = window.location.hash.substr(1).split('&').map(function (element) {
      return (element.split('='));
    }).filter(function (element) {
      return (element[0] === 'access_token');
    })
    if (typeof this.token_array[0] !== 'undefined')
      this.token = this.token_array[0][1];
  }

  DEEZERSearch(term) {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/artist?q=${term}`,
      {
          headers: {
            'Authorization': 'Bearer' + this.token
          }
      }
    )
    .then((response) => {
      return (response.json());
    })
    .then((result) => {
      this.setState({artists: result.data});
    })
  }

  getAlbum(artist) {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.deezer.com/artist/${artist.id}/albums`,
      {
          headers: {
            'Authorization': 'Bearer' + this.token
          }
      }
    )
    .then((response) => {
      return (response.json());
    })
    .then((albums) => {
      console.log(albums)
      this.setState(
        {
          artistSelected: artist,
          albums: albums.data
        }
      );
    })
  }

  getTracks(album) {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.deezer.com/album/${album.id}/tracks`,
      {
          headers: {
            'Authorization': 'Bearer' + this.token
          }
      }
    )
    .then((response) => {
      return (response.json());
    })
    .then((tracks) => {
      console.log(tracks)
      this.setState(
        {
          albumSelected: album,
          tracks: tracks.data
        }
      );
    })
  }

  render() {
    return (
      <div className="App">
        {(this.token === '') ?
            <a href={this.url}><button>Login</button></a>
          :
            (<div>
              <SearchBar onChangeTerm={(term) => this.DEEZERSearch(term)}/>
              <ListArtists onArtistSelect={(artist) => this.getAlbum(artist)} list={this.state.artists} artistSelected={this.state.artistSelected}/>
              <ListAlbums onAlbumSelect={(album) => this.getTracks(album)} list={this.state.albums} albumSelected={this.state.albumSelected}/>
              <ListTracks list={this.state.tracks}/>
            </div>)
        }
      </div>
    );
  }
}

export default App;

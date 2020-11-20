import React from "react";
import {API_URL} from "../api";
import {Link} from "react-router-dom";
import TitleItem from "../components/titleItem";
import {favorites} from "../store/favorites";
import {fakeAuth} from "../fakeAuth";

class ArtistDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            artistData: {},
            albums: [],
            titles: [],
        }
    }

    isConnected() {
        return fakeAuth.isAuthenticated;
    }

    async componentDidMount() {
        await fetch(API_URL + `artistes/${this.state.id}`, {
            "method": "GET",
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    artistData: response
                })
            })
            .catch(err => {
                console.log(err);
            });

        await this.getAlbumsByArtist();
        await this.getSongsByArtist();
    }

    getAlbumsByArtist() {
        fetch(API_URL + 'albums', {
            "method": "GET",
        })
            .then(response => response.json())
            .then(response => {
                let albumsOfArtist = [];
                response.forEach((album) => {
                    if (album.artiste.id_artiste === parseInt(this.state.id))
                        albumsOfArtist.push(album);
                });
                this.setState({
                    albums: albumsOfArtist
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    getSongsByArtist() {
        fetch(API_URL + 'titres', {
            "method": "GET",
        })
            .then(response => response.json())
            .then(response => {
                let songsOfArtist = [];
                response.forEach((song) => {
                    if (song.album.artiste.id_artiste === parseInt(this.state.id))
                        songsOfArtist.push(song);
                });
                this.setState({
                    titles: songsOfArtist
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    addToFavorites(type, item) {
        switch(type) {
            case 'album':
                favorites.addAlbum(item);
                break;
            case 'artist':
                favorites.addArtist(item);
                break;
        }
        fetch(API_URL + `favoris/${favorites.getId()}`, {
            "method": "PUT",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": {
                "favorisIn": favorites.format()
            }
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="artistDetails">
                <p className="panel-heading">
                    {this.state.artistData.nom}
                    {this.isConnected() &&
                    <span className="icon is-small" onClick={() => this.addToFavorites('artist', this.state.artistData)}>
                        <i className={favorites.isFavoriteArtist(this.state.artistData.id_artiste) ? 'fas fa-bookmark' : 'far fa-bookmark'}/>
                    </span>
                    }
                </p>
                <br/>
                <div className="is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-wrap">
                    {this.state.albums.map((item) =>
                        <div className="album" key={item.id_album}>
                            <div className="card">
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-48x48">
                                                {item && item.image !== "string" ? (
                                                    <img src={item.image} alt="Placeholder image"/>
                                                ) : (
                                                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                                )}
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            {this.isConnected() &&
                                            <span className="icon is-small" onClick={() => this.addToFavorites('album', item)}>
                                                <i className={favorites.isFavoriteAlbum(item.id_album) ? 'fas fa-bookmark' : 'far fa-bookmark'}/>
                                            </span>
                                            }
                                            <p className="title is-4">{item.nom}</p>
                                            {item.date !== "string" ? (
                                                <time>{item.date}</time>
                                            ) : (
                                                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                            )}
                                            {/*<p className="subtitle is-6">{item.date}</p>*/}
                                        </div>
                                    </div>

                                    <div className="content">
                                        {item.description &&
                                            <p>{item.description}.</p>
                                        }
                                        <br/>
                                        <Link to={'/album/' + item.id_album}>View more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {this.state.titles.length > 0 &&
                <div className="titles">
                    <h2 className="is-size-5 has-text-white">Titres</h2>
                    <table className="table is-fullwidth is-hoverable" style={{textAlign: 'center',}}>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Titre</th>
                            <th>Artiste</th>
                            <th>Album</th>
                            <th>Durée</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.titles.map((item) => <TitleItem key={item.id_titre} songData={item}/>)}
                        </tbody>
                    </table>
                </div>
                }
            </div>

        );
    }
}

export default ArtistDetails

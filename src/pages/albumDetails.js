import React from "react";
import {API_URL} from "../api";
import TitleItem from "../components/titleItem";
import {favorites} from "../store/favorites";
import {fakeAuth} from "../fakeAuth";

class AlbumDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            albumData: {},
            titles: []
        }
    }

    isConnected() {
        return fakeAuth.isAuthenticated;
    }

    async componentDidMount(){
        await fetch(API_URL + `albums/${this.state.id}`, {
            "method": "GET",
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    albumData: response
                })
            })
            .catch(err => {
                console.log(err);
            });

        await this.getSongsByAlbum();
    }

    getSongsByAlbum() {
        fetch(API_URL + 'titres', {
            "method": "GET",
        })
            .then(response => response.json())
            .then(response => {
                let songsOfAlbum = [];
                response.forEach((song) => {
                    if (song.album.id_album === parseInt(this.state.id))
                        songsOfAlbum.push(song);
                });
                this.setState({
                    titles: songsOfAlbum
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    addToFavorites(item) {
        console.log(favorites.getId());
        favorites.addAlbum(item);
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
            <div className="albumDetails">
                <section className="panel">
                    <p className="panel-heading">
                        {this.state.albumData.nom}
                        {this.isConnected() &&
                        <span className="icon is-small" onClick={() => this.addToFavorites(this.state.albumData)}>
                            <i className={favorites.isFavoriteAlbum(this.state.albumData.id_album) ? 'fas fa-bookmark' : 'far fa-bookmark'}/>
                        </span>
                        }
                    </p>
                    <div className="panel-block">
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
                </section>
            </div>

        );
    }
}

export default AlbumDetails

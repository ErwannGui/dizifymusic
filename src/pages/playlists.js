import React from "react";
import {API_URL} from "../api";
import {Link} from "react-router-dom";
import {fakeAuth} from "../fakeAuth";

export default class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: [],
        };
    }

    async componentDidMount() {
        await this.getPlaylists()
    }

    getPlaylists() {
        fetch(API_URL + 'playlists', {
            "method": "GET",
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    playlists: response
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    addPlaylist() {
        // une playlist sans nom lol ...
        fetch(API_URL + 'playlists', {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify({
                date_creation: new Date().toDateString(),
                titresIds: [],
                utilisateurId: fakeAuth.id
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                this.setState({
                    playlists: response
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <section className="playlist">
                <button className="button is-pulled-right is-link" onClick={() => this.addPlaylist()}>
                    <span className="icon">
                        <i className="fas fa-plus"/>
                    </span>
                </button>
                <h1 className="has-text-white is-size-4">Playlists</h1>
                <div className="is-flex is-flex-direction-row is-justify-content-flex-start">
                {this.state.playlists.map((item) =>
                <Link to={'/playlist/' + item.id_playlist} key={item.id_playlist}>
                    <div className="card">
                        {item.nom ? item.nom : item.id_playlist}
                    </div>
                </Link>
                )}
                </div>
            </section>
        );
    }
}

import React from "react";
import {API_URL} from "../api";
import TitleItem from "../components/titleItem";

export default class PlaylistDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            playlistData: {},
            titles: []
        }
    }

    async componentDidMount(){
        await fetch(API_URL + `playlists/${this.state.id}`, {
            "method": "GET",
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    playlistData: response
                })
            })
            .catch(err => {
                console.log(err);
            });

        await this.getSongsByPlaylist();
    }

    getSongsByPlaylist() {
        fetch(API_URL + 'titres', {
            "method": "GET",
        })
            .then(response => response.json())
            .then(response => {
                let songsOfPlaylist = [];
                response.forEach((song) => {
                    if (this.state.playlistData.titresIds.findIndex(song.id_titre) !== -1)
                        songsOfPlaylist.push(song);
                });
                this.setState({
                    titles: songsOfPlaylist
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="playlistDetails">
                <section className="panel">
                    <div className="panel-block">
                        <table className="table is-fullwidth is-hoverable" style={{textAlign: 'center'}}>
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

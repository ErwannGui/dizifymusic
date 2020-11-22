import React from "react";
import {API_URL} from "../api";
import {Link} from "react-router-dom";
import ArtistItem from "../components/artistItem";
import AlbumItem from "../components/albumItem";
import {favorites} from "../store/favorites";
import {fakeAuth} from "../fakeAuth";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            albums: []
        };
    }

    isConnected() {
        return fakeAuth.isAuthenticated
    }

    async componentDidMount() {
        /*const apiRepository = new Api();
        this.setState({
            artists: await apiRepository.list('artistes'),
            albums: await apiRepository.list('albums')
        });*/

        await this.getArtists();
        await this.getAlbums();

        if (this.isConnected())
            await this.getFavorites();
    }

    getArtists() {
        fetch(API_URL + 'artistes', {
            "method": "GET",
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    artists: response
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    getAlbums() {
        fetch(API_URL + 'albums', {
            "method": "GET",
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    albums: response
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    getFavorites() {
        fetch(API_URL + `favoris`, {
            "method": "GET",
        })
            .then(response => response.json())
            .then(response => {
                for (let i = 0; i < response.length; i++) {
                    if (fakeAuth.id === response[i].utilisateur.id_utilisateur)
                        favorites.setFavorites(response[i]);
                }
                if (favorites.getId() === null) {
                    favorites.createDefault(fakeAuth.id);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <section className="homepage">
                <h1 className="has-text-white is-size-1">Welcome to Dizify</h1>
                <div className="artists">
                    <h2 className="is-size-5 has-text-white">Artists suggestions</h2>
                    <br/>
                    <div className="is-flex is-flex-direction-row is-justify-content-flex-start">
                        {this.state.artists.map((item) => <Link to={"/artist/" + item.id_artiste} key={item.id_artiste} className="card-link"><ArtistItem artistData={item}/></Link>)}
                    </div>
                    <br/>
                </div>
                <div className="albums">
                    <h2 className="is-size-5 has-text-white">Recent albums</h2>
                    <br/>
                    <div className="is-flex is-flex-direction-row is-justify-content-flex-start">
                    {this.state.albums.map((item) => <Link to={"/album/" + item.id_album} key={item.id_album} className="card-link"><AlbumItem albumData={item}/></Link>)}
                    </div>
                    <br/>
                </div>
            </section>
        );
    }
}

export default Home

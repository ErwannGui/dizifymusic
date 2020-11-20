import React from 'react';
import {favorites} from "../store/favorites";
import {API_URL} from "../api";
import {fakeAuth} from "../fakeAuth";

export default class TitleItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.songData
        };
    }

    isConnected() {
        return fakeAuth.isAuthenticated;
    }

    addToFavorites(item) {
        favorites.addTitle(item);
        setTimeout(() => {
            fetch(API_URL + `favoris/${favorites.getId()}`, {
                "method": "PUT",
                "headers": {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                "body": JSON.stringify(favorites.format())
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                })
                .catch(err => {
                    console.log(err);
                });
        }, 500);
    }

    render() {
        const { data } = this.state;
        return (
            <tr>
                <td>
                    {this.isConnected() &&
                    <span className="icon is-small" onClick={() => this.addToFavorites(data)}>
                        <i className={favorites.isFavoriteTitle(data.id_titre) ? 'fas fa-star' : 'far fa-star'}/>
                    </span>
                    }
                </td>
                <td>{data.nom}</td>
                <td>
                    {data.album.artiste ?
                        (data.album.artiste.nom)
                        : (data.artist)
                    }
                </td>
                <td>
                    {data.album ?
                        (data.album.nom)
                        : (data.album)
                    }
                </td>
                <td>{data.duree}</td>
            </tr>
        )
    }
}

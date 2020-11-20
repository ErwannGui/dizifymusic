import React from "react";
import Table from "../components/tables";
import TitleItem from "../components/titleItem";
import {API_URL} from "../api";

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 1,
            edition: false,
            columns: [],
            data: []
        }
    }

    async componentDidMount() {
        await this.getArtists();
    }

    getArtists() {
        fetch(API_URL + 'artistes', {
            "method": "GET",
        })
            .then(response => response.json())
            .then(response => {
                let headers = Object.keys(response[0]);
                this.setState({
                    columns: headers,
                    data: response
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    toggleEdition() {
        this.setState({
            edition: true
        })
    }

    delete(type, id) {
        fetch(API_URL + type + `/${id}`, {
            "method": "DELETE",
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
            <section className="admin">
                <h1 className="has-text-white is-size-2">Interface Administrateur</h1>
                <div className="tabs is-centered is-boxed is-toggle is-fullwidth">
                    <ul>
                        <li className={this.state.currentTab === 1 ? 'is-active' : ''}>
                            <a>
                                <span className="icon is-small">
                                    <i className="fas fa-address-card" aria-hidden="true"></i>
                                </span>
                                <span>Artistes</span>
                            </a>
                        </li>
                        <li className={this.state.currentTab === 2 ? 'is-active' : ''}>
                            <a>
                                <span className="icon is-small">
                                    <i className="fas fa-music" aria-hidden="true"></i>
                                </span>
                                <span>Titres</span>
                            </a>
                        </li>
                        <li className={this.state.currentTab === 3 ? 'is-active' : ''}>
                            <a>
                                <span className="icon is-small">
                                    <i className="fas fa-compact-disc" aria-hidden="true"></i>
                                </span>
                                <span>Albums</span>
                            </a>
                        </li>
                        <li className={this.state.currentTab === 4 ? 'is-active' : ''}>
                            <a>
                                <span className="icon is-small">
                                    <i className="fas fa-user" aria-hidden="true"></i>
                                </span>
                                <span>Utilisateurs</span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/*<Table />*/}
                <div className="table-container">
                    <table className="table is-fullwidth is-hoverable" style={{textAlign: 'center'}}>
                        <thead>
                        <tr>
                            {this.state.columns.map((item) => <th>{item.name}</th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.currentTab === 1 &&
                            this.state.data.map((index, item) =>
                                <tr key={index}>
                                    <td>{item.id_artiste}</td>
                                    <td>{item.nom}</td>
                                    <td>{item.image}</td>
                                    <td><a onClick={() => this.delete('artistes', item.id_artiste)}>
                                        <span className="icon is-small">
                                            <i className="fas fa-trash-alt" aria-hidden="true"></i>
                                        </span>
                                    </a><a onClick={this.toggleEdition}>
                                        <span className="icon is-small">
                                            <i className="fas fa-edit" aria-hidden="true"></i>
                                        </span>
                                    </a></td>
                                </tr>
                            )
                        }
                        {this.state.currentTab === 2 &&
                            this.state.data.map((index, item) =>
                                <tr key={index}>
                                    <td>{item.id_titre}</td>
                                    <td>{item.nom}</td>
                                    <td>{item.duree}</td>
                                    <td>{item.album.nom}</td>
                                    <td>{item.album.artiste.nom}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

export default Admin

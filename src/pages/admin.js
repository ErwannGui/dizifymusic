import React from "react";
import Table from "../components/tables";
import TitleItem from "../components/titleItem";
import {API_URL} from "../api";

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 1,
            type: '',
            edition: 0,
            columns: [],
            data: [],
            modal_class: ""
        }
    }

    async componentDidMount() {
        await this.getArtists();
    }

    changeTab(index) {
        switch(index) {
            case 1:
                this.getArtists();
                break;
            case 2:
                this.getTitles();
                break;
            case 3:
                this.getAlbums();
                break;
            case 4:
                this.getUsers();
                break;
            default:
                this.getArtists();
                break;
        }

        setTimeout(() => {
            this.setState({
                currentTab: index
            });
        }, 500)
    }

    getArtists() {
        fetch(API_URL + 'artistes', {
            "method": "GET",
        })
            .then(response => response.json())
            .then(response => {
                let headers = Object.keys(response[0]);
                console.log(headers);
                this.setState({
                    type: 'artistes',
                    columns: headers,
                    data: response
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    getTitles() {
        fetch(API_URL + 'titres', {
            "method": "GET",
        })
            .then(response => response.json())
            .then(response => {
                let headers = Object.keys(response[0]);
                console.log(headers);
                this.setState({
                    type: 'titres',
                    columns: headers,
                    data: response
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
                let headers = Object.keys(response[0]);
                console.log(headers);
                this.setState({
                    type: 'albums',
                    columns: headers,
                    data: response
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    getUsers() {
        fetch(API_URL + 'utilisateurs', {
            "method": "GET",
        })
            .then(response => response.json())
            .then(response => {
                let headers = Object.keys(response[0]);
                console.log(headers);
                this.setState({
                    type: 'utilisateurs',
                    columns: headers,
                    data: response
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    toggleEdition(id) {
        this.setState({
            edition: id
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

    edit(e, type, id) {
        e.preventDefault();
        let body = {};
        switch(type) {
            case 'artistes':
                body = {
                    [e.target[1].name]: e.target[1].value,
                    [e.target[2].name]: e.target[2].value
                }
                body = JSON.stringify(body);
                break;
            case 'titres':
                body = JSON.stringify({
                    [e.target[1].name]: e.target[1].value,
                    [e.target[2].name]: e.target[2].value,
                    [e.target[3].name]: e.target[3].value
                });
                break;
        }
        fetch(API_URL + type + `${id}`, {
            "method": "PUT",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": body
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
    }

    modal_add(){
        this.setState({modal_class: "is-active"})
    }

    modal_close() {
        this.setState({modal_class: ""})
    }

    render() {
        return (
            <section className="admin">
                <h1 className="has-text-white is-size-2">Interface Administrateur</h1>
                <div className="tabs is-centered is-boxed is-toggle is-fullwidth">
                    <ul>
                        <li className={this.state.currentTab === 1 ? 'is-active' : ''} onClick={() => this.changeTab(1)}>
                            <a>
                                <span className="icon is-small">
                                    <i className="fas fa-address-card" aria-hidden="true"></i>
                                </span>
                                <span>Artistes</span>
                            </a>
                        </li>
                        <li className={this.state.currentTab === 2 ? 'is-active' : ''} onClick={() => this.changeTab(2)}>
                            <a>
                                <span className="icon is-small">
                                    <i className="fas fa-music" aria-hidden="true"></i>
                                </span>
                                <span>Titres</span>
                            </a>
                        </li>
                        <li className={this.state.currentTab === 3 ? 'is-active' : ''} onClick={() => this.changeTab(3)}>
                            <a>
                                <span className="icon is-small">
                                    <i className="fas fa-compact-disc" aria-hidden="true"></i>
                                </span>
                                <span>Albums</span>
                            </a>
                        </li>
                        <li className={this.state.currentTab === 4 ? 'is-active' : ''} onClick={() => this.changeTab(4)}>
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
                    <form onSubmit={(e) => this.edit(e,  this.state.type)}>
                    <table className="table is-fullwidth is-hoverable" style={{textAlign: 'center'}}>
                        <thead>
                        <tr>
                            {this.state.columns.map((item, index) => <th key={index}>{item}</th>)}
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.currentTab === 1 &&
                            this.state.data.map((item, index) =>
                                <tr key={index}>
                                    <td>
                                        <input className="input" name={this.state.columns[0]} type="hidden" value={item.id_artiste}/>
                                        {item.id_artiste}
                                    </td>
                                    <td>
                                        {this.state.edition === item.id_artiste ?
                                            <input className="input" name={this.state.columns[1]} type="text" defaultValue={item[this.state.columns[1]]}/> : (item[this.state.columns[1]])
                                        }
                                    </td>
                                    <td>
                                        {this.state.edition === item.id_artiste ?
                                            <input className="input" name={this.state.columns[2]} type="url" defaultValue={item[this.state.columns[2]]}/> : (item[this.state.columns[2]])
                                        }
                                    </td>
                                    <td><a onClick={() => this.delete('artistes', item.id_artiste)}>
                                        <span className="icon is-small">
                                            <i className="fas fa-trash-alt" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                    {this.state.edition === parseInt(item.id_artiste) ? (
                                        <a onClick={() => this.toggleEdition(0)}>
                                            <span className="icon is-small">
                                                <i className="fas fa-check" aria-hidden="true"></i>
                                            </span>
                                        </a>
                                        ) : (
                                        <a onClick={() => this.toggleEdition(item.id_artiste)}>
                                            <span className="icon is-small">
                                                <i className="fas fa-edit" aria-hidden="true"></i>
                                            </span>
                                        </a>
                                        )}
                                    </td>
                                </tr>
                            )
                        }
                        {this.state.currentTab === 2 &&
                            this.state.data.map((item, index) =>
                                <tr key={index}>
                                    <td>
                                        <input className="input" name={this.state.columns[0]} type="hidden" value={item.id_titre}/>
                                        {item.id_titre}
                                    </td>
                                    <td>
                                        {this.state.edition === item.id_titre ?
                                            <input className="input" name={this.state.columns[1]} type="text" defaultValue={item[this.state.columns[1]]}/> : (item[this.state.columns[1]])
                                        }
                                    </td>
                                    <td>
                                        {this.state.edition === item.id_titre ?
                                            <input className="input" name={this.state.columns[2]} type="text" defaultValue={item[this.state.columns[2]]}/> : (item[this.state.columns[2]])
                                        }
                                    </td>
                                    <td>
                                        <input className="input" name="albumId" type="hidden" value={item[this.state.columns[3]].id_album}/>
                                        {item[this.state.columns[3]].nom}
                                    </td>
                                    <td>
                                        <a onClick={() => this.delete('artistes', item.id_titre)}>
                                            <span className="icon is-small">
                                                <i className="fas fa-trash-alt" aria-hidden="true"></i>
                                            </span>
                                        </a>
                                        {this.state.edition === item.id_titre ? (
                                            <a onClick={() => this.toggleEdition(0)}>
                                                <span className="icon is-small">
                                                    <i className="fas fa-check" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        ) : (
                                            <a onClick={() => this.toggleEdition(item.id_titre)}>
                                                <span className="icon is-small">
                                                    <i className="fas fa-edit" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        )}
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                    </form>
                </div>
                <div className={this.state.modal_class + " modal modal_add" } >
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Modal title</p>
                            <button className="delete" aria-label="close"  onClick={() => this.modal_close()}/>
                        </header>
                        <section className="modal-card-body">
                            <div className="content">
                                <h1>Hello World</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus
                                    ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu
                                    lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel,
                                    interdum mattis neque.</p>
                                <h2>Second level</h2>
                                <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque
                                    condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel
                                    cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus
                                    facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
                                <ul>
                                    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                                    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
                                    <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
                                    <li>Ut non enim metus.</li>
                                </ul>
                                <h3>Third level</h3>
                                <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>.
                                    Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu
                                    rutrum tellus.</p>
                                <ol>
                                    <li>Donec blandit a lorem id convallis.</li>
                                    <li>Cras gravida arcu at diam gravida gravida.</li>
                                    <li>Integer in volutpat libero.</li>
                                    <li>Donec a diam tellus.</li>
                                    <li>Aenean nec tortor orci.</li>
                                    <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
                                    <li>Vivamus maximus ultricies pulvinar.</li>
                                </ol>
                                <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit
                                    ipsum, ut blandit est tellus sit amet turpis.
                                </blockquote>
                                <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo
                                    sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis
                                    nisi molestie.</p>
                                <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate
                                    risus in luctus. Maecenas vestibulum interdum commodo.</p>
                                <p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit
                                    sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>
                            </div>
                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is-success">Save changes</button>
                            <button className="button" onClick={() => this.modal_close()}>Cancel</button>
                        </footer>
                    </div>
                </div>
                <button className="button is-pulled-right is-link" onClick={() => this.modal_add()}>
                    <span className="icon">
                        <i className="fas fa-plus"/>
                    </span>
                </button>

            </section>
        );
    }
}

export default Admin

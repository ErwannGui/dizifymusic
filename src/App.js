// import logo from './logo.svg';
import './App.scss';
import './App.css';
import Header from './header';
import React from "react";
import PrivateRoute from "./private-route";
import Admin from "./pages/admin";
import {fakeAuth} from "./fakeAuth";
import {Link, Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Search from "./pages/search";

import ArtistDetails from "./pages/artistDetails";
import AlbumDetails from "./pages/albumDetails";
import Login from "./pages/login";
import Playlist from "./pages/playlists";
import PlaylistDetails from "./pages/playlistDetails";

/*function isConnected() {
    return fakeAuth.isAuthenticated;
}*/

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isConnected: fakeAuth.isAuthenticated
        };
        console.log(this.state.isConnected); // ...
        if (!fakeAuth.isAuthenticated)
            this.refresh(1000);
    }

    refresh(ms) {
        setTimeout(() => {
            console.log('Login ??? Not logging ... Login ??? Not logging ...');
            if (fakeAuth.isConnected() !== this.state.isConnected) {
                console.log('Connected !', fakeAuth.isConnected(), fakeAuth.isAuthenticated)
                this.setState({
                    isConnected: fakeAuth.isAuthenticated
                });
                this.forceUpdate();
            } else {
                // console.log(fakeAuth.isConnected(), fakeAuth.isAuthenticated)
                this.refresh(ms);
            }
        }, ms)
    }

    render() {
        const { isConnected } = this.state;

        return (
            <div className="App">
                <Header/>
                <aside className="menu">
                    <p className="menu-label">
                        General
                    </p>
                    <ul className="menu-list">
                        <li><Link to="/">Dashboard</Link></li>
                        {isConnected &&
                        <li><Link to="/playlist">Playlist</Link></li>
                        }
                        {isConnected &&
                        <li><Link to="/favorite">Favoris</Link></li>
                        }
                    </ul>
                    <p className="menu-label">
                        Administration
                    </p>
                    <ul className="menu-list">
                        {/*<li><Link to="/admin/users">Utilisateurs</Link></li>
                        <li>
                            <ul>
                                <li><Link to="/admin/users">Liste des membres</Link></li>
                                <li><Link to="/admin/users#addUser">Ajouter un utilisateur</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/admin">Données</Link></li>*/}
                        <li>
                            <ul>
                                <li><Link to="/admin/songs">Titres</Link></li>
                                <li><Link to="/admin/artists">Artistes</Link></li>
                                <li><Link to="/admin/albums">Albums</Link></li>
                            </ul>
                        </li>
                    </ul>
                </aside>
                <main className="section">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/search" component={Search} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/profile" exact component={Profile} />
                        <Route path="/album/:id" exact component={AlbumDetails} />
                        <Route path="/artist/:id" exact component={ArtistDetails} />
                        <Route path="/playlist/:id" exact component={PlaylistDetails} />
                        <PrivateRoute
                            path="/playlist"
                            component={Playlist}
                            isAuthenticated={this.state.isConnected}
                        />
                        <PrivateRoute
                            path="/admin"
                            component={Admin}
                            isAuthenticated={this.state.isConnected}
                        />
                    </Switch>
                </main>
            </div>
        );
    }

}

export default App;

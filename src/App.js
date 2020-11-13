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

import ArtisteDetails from "./pages/artiste_details";
import AlbumDetails from "./pages/album_details";

function App() {
    return (
        <div className="App">
            <Header/>
            <aside className="menu">
                <p className="menu-label">
                    General
                </p>
                <ul className="menu-list">
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/playlist">Playlist</Link></li>
                    <li><Link to="/favorite">Favoris</Link></li>
                </ul>
                <p className="menu-label">
                    Administration
                </p>
                <ul className="menu-list">
                    <li><Link to="/admin/users">Utilisateurs</Link></li>
                    <li>
                        <ul>
                            <li><Link to="/admin/users">Liste des membres</Link></li>
                            <li><Link to="/admin/users#addUser">Ajouter un utilisateur</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/admin">Donnes</Link></li>
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
                    <Route path="/profile" exact component={Profile} />
                    <Route path="/album_details" exact component={AlbumDetails} />
                    <Route path="/artiste_details" exact component={ArtisteDetails} />
                    <PrivateRoute
                        path="/admin"
                        component={Admin}
                        isAuthenticated={fakeAuth.isAuthenticated}
                    />
                </Switch>
            </main>
        </div>
    );
}

export default App;

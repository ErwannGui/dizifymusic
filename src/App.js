import logo from './logo.svg';
import './App.scss';
import './App.css';
import Header from './header';
import React from "react";
import PrivateRoute from "./private-route";
import Admin from "./admin";
import {fakeAuth} from "./fakeAuth";
import {Route, Switch} from "react-router-dom";
import Home from "./home";
import Profile from "./profile";
import ArtisteDetails from "./artiste_details";
import AlbumDetails from "./album_details";

function App() {
    return (
        <div className="App">
            <Header/>
            <aside className="menu">
                <p className="menu-label">
                    General
                </p>
                <ul className="menu-list">
                    <li><a>Dashboard</a></li>
                    <li><a>Playlist</a></li>
                    <li><a>Favoris</a></li>
                </ul>
                <p className="menu-label">
                    Administration
                </p>
                <ul className="menu-list">
                    <li><a>Utilisateurs</a></li>
                    <li>
                        <ul>
                            <li><a>Liste des membres</a></li>
                            <li><a>Ajouter un utilisateur</a></li>
                        </ul>
                    </li>
                    <li><a>Donnes</a></li>
                    <li>
                        <ul>
                            <li><a>Titres</a></li>
                            <li><a>Artistes</a></li>
                            <li><a>Albums</a></li>
                        </ul>
                    </li>
                </ul>
            </aside>
            <main className="section">
                <Switch>
                    <Route path="/" exact component={Home} />
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

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

function App() {
    return (
        <div className="App">
            <Header/>
            <main className="section">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/profile" exact component={Profile} />
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

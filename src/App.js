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

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Switch>
                    <Route path="/" exact component={Home} />
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

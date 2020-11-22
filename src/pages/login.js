import React from 'react';
import {Redirect, withRouter, useHistory } from 'react-router-dom';
import {fakeAuth} from '../fakeAuth'
import {API_URL} from "../api";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            connected: false
        };
    }

    /*componentDidMount(){
        console.log(fakeAuth.isConnected());
        this.setState({
            connected: fakeAuth.isConnected()
        });
    }*/

    connect() {
        this.setState({
            connected: true
        });
        // console.log(this.state);
        // let history = useHistory();
        // history.push("/admin");
    }

    login = async (e) => {
        // console.log(e.target[0].value, e.target[1].value);
        e.preventDefault();
        await fetch(API_URL + 'authenticate', {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify({
                email: e.target[0].value,
                password: e.target[1].value
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                fakeAuth.authenticate(response);
                // this.connect();
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        const { from } = this.props.location.state || {from: {pathname: '/'}};
        console.log(this.state.connected, fakeAuth.isAuthenticated);

        if (fakeAuth.isAuthenticated) {
            console.log("Redirect" + fakeAuth.isAuthenticated);
            return (<Redirect to={this.state.connected ? '/admin' : '/'}/>)
        }

        return (
            <section className="login">
                <div className="card">
                    {from.pathname !== "/" &&
                    <p>You must log in to view the content at {from.pathname}</p>
                    }
                    <form onSubmit={($event) => this.login($event)} autoComplete="off">
                        {/*<form autoComplete="off">*/}
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" name="email" type="email" placeholder="Email address"/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-envelope"/>
                            </span>
                                <span className="icon is-small is-right">
                                <i className="fas fa-check"/>
                            </span>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="password" name="password"/>
                                <span className="icon is-small is-left">
                              <i className="fas fa-key"/>
                            </span>
                            </div>
                        </div>
                        <button className="button is-link" type="submit"> Log in </button>
                        {/*<button className="button is-link" onClick={this.login}> Log in </button>*/}
                    </form>
                </div>
            </section>
        )
    }
}

export default Login

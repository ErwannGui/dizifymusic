import React from 'react';
import {Redirect} from 'react-router-dom';
import {fakeAuth} from './fakeAuth'

export default class Login extends React.Component {
    state = {
        connected: false
    };

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({
                connected: true
            })
        })
    };

    render() {
        const { from } = this.props.location.state || {from: {pathname: '/'}};
        const { connected } = this.state;

        if (connected) {
            return (
                <Redirect to="/admin"/>
            )
        }

        return (
            <section className="login">
                <div className="card">
                    {from.pathname !== "/" &&
                        <p>You must log in to view the content at {from.pathname}</p>
                    }
                    <form onSubmit={this.login} autoComplete="off">
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" name="email" type="email" placeholder="Email address"/>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="password" name="password"/>
                                <span className="icon is-small is-left">
                                  <i className="fas fa-key"></i>
                                </span>
                            </div>
                        </div>
                        <button className="button is-link" type="submit"> Log in </button>
                    </form>
                </div>
            </section>
        )
    }
}

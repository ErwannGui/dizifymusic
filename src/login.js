import React from 'react';
import {Redirect} from 'react-router-dom';
import {fakeAuth} from './fakeAuth'

export default class Login extends React.Component {
    state = {
        redirectToReferrer: false
    };

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({
                redirectToReferrer: true
            })
        })
    };

    render() {
        const { from } = this.props.location.state || {from: {pathname: '/'}};
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return (
                <Redirect to={from}/>
            )
        }

        return (
            <section className="login">
                <div className="card">
                    {from.pathname !== "/" &&
                        <p>You must log in to view the content at {from.pathname} </p>
                    }
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="Email address"/>
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
                            <input className="input" type="password"/>
                            <span className="icon is-small is-left">
                              <i className="fas fa-key"></i>
                            </span>
                        </div>
                    </div>
                    <button className="button is-link" onClick={this.login}> Log in </button>
                </div>
            </section>
        )
    }
}

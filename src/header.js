import React, { PureComponent } from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './pages/login'

export default class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    toggleMenuBar(e) {
        const { open } = this.state;
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        this.setState({
            open: !open,
        });
    }

    closeMenuBar() {
        this.setState({ open: false });
    }

    render() {
        const { open } = this.state;
        return (
            <header>
                <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                    <div className="wrapper">
                        <div className="navbar-brand">
                            <Link to="/" className="navbar-item home"><strong>DizifyMusic</strong></Link>
                            <button
                                type="button"
                                onClick={e => this.toggleMenuBar(e)}
                                className={`navbar-burger ${open ? 'is-active' : ''}`}
                                aria-label="menu"
                                aria-expanded="false"
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    outline: 'none',
                                }}
                            >
                                <span aria-hidden="true" />
                                <span aria-hidden="true" />
                                <span aria-hidden="true" />
                            </button>
                        </div>
                        <div className={`navbar-menu ${open ? 'is-active' : ''}`}>
                            <Link className="navbar-item" to="/admin" onClick={() => this.closeMenuBar()}>
                                Admin
                            </Link>
                            <Link className="navbar-item" to="/profile" onClick={() => this.closeMenuBar()}>
                                Profile
                            </Link>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <form action="/search">
                                    <div className="field has-addons searchbar">
                                        <div className="control">
                                            <input className="input" type="text" name="q" placeholder="Search an artist or a song"/>
                                        </div>
                                        <div className="control">
                                            <button type="submit" className="button">
                                                <span className="icon is-small is-right">
                                                  <i className="fas fa-search"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="navbar-item">
                                <div className="buttons">
                                    <a className="button is-primary is-disabled">
                                        <strong>Sign up</strong>
                                    </a>
                                    <Link to="/login" className="button is-light">
                                        Log in
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <Route path="/login" exact component={Login} />
            </header>
        );
    }
}

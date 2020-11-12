import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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
            <div>
                <Router>
                    <nav className="navbar" role="navigation" aria-label="main navigation">
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
                                <Link className="navbar-item" to="/home" onClick={() => this.closeMenuBar()}>
                                    Home
                                </Link>
                            </div>
                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <div className="field has-addons searchbar">
                                        <div className="control">
                                            <input className="input" type="text" placeholder="Search an artist or a song"/>
                                        </div>
                                        <div className="control">
                                            <a className="button">
                                                <span className="icon is-small is-right">
                                                  <i className="fas fa-search"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="navbar-item">
                                    <div className="buttons">
                                        <a className="button is-primary">
                                            <strong>Sign up</strong>
                                        </a>
                                        <a className="button is-light">
                                            Log in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </Router>
            </div>
        );
    }
}

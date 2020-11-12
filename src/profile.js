import React from "react";

class Profile extends React.Component {
    render() {
        return (
            <div className="profile container">
                <div className="field is-horizontal section avatar_field">
                    <div className='column is-one-quarter is-horizontal-center'>
                        <div className='card equal-height'>
                            <div className='card-content is-flex is-horizontal-center'>
                                <figure className='image is-128x128 avatar_center'>
                                    <img alt="" src='https://unsplash.it/64'/>
                                </figure>
                            </div>
                            <div className="content">
                                <div className="buttons is-centered">
                                    <button className="button is-link">Changer d'avatar</button>
                                </div>
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
                <div className="field is-horizontal section">
                    <div className="field-body">
                        <div className="field">
                            <p className="control is-expanded has-icons-left">
                                <input className="input" type="text" placeholder="Name"/>
                                <span className="icon is-small is-left">
                                      <i className="fas fa-user"/>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control is-expanded has-icons-left has-icons-right">
                                <input className="input is-success" type="email" placeholder="Email" />
                                <span className="icon is-small is-left">
                                      <i className="fas fa-envelope"/>
                                    </span>
                                <span className="icon is-small is-right">
                                      <i className="fas fa-check"/>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile

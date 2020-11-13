import React from "react";

class Profile extends React.Component {
    render() {
        return (
            <div className="profile container">
                <div className="field is-horizontal section avatar_card">
                    <div className='column is-one-quarter'>
                        <div className='card equal-height'>
                            <div className='card-content is-flex avatar_card'>
                                <figure className='image is-128x128'>
                                    <img alt="" src='https://unsplash.it/64'/>
                                </figure>
                            </div>
                            <div className="content">
                                <div className="buttons is-centered">
                                    <button className="button is-link" id="showModal">Changer d'avatar</button>
                                </div>
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
                <div className="field is-horizontal section">
                    <div className="field-body">
                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <input className="input" type="email" placeholder="Email"/>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"/>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control has-icons-left">
                                <input className="input" type="password" placeholder="Password"/>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-lock"/>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="field is-grouped is-grouped-centered">
                    <p className="control">
                        <a className="button is-primary">
                            Sauvegarder
                        </a>
                    </p>
                </div>
                <div className="modal">
                    <div className="modal-background"/>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Modal title</p>
                            <button className="delete" aria-label="close"/>
                        </header>
                        <section className="modal-card-body">
                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is-success">Save changes</button>
                            <button className="button">Cancel</button>
                        </footer>
                    </div>
                </div>
                {/*<script>*/}
                {/*    $("#showModal").click(function() {*/}
                {/*    $(".modal").addClass("is-active");*/}
                {/*});*/}

                {/*    $(".modal-close").click(function() {*/}
                {/*    $(".modal").removeClass("is-active");*/}
                {/*});*/}
                {/*</script>*/}
            </div>


        );
    }
}

export default Profile

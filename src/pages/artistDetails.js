import React from "react";

class ArtistDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            data: this.props.artistData || {}
        }
    }

    render() {
        return (
            <div className="artistDetails">
                <p className="panel-heading">
                    Artiste name
                </p>
                <br/>
                <div className="columns">
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">John Smith</p>
                                        <p className="subtitle is-6">@johnsmith</p>
                                    </div>
                                </div>

                                <div className="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                    <a href="#">#css</a> <a href="#">#responsive</a>
                                    <br/>
                                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">John Smith</p>
                                        <p className="subtitle is-6">@johnsmith</p>
                                    </div>
                                </div>

                                <div className="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                    <a href="#">#css</a> <a href="#">#responsive</a>
                                    <br/>
                                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">John Smith</p>
                                        <p className="subtitle is-6">@johnsmith</p>
                                    </div>
                                </div>

                                <div className="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                    <a href="#">#css</a> <a href="#">#responsive</a>
                                    <br/>
                                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns">

                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">John Smith</p>
                                        <p className="subtitle is-6">@johnsmith</p>
                                    </div>
                                </div>

                                <div className="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                    <a href="#">#css</a> <a href="#">#responsive</a>
                                    <br/>
                                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">John Smith</p>
                                        <p className="subtitle is-6">@johnsmith</p>
                                    </div>
                                </div>

                                <div className="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                    <a href="#">#css</a> <a href="#">#responsive</a>
                                    <br/>
                                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">John Smith</p>
                                        <p className="subtitle is-6">@johnsmith</p>
                                    </div>
                                </div>

                                <div className="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                    <a href="#">#css</a> <a href="#">#responsive</a>
                                    <br/>
                                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ArtistDetails

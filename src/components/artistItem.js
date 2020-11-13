import React from 'react';

export default class ArtistItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.artistData
        };
    }

    render() {
        const { data } = this.state;
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={data.image} alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{data.name}</p>
                            <p className="subtitle is-6">{data.uuid}</p>
                        </div>
                    </div>

                    <div className="content">
                        {data.description} <a>@festival</a>. <br/>
                        <a href="#">#r&b</a> <a href="#">#hiphop</a>
                        <br/>
                            <time dateTime="2020-11-1">11:09 PM - 1 Nov 2020</time>
                    </div>
                </div>
            </div>
        )
    }
}

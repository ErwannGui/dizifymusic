import React from 'react';

export default class AlbumItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.albumData
        };
    }

    render() {
        const { data } = this.state;
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                    </figure>
                    <p className="album-title title is-5">Playlist</p>
                </div>
            </div>
        )
    }
}

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
                        {data && data.image !== "string" ? (
                        <img src={data.image} alt="Placeholder image"/>
                        ) : (
                            <img src="https://dj-network.com/wp-content/uploads/2019/09/formation_dj_producteur_ecole_dj_network-1259x1259.jpg" alt="Placeholder image"/>
                        )}
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
                            <p className="title is-4">{data.nom}</p>
                            {/*<p className="subtitle is-6">{data.uuid}</p>*/}
                        </div>
                    </div>

                    <div className="content">
                        {data.description &&
                            <p>{data.description}.</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

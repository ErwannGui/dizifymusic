import React from "react";

class AlbumDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            data: this.props.albumData || {}
        }
    }

    render() {
        return (
            <div className="albumDetails">
                <section className="panel">
                    <p className="panel-heading">
                        Album name
                    </p>
                    <div className="panel-block">
                        <table className="table is-fullwidth" style={{textAlign: 'center',}}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Titre</th>
                                    <th>Favoris</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>1</td>
                                    <td>Titre 1</td>
                                    <td className="is-icon">
                                        <a href="#">
                                            <i className="fas fa-star"/>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Titre 2</td>
                                    <td className="is-icon">
                                        <a href="#">
                                            <i className="fas fa-star"/>
                                        </a>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </section>
            </div>

        );
    }
}

export default AlbumDetails

import React from 'react';

export default class TitleItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.songData
        };
    }

    render() {
        const { data } = this.state;
        return (
            <tr>
                <td>
                    <span className="icon is-small">
                        <i className={data.isFavorite ? 'fas fa-star' : 'far fa-star'}/>
                    </span>
                </td>
                <td>{data.title}</td>
                <td>{data.artist}</td>
                <td>{data.album}</td>
                <td>{data.date}</td>
            </tr>
        )
    }
}

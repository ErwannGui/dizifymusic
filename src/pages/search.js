import React from "react";
import Carousel from 'react-elastic-carousel';
import TitleItem from "../components/titleItem";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 3, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 6, itemsToScroll: 1 }
];

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: null,
        };

        if (this.props.location.search) {
            this.state.query = this.parseParam('q');
        }
    }

    parseParam(param) {
        let query = this.props.location.search;
        query = query.substr(1);
        let result = {};
        query.split("&").forEach(function(part) {
            let item = part.split("=");
            result[item[0]] = decodeURIComponent(item[1]);
        });
        return result[param];
    }

    getSearchResult() {
        let result = [];
        result['titles'] = [
            {
                id: 1,
                title: 'Song #001',
                artist: 'DJ Miiicks',
                album: 'Freestyle',
                date: '13/11/2020',
                isFavorite: true
            },
            {
                id: 2,
                title: 'Song #002',
                artist: 'DJ Miiicks',
                album: 'Freestyle',
                date: '13/11/2020',
                isFavorite: false
            },
            {
                id: 3,
                title: 'Song #003',
                artist: 'DJ Miiicks',
                album: 'Freestyle',
                date: '13/11/2020',
                isFavorite: false
            },
            {
                id: 4,
                title: 'Song #004',
                artist: 'DJ Miiicks',
                album: 'Freestyle',
                date: '13/11/2020',
                isFavorite: true
            },
            {
                id: 5,
                title: 'Song #005',
                artist: 'DJ Miiicks',
                album: 'Freestyle',
                date: '13/11/2020',
                isFavorite: false
            },
        ];
        result['artists'] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        result['playlists'] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        result[0] = 'test';
        return result;
    }

    render() {
        const { query } = this.state;
        let res = this.getSearchResult();

        return (
            <section className="search">
                <h1 className="has-text-white is-size-4">Recherche</h1>
                <form action="/search">
                    <div className="field has-addons searchbar">
                        <div className="control">
                            <input className="input" type="text" name="q" value={query} onChange={(e) => {this.setState({query: e.target.value})}}/>
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
                {query !== '' && res.length === 0 &&
                    <p className="has-text-white">Aucun résultat pour votre recherche</p>
                }
                {query !== '' && res.length > 0 &&
                    <div className="container wrapper">
                        {res['titles'].length > 0 &&
                        <div className="titles">
                            <h2 className="is-size-5 has-text-white">Titres</h2>
                            <table className="table is-fullwidth is-hoverable" style={{textAlign: 'center',}}>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Titre</th>
                                    <th>Artiste</th>
                                    <th>Album</th>
                                    <th>Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {res['titles'].map((item) => <TitleItem songData={item}/>)}
                                </tbody>
                            </table>
                        </div>
                        }
                        <div className="vertical-wrapper">
                            {res['artists'].length > 0 &&
                            <div className="artists">
                                <h2 className="is-size-5 has-text-white">Artists</h2>
                                <br/>
                                <Carousel breakPoints={breakPoints}>
                                    {res['artists'].map((item) => <div className="card has-text-centered" key={item}>{item}</div>)}
                                </Carousel>
                            </div>
                            }
                            {res['playlists'].length > 0 &&
                            <div className="playlists">
                                <h2 className="is-size-5 has-text-white">Playlists</h2>
                                <Carousel breakPoints={breakPoints}>
                                    {res['playlists'].map((item) => <div className="card has-text-centered" key={item}>{item}</div>)}
                                </Carousel>
                            </div>
                            }
                        </div>
                    </div>
                }
            </section>
        );
    }
}

export default Search

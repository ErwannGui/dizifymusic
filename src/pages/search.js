import React from "react";

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

    render() {
        const { query } = this.state;

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
                {query !== '' &&
                    <p className="has-text-white">Aucun résultat pour votre recherche</p>
                }
            </section>
        );
    }
}

export default Search

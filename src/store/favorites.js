import {API_URL} from "../api";

export const favorites = {
    favorites: {},
    setFavorites(fav) {
        console.log(fav);
        this.favorites = Array.isArray(fav) ? fav[0] : fav;
    },
    getId() {
        return this.favorites.utilisateur ? this.favorites.utilisateur.id_utilisateur : null;
    },
    format(id) {
        let albums = [];
        let artists = [];
        let songs = [];
        this.favorites.albums.forEach((item) => {
            albums.push(item.id_album);
        });
        this.favorites.artistes.forEach((item) => {
            artists.push(item.id_artiste);
        });
        this.favorites.titres.forEach((item) => {
            songs.push(item.id_titre);
        });
        return {
            albumsIds: albums,
            artisteIds: artists,
            titresIds: songs,
            utilisateurId: id || this.getId()
        };
    },
    isFavoriteArtist(id) {
        if (this.favorites.artistes) {
            let res = this.favorites.artistes.filter((item) => { return item.id_artiste === id; });
            // console.log(id, this.favorites.artistes, 'Is faroris : ', res);
            return res.length > 0 ? res[0].id_artiste : [];
        } return [];
    },
    isFavoriteAlbum(id) {
        if (this.favorites.albums) {
            let res = this.favorites.albums.filter((item) => { return item.id_album === id; });
            return res.length > 0 ? res[0].id_album : [];
        } return [];
    },
    isFavoriteTitle(id) {
        if (this.favorites.titres) {
            let res = this.favorites.titres.filter((item) => { return item.id_titre === id; });
            return res.length > 0 ? res[0].id_titre : [];
        } return [];
    },
    addAlbum(item) {
        setTimeout(() => {
            this.favorites.albums.push(item);
        }, 300);
    },
    addTitle(item) {
        setTimeout(() => {
            this.favorites.titres.push(item);
        }, 300)
    },
    addArtist(item) {
        setTimeout(() => {
            this.favorites.artistes.push(item);
        }, 300)
    },
    createDefault(id) {
        const body = JSON.stringify(this.format(id));
        fetch(API_URL + 'favoris', {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": body
        })
            .then(response => response.json())
            .then(response => {
                this.setFavorites(response);
            })
            .catch(err => {
                console.log(err);
            });
    }
};

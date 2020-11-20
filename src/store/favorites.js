export const favorites = {
    favorites: {},
    setFavorites(fav) {
        console.log(fav);
        this.favorites = fav[0];
    },
    getId() {
        return this.favorites.id_favoris;
    },
    format() {
        setTimeout(() => {
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
                utilisateurId: this.getId()
            };
        }, 300);
    },
    isFavoriteArtist(id) {
        setTimeout(() => {
            if (this.favorites.artistes) {
                let res = this.favorites.artistes.filter((item) => { return item.id_artiste === id; });
                return res.length > 0;
            } return false;
        }, 300);
    },
    isFavoriteAlbum(id) {
        setTimeout(() => {
            if (this.favorites.albums) {
                let res = this.favorites.albums.filter((item) => { return item.id_album === id; });
                return res.length > 0;
            } return false;
        }, 300);
    },
    isFavoriteTitle(id) {
        setTimeout(() => {
            if (this.favorites.titres) {
                let res = this.favorites.titres.filter((item) => { return item.id_titre === id; });
                return res.length > 0;
            } return false;
        }, 300);
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
};

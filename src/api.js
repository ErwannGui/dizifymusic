// export const API_URL = "http://e8f7ab275e25.ngrok.io/";
export const API_URL = "https://dizifymusic-backend.herokuapp.com/";

export class Api {
    data;
    constructor() {
        this.data = null;
    }

    list(res) {
        // read all entities
        fetch(API_URL + res, {
            "method": "GET",
            "headers": {
                "referer": "localhost:3000",
                "x-api-key": "API_KEY"
            }
        })
            .then(response => response.json())
            .then(response => {
                this.data = response;
            })
            .catch(err => {
                console.log(err);
                this.data = {error: err};
            });

        console.log(this.data);
        return this.data;
    }

    show(res, id) {
        // read all entities
        fetch(API_URL + res + `/${id}`, {
            "method": "GET",
            "headers": {
                "referer": "localhost:3000",
                "x-api-key": "API_KEY"
            }
        })
            .then(response => response.json())
            .then(response => {
                this.data = response;
            })
            .catch(err => {
                console.log(err);
                this.data = {error: err};
            });

        return this.data;
    }

    create(res, body) {
        // creates entity
        fetch(API_URL + res, {
            "method": "POST",
            "headers": {
                "referer": "localhost:3000",
                "x-api-key": "API_KEY",
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": body
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                this.data = true;
            })
            .catch(err => {
                console.log(err);
                this.data = false;
            });

        return this.data;
    }

    update(res, body) {
        // this will update entries with PUT
        fetch(API_URL + res, {
            "method": "PUT",
            "headers": {
                "referer": "localhost:3000",
                "x-api-key": "API_KEY",
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": body
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.data = true;
            })
            .catch(err => {
                console.log(err);
                this.data = false;
            });

        return this.data;
    }

    delete(res, id) {
        // deletes entities
        fetch(API_URL + res + `/${id}`, {
            "method": "DELETE",
            "headers": {
                "referer": "localhost:3000",
                "x-api-key": "API_KEY",
            }
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.data = true;
            })
            .catch(err => {
                console.log(err);
                this.data = false;
            });

        return this.data;
    }
}

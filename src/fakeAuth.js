/* A fake authentication function */
export var fakeAuth = {
    isAuthenticated: false,
    id: null,
    token: null,
    isConnected() {
        // console.log(this.isAuthenticated);
        return this.isAuthenticated;
    },
    authenticate(response) {
        this.isAuthenticated = true;
        this.id = response.id_utilisateur;
        this.token = response.token;
        // setTimeout(cb, 100);
    },
};

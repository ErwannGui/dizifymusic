/* A fake authentication function */
export var fakeAuth = {
    isAuthenticated: false,
    token: null,
    isConnected() {
        // console.log(this.isAuthenticated);
        return this.isAuthenticated;
    },
    authenticate(token) {
        this.isAuthenticated = true;
        this.token = token;
        // setTimeout(cb, 100);
    },
};

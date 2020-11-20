/* A fake authentication function */
export var fakeAuth = {
    isAuthenticated: true,
    token: null,
    isConnected() {
        setTimeout(() => {
            console.log(this.isAuthenticated);
            return this.isAuthenticated;
        }, 300)
    },
    authenticate(token) {
        this.isAuthenticated = true;
        this.token = token;
        // setTimeout(cb, 100);
    },
};

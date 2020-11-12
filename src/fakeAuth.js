/* A fake authentication function */
export const fakeAuth = {
    isAuthenticated: true,
    authenticate(cb) {
        this.isAuthenticated = true;
        // setTimeout(cb, 100);
    },
};

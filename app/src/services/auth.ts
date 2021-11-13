export default class auth {
    static setDataFromLoginResponse(loginResponse: any) {
        const { token, ...user } = loginResponse;
        this.setCurrentUser(user);
        this.setToken(token);
    }

    static setDataFromAnonResponse(tokenResponse: any) {
        const { token, name } = tokenResponse;
        this.setCurrentUser({id: null, name: name});
        this.setToken(token);
    }

    private static setCurrentUser(user: any) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    private static setToken(token: any) {
        localStorage.setItem('token', JSON.stringify(token));
    }

    static getCurrentUser() {
        if (typeof window == 'undefined') return null;
        const user = JSON.parse(localStorage.getItem('user'));
        return user;
    }

    static getToken() {
        if (typeof window == 'undefined') return null;
        const token = JSON.parse(localStorage.getItem('token'));
        return token;
    }
}

export const state = () => ({
    authenticated: false
})

export const mutations = {
    userLoggedIn(state) {
        state.authenticated = true
    },
    userLoggedOut(state) {
        state.authenticated = false
    }
}
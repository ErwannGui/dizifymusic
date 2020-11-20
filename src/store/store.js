import { createSlice, configureStore } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'counter',
    initialState: {
        fullName: null,
        token: 'XX-TOKEN-XX',
        rights: null,
        avatar: null,
        favorites: null
    },
    reducers: {
        setName: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.fullName = ''
        },
        setToken: state => {
            state.token = 'MY SECRET TOKEN'
        },
        setRights: state => {
            state.rights = []
        },
        setAvatar: state => {
            state.avatar = ''
        },
        setFavorites: state => {
            state.favorites = {}
        }
    }
});

export const { setName, setToken, setRights, setAvatar } = userSlice.actions;

const store = configureStore({
    reducer: userSlice.reducer
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(setName());
store.dispatch(setToken());
store.dispatch(setRights());

// Pas eu le temps d'approfondir ce code pour avoir un store propre, on a fait au plus vite

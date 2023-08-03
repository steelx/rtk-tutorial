import { combineReducers, configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { filteredUsersSlice } from './filtered-users/filtered-users.slice'
import { usersApi } from '../api/users.api'

const store = ({ initialAction = {}, initialState = {} }): EnhancedStore => {
    const reducer = combineReducers({
        [filteredUsersSlice.name]: filteredUsersSlice.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    })

    // @ts-expect-error typeof initialAction not defined
    const preloadedState = reducer(initialState, initialAction)

    return configureStore({
        reducer,
        preloadedState,
        middleware: (getDefaultMiddleware) => [
            ...getDefaultMiddleware({
                serializableCheck: false,
            }),
            usersApi.middleware,
        ],
        devTools: {
            name: '@ajinkyax'
        }
    })
}
const initialState = {};
const appStore = store(initialState);

export type AppDispatch = typeof appStore['dispatch']
export type RootState = ReturnType<typeof appStore.getState>

export default appStore

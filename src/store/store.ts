import { combineReducers, configureStore, EnhancedStore } from '@reduxjs/toolkit'

const store = ({ initialAction = {}, initialState = {} }): EnhancedStore => {
    const reducer = combineReducers({
        // ...
    })

    // @ts-expect-error typeof initialAction not defined
    const preloadedState = reducer(initialState, initialAction)

    return configureStore({
        reducer,
        preloadedState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,
        }),
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

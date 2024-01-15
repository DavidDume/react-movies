// src/context/GlobalStateContext.js

import React, { createContext, useContext, useReducer } from "react"

const GlobalStateContext = createContext()

export const GlobalStateProvider = ({ children }) => {
    const initialState = {
        // Your initial global state here
        bookmarks: [],
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD_BOOKMARK":
                return { ...state, bookmarks: [...state.bookmarks, action.payload] }

            // Add other cases as needed
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <GlobalStateContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalStateContext.Provider>
    )
}

export const useGlobalState = () => {
    const context = useContext(GlobalStateContext)
    if (!context) {
        throw new Error("useGlobalState must be used within a GlobalStateProvider")
    }
    return context
}

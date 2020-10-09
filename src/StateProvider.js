import React, { createContext, useReducer } from 'react';

// creating the context 
export const StateContext = createContext();

// Setting up the State provider which will wrap the entire app
export const StateProvider = ({ initialState, reducer, children }) => (
    <StateContext.Provider value = { useReducer(reducer, initialState) }>
        {children}
    </StateContext.Provider>
);
import React, { createContext, useContext, useReducer } from 'react';

// creating the context 
export const StateContext = createContext();

// Setting up the State provider which will wrap the entire app
export const StateProvider = ({ initialState, reducer, children }) => (
    <StateContext.Provider value = { useReducer(reducer, initialState) }>
        {children}
    </StateContext.Provider>
);

// this is variable which will be exported to the entire app in order to use the values in State provider or Object or Data Store
export const useStateValue = useContext(StateContext);
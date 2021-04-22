import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import firebase from 'firebase'
export const StateContext = createContext();
export const UserContext = React.createContext()

// higher order component
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pull the info from the data layer
export const useStateValue = () => useContext(StateContext);
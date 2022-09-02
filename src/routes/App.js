import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Layout from '../containers/Layout';
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";



const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
            <Layout>                
                    <Route exact path="/login" component={Login} />                
            </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;
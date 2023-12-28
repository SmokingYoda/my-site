import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header";
import Navigation from "./components/Navigation";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Navigation />
            </BrowserRouter>
        </div>
    );
}
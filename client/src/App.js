import React from "react";
import "./App.css";
import Header from "./components/header";
import LiftersContainer from "./components/lifters/liftersContainer";

function App() {
    const style = {
        padding: '20px',
        fontFamily: 'sans-serif',
        fontSize: '20px'
    }
    return (<div style={style}>
        <Header />
        <LiftersContainer />
    </div>)
}

export default App;

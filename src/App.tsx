import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import Footer from "./site/Footer";

function App() {
    return (
        <div>
            <Header titleForHeader={"Header title"}/>
            <Body titleForBody={"Body title"}/>
            <Footer titleForFooter={"Footer title"}/>
        </div>
    );
}


export default App;

import React from 'react';
import pairagraph from './Data/pairaData';
import Header from './Components/Header'
import Typing from './Components/Typing';
import Footer from './Components/Footer';

const App = () => {
    console.log(pairagraph);
    return (
        <div className='container'>
            <Header />
            {/* <ShowData pairagrap={pairagraph} /> */}
            <Typing />
            <Footer />
        </div>
    );
}

export default App;
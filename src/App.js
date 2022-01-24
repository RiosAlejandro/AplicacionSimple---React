import React from 'react';
import './App.css';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Main>
        <Cards />
      </Main>

      <Footer />
    </div>
  );
}

export default App;

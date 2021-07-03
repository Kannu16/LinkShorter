import React from 'react';
import NavBar from './components/NavBar';
import Section from './components/Section';
import SearchBar from './components/SearchBar';
import AdvanceStat from './components/AdvanceStat';
import Footer from './components/Footer';
const App = ()=>{
  return(
    <>
     <NavBar />
     <Section />
     <SearchBar />
     <AdvanceStat />
     <Footer />
    </>
  )
}
export default App;
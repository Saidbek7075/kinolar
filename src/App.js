import Footer from "./layut/Footer";
import Header from "./layut/Header";
import Main from "./layut/Main";
import React from 'react';

class App extends React.Component{

  render(){
    return(
      <>
    <Header />
    <Main />
    <Footer />
    </>
    )
  }
}

export default App;
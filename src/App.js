import React, {useEffect} from 'react';
import {Route} from 'react-router-dom'; 
//Comonents & Pages
import Home from './pages/home';
import Nav from './components/Nav';
//Styles
import GlobalStyles from './components/GlobalStyles';

function App() {
  
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;

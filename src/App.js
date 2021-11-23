
import './App.css';

import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="py-3">
        <Container>
          <Router>
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/product/:id' element={<ProductScreen />} />
            </Routes>
          </Router>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}
export default App;

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/PorfileScreen';
import ShippingScreen from './screens/ShippingScreen';


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
        <main className='py-3'>
          <Container>
          <Routes>
              <Route path='/' element={<HomeScreen/>}></Route>
              <Route path='/product/:id' element={<ProductScreen/>}></Route>
              <Route path='/cart/:id' element={<CartScreen/>}></Route>
              <Route path='/login' element={<LoginScreen/>}></Route>
              <Route path='/register' element={<RegisterScreen/>}></Route>
              <Route path='/profile' element={<ProfileScreen/>}></Route>
              <Route path='/shipping' element={<ShippingScreen/>}></Route>
          </Routes>        
          </Container>
        </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

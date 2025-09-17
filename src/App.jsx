import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import DefaultLayout from './layouts/DefaultLayout'
import DetailProduct from './pages/DetailProduct'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={HomePage} />
            <Route path='/videogames/:id' Component={DetailProduct}></Route>
          </Route>
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App

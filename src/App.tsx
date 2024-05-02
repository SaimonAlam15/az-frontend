import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Products } from './pages/Products/Products'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='about' element={ <About/> } />
        <Route path='products' element={ <Products/> } />
      </Routes>
    <Footer/>
    </>
  )
}

export default App

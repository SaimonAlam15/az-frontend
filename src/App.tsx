import { Outlet, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Products } from './pages/Products/Products'
import { Protected } from './utils/Protected'

function App() {
  return (
    <>
    <Routes>
      <Route
      element={
        <div>
          <Navbar />
          <Outlet />
          <Footer/>
        </div>
      }
      >
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/products" 
      element={
      <Protected isLoggedIn={true}>
        <Products/>
      </Protected>
      } />
</Route>
      </Routes>
    </>
  )
}

export default App

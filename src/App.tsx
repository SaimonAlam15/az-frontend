import { Outlet, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Products } from './pages/Products/Products'
import { Protected } from './utils/Protected'
import { AuthProvider } from './context/AuthContext'
import { Login } from './pages/Login/Login'

function App() {
  return (
    <>
    <AuthProvider>
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
      <Route path="/login" element={<Login/>} />
      </Routes>
      </AuthProvider>
    </>
  )
}

export default App

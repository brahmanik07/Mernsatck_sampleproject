import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Register from "./pages/register"
import { Routes,Route } from "react-router-dom"

function App() {
  return(
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>        
      </Routes>

      <Footer></Footer>
   
    </div>
  )
}

export default App
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './components/Header'
import Footer from "./components/Footer"
import './App.css'

function App() {
  

  return (
    <>
    <Header />
      <main className='container py-3'>
        <section>
          <img src="https://placehold.co/600x300?text=Players+Playing" alt="Players Playing Image" className="img-fluid" />
        </section>

        <section className="py-4">
          <h2>Our Players</h2>
          <p> typesetting industry. Lorem Ipsum has been the industry's standard dumm</p>
          <Link to="/players" className="btn btn-primary">View Players</Link>
        </section>

        <section className="py-4">
          <h2>Team Performance</h2>
          <p> typesetting industry. Lorem Ipsum has been the industry's standard dumm</p>
          <Link to="/report" className="btn btn-primary">View Performance</Link>
        </section>
       
      </main>
      <Footer />
    </>
  )
}

export default App

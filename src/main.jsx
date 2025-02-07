import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import Players from './pages/Players.jsx'
import Report from './pages/Report.jsx'
import PlayerDetails from './pages/PlayerDetails.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/players",
    element: <Players />
  },

  {
    path: "/report",
    element: <Report />
  },

  {
    path: "/playerDetails",
    element: <PlayerDetails />
  },

  {
    path: "/players/:id",
    element: <PlayerDetails />
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)

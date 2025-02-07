import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom"

export const players = [
  {
    id: 1,
    name: "Lionei Messi",
    position: "Forward",
    team: "Paris Saint-Germain",
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    position: "Forward",
    team: "Manchester United",
  },
  {
    id: 3,
    name: "Neymar Jr",
    position: "Forward",
    team: "Paris Saint-Germain",
  },
];

const Players = () => {
 
  return (
    <>
      <Header />
      <main className="container">
        <h1>List of Players</h1>
        <div className="mb-3">
          <ul className="list-group">
            {players.map((player) => (
              <li key={player.id} className="list-group-item">
                <>
                <h4>{player.name}</h4>
                <p>{player.position}</p>
                </>
                <Link to={`/players/${player.id}`} className="btn btn-primary">View Details</Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Players;
